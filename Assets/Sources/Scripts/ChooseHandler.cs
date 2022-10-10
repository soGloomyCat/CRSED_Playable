using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Cinemachine;

public class ChooseHandler : MonoBehaviour
{
    private const int CirclesCount = 20;

    [SerializeField] private CinemachineBrain _brain;
    [SerializeField] private SoundHandler _soundHandler;
    [SerializeField] private CinemachineBlenderSettings _ericSettings;
    [SerializeField] private CinemachineBlenderSettings _viperSettings;
    [SerializeField] private GameObject _ericScene;
    [SerializeField] private Image _ericSceneBackground;
    [SerializeField] private GameObject _viperScene;
    [SerializeField] private Image _viperSceneBackground;
    [SerializeField] private Button _chooseButton;
    [SerializeField] private List<GameObject> _characters;
    [SerializeField] private Image _frame;

    private Coroutine _coroutine;

    private void OnEnable()
    {
        _chooseButton.onClick.AddListener(PrepairChooseCharacter);
    }

    private void OnDisable()
    {
        _chooseButton.onClick.RemoveListener(PrepairChooseCharacter);
    }

    private void PrepairChooseCharacter()
    {
        _chooseButton.gameObject.SetActive(false);

        if (_coroutine != null)
            StopCoroutine(_coroutine);

        _coroutine = StartCoroutine(ChooseCharacter());
    }

    private IEnumerator ChooseCharacter()
    {
        int currentCard;
        WaitForSeconds firstWaiter = new WaitForSeconds(0.2f);
        WaitForSecondsRealtime secondWaiter = new WaitForSecondsRealtime(1f);
        int currentCircle = 1;
        currentCard = Random.Range(0, _characters.Count);

        while (currentCircle < CirclesCount)
        {
            _frame.transform.position = _characters[currentCard].transform.position;
            currentCircle++;

            if (currentCircle < CirclesCount - 1)
                currentCard = Random.Range(0, _characters.Count);
            else if (currentCircle == CirclesCount - 1)
                currentCard = Random.Range(0, 2);

            yield return firstWaiter;
        }

        Time.timeScale = 0;

        switch (currentCard)
        {
            case 0:
                _brain.m_CustomBlends = _ericSettings;
                _ericSceneBackground.gameObject.SetActive(true);
                _ericScene.SetActive(true);
                Destroy(_viperScene);
                break;
            case 1:
                _brain.m_CustomBlends = _viperSettings;
                _viperSceneBackground.gameObject.SetActive(true);
                _viperScene.SetActive(true);
                Destroy(_ericScene);
                break;
            default:
                break;
        }

        yield return secondWaiter;
        _soundHandler.PlaySound();
        gameObject.SetActive(false);
        Time.timeScale = 1;
    }
}
