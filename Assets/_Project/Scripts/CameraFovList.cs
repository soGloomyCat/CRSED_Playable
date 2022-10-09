using UnityEngine;
using System;
using System.Collections.Generic;

namespace ScenarioFour
{
    [CreateAssetMenu(fileName = "CameraFovList", menuName = "GameAssets/CameraFovList")]
    public class CameraFovList : ScriptableObject
    {
        [SerializeField] private CameraFov[] _fovList;

        private Dictionary<CameraType, CameraFov> _cameras = new Dictionary<CameraType, CameraFov>();

        public void Init()
        {
            foreach (CameraFov fov in _fovList)
                _cameras.Add(fov.CameraType, fov);
        }

        public int GetLandscape(CameraType type)
        {
            if (!_cameras.ContainsKey(type))
                return 0;

            return _cameras[type].Landscape;
        }

        public int GetPortrait(CameraType type)
        {
            if (!_cameras.ContainsKey(type))
                return 60;

            return _cameras[type].Portrait;
        }
    }

    [Serializable]
    public class CameraFov
    {
        [SerializeField] private CameraType _cameraType;
        [SerializeField] private int _landscape;
        [SerializeField] private int _portrait;

        public CameraType CameraType => _cameraType;
        public int Landscape => _landscape;
        public int Portrait => _portrait;
    }
}
