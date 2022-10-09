using UnityEngine;
using UnityEngine.Events;

public class CameraFovChanger : MonoBehaviour
{
    //private Camera _camera;
    private float _screenRatio;

    public event UnityAction Portrait;
    public event UnityAction LandScape;

    private void Awake()
    {
        //_camera = GetComponent<Camera>();
        _screenRatio = ((float)Screen.width / (float)Screen.height);
        ChangeFov();
    }

    private void Update()
    {
        float currentScreenRatio = (Screen.width / Screen.height);

        if (currentScreenRatio != _screenRatio)
        {
            _screenRatio = currentScreenRatio;
            ChangeFov();
        }
    }

    private void ChangeFov()
    {
        if (_screenRatio >= 1)
        {
            //_camera.fieldOfView = 35;
            LandScape?.Invoke();
        }
        else if (_screenRatio < 1)
        {
            //_camera.fieldOfView = 57;
            Portrait?.Invoke();
        }
    }
}
