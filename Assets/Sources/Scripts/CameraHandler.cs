using Cinemachine;
using UnityEngine;

public class CameraHandler : MonoBehaviour
{
    [SerializeField] private JumpHandler _jumpHandler;
    [SerializeField] private CinemachineVirtualCamera _firstCamera;
    [SerializeField] private CinemachineVirtualCamera _secondCamera;
    [SerializeField] private CinemachineVirtualCamera _thirdCamera;
    [SerializeField] private CinemachineVirtualCamera _fourthCamera;
    [SerializeField] private CinemachineVirtualCamera _fifthCamera;

    private void OnEnable()
    {
        _jumpHandler.NeedRelieveFirstCamera += RelieveFirstCamera;
        _jumpHandler.NeedChangeCamera += ChangeCamera;
        _jumpHandler.NeedRepeatChangeCamera += RepeatChangeCamera;
        _jumpHandler.NeedSecondRepeatChangeCamera += RepeatSecondChangeCamera;
        _jumpHandler.NeedActivateFinalCamera += ActivateFinalCamera;
    }

    private void OnDisable()
    {
        _jumpHandler.NeedRelieveFirstCamera -= RelieveFirstCamera;
        _jumpHandler.NeedChangeCamera -= ChangeCamera;
        _jumpHandler.NeedRepeatChangeCamera -= RepeatChangeCamera;
        _jumpHandler.NeedSecondRepeatChangeCamera -= RepeatSecondChangeCamera;
        _jumpHandler.NeedActivateFinalCamera -= ActivateFinalCamera;
    }

    private void RelieveFirstCamera()
    {
        _firstCamera.Follow = null;
    }

    private void ChangeCamera()
    {
        _secondCamera.gameObject.SetActive(true);
        _firstCamera.gameObject.SetActive(false);
    }

    private void RepeatChangeCamera()
    {
        _secondCamera.LookAt = null;
        _thirdCamera.gameObject.SetActive(true);
        _secondCamera.gameObject.SetActive(false);
    }

    private void RepeatSecondChangeCamera()
    {
        _fourthCamera.gameObject.SetActive(true);
        _thirdCamera.gameObject.SetActive(false);
    }

    private void ActivateFinalCamera()
    {
        _fifthCamera.gameObject.SetActive(true);
        _fourthCamera.gameObject.SetActive(false);
    }
}
