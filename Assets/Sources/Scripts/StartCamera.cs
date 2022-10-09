using System.Collections;
using UnityEngine;
using Cinemachine;

public class StartCamera : MonoBehaviour
{
    [SerializeField] private CinemachineVirtualCamera _startCamera;
    [SerializeField] private CinemachineSmoothPath _path;
    [SerializeField] private CinemachineVirtualCamera _player;
    [SerializeField] private Canvas _canvas;

    private CinemachineTrackedDolly _dolly;
    private Coroutine _coroutine;

    public void Awake()
    {
        _dolly = _startCamera.GetComponent<CinemachineVirtualCamera>().GetCinemachineComponent<CinemachineTrackedDolly>();
        _dolly.m_PathPosition = 0;

        if (_coroutine != null)
            StopCoroutine(_coroutine);

        _coroutine = StartCoroutine(FinisherCameraMove());
    }

    private IEnumerator FinisherCameraMove()
    {
        _startCamera.gameObject.SetActive(true);

        float lerp = 0;

        while (lerp < _path.MaxPos)
        {
            yield return null;
            lerp += (Time.deltaTime);
            _dolly.m_PathPosition = lerp;
        }

        _player.gameObject.SetActive(true);

        yield return new WaitForSeconds(1f);
        _canvas.gameObject.SetActive(true);
    }
}