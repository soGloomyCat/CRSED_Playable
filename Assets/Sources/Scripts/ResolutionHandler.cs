using Cinemachine;
using UnityEngine;

public class ResolutionHandler : MonoBehaviour
{
    [SerializeField] private CinemachineVirtualCamera _secondCamera;
    [SerializeField] private CinemachineVirtualCamera _fourthCamera;
    [SerializeField] private CinemachineVirtualCamera _fifthCamera;

    private CinemachineTransposer _secondCameraTransporent;
    private float _secondCameraStartFOV;
    private Vector3 _secondCameraStartFollowOffset;
    private float _fourthCameraStartFOV;
    private Vector3 _fifthCameraStartPosition;
    private Quaternion _fifthCameraStartRotation;

    private void Awake()
    {
        _secondCameraTransporent = _secondCamera.GetCinemachineComponent<CinemachineTransposer>();
        _secondCameraStartFOV = _secondCamera.m_Lens.FieldOfView;
        _secondCameraStartFollowOffset = _secondCameraTransporent.m_FollowOffset;
        _fourthCameraStartFOV = _secondCamera.m_Lens.FieldOfView;
        _fifthCameraStartPosition = _fifthCamera.transform.position;
        _fifthCameraStartRotation = _fifthCamera.transform.rotation;
    }

    private void Update()
    {
        DetermineResolution();
    }

    private void DetermineResolution()
    {
        float screenRatio = (Screen.width / Screen.height);

        if (screenRatio >= 1)
        {
            _secondCamera.m_Lens.FieldOfView = _secondCameraStartFOV;
            _secondCameraTransporent.m_FollowOffset = _secondCameraStartFollowOffset;
            _fourthCamera.m_Lens.FieldOfView = _fourthCameraStartFOV;
            _fifthCamera.transform.position = _fifthCameraStartPosition;
            _fifthCamera.transform.rotation = _fifthCameraStartRotation;
        }
        else if (screenRatio < 1)
        {
            _secondCamera.m_Lens.FieldOfView = 90;
            _secondCameraTransporent.m_FollowOffset = new Vector3(6.75f, 2f, -5.81f);
            _fourthCamera.m_Lens.FieldOfView = 100;
            _fifthCamera.transform.position = new Vector3(445.9f, 4.03f, 548.89f);
            _fifthCamera.transform.rotation = Quaternion.Euler(-0.33f, 201.5f, 0);
        }
    }
}
