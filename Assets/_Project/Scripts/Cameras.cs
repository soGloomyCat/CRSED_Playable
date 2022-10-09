using System.Collections.Generic;
using UnityEngine;
using System;
using System.Collections;
using Cinemachine;

namespace ScenarioFour
{
    public class Cameras : MonoBehaviour
    {
        [SerializeField] private CreoCamera[] _cameras;
        [SerializeField] private CameraFovList _camerasFovList;
        [SerializeField] private CameraFovChanger _cameraFovChanger;
        //[SerializeField] private CinemachineVirtualCamera _gobletCamera;

        //private CinemachineTrackedDolly _dolly;
        private Dictionary<CameraType, CinemachineVirtualCamera> _list = new Dictionary<CameraType, CinemachineVirtualCamera>();

        private void Awake()
        {
            _camerasFovList.Init();

            foreach (CreoCamera creoCamera in _cameras)
                _list.Add(creoCamera.Type, creoCamera.Camera);

            //_dolly = _gobletCamera.GetComponent<CinemachineVirtualCamera>().GetCinemachineComponent<CinemachineTrackedDolly>();
            //_dolly.m_PathPosition = 0;
        }

        private void OnEnable()
        {
            _cameraFovChanger.LandScape += OnLandScape;
            _cameraFovChanger.Portrait += OnPortrait;
        }

        private void OnDisable()
        {
            _cameraFovChanger.LandScape -= OnLandScape;
            _cameraFovChanger.Portrait -= OnPortrait;
        }

        public void Activate(CameraType type)
        {
            foreach (CreoCamera creoCamera in _cameras)
            {
                if (type == creoCamera.Type)
                    creoCamera.Camera.Priority = 20;
                else
                    creoCamera.Camera.Priority = 0;
            }

            /*
            if (type == CameraType.Goblet)
                StartCoroutine(GobletCameraMove());
            */
        }

        private void OnPortrait()
        {
            foreach (KeyValuePair<CameraType, CinemachineVirtualCamera> pair in _list)
            { 
                pair.Value.m_Lens.FieldOfView = _camerasFovList.GetPortrait(pair.Key);
            }
        }

        private void OnLandScape()
        {
            foreach (KeyValuePair<CameraType, CinemachineVirtualCamera> pair in _list)
            {
                pair.Value.m_Lens.FieldOfView = _camerasFovList.GetLandscape(pair.Key);
            }
        }

        /*
        private IEnumerator GobletCameraMove()
        {
            float lerp = 0;

            while (lerp < 1)
            {
                yield return null;
                lerp += (Time.deltaTime * .3f);
                //_dolly.m_PathPosition = lerp;
            }
        }
        */
    }



    [Serializable]
    public class CreoCamera
    {
        [SerializeField] private CinemachineVirtualCamera _camera;
        [SerializeField] private CameraType _type;

        public CinemachineVirtualCamera Camera => _camera;

        public CameraType Type => _type;
    }

    public enum CameraType
    {
        Ass,
        EnemyLeftSide,
        TeleportStart,
        TeleportFinish,
        BehindRightShoulder,
        Head
    }
}