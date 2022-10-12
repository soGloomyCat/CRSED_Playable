using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Cinemachine;

public class ChooseHandler : MonoBehaviour
{
    private const int CirclesCount = 20;

    [SerializeField] private int _currentCharacter;
    [SerializeField] private SoundHandler _soundHandler;
    [SerializeField] private GameObject _scene;
    [SerializeField] private Image _sceneBackground;
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
        WaitForSecondsRealtime secondWaiter = new WaitForSecondsRealtime(0.8f);
        int currentCircle = 1;
        currentCard = Random.Range(0, _characters.Count);

        while (currentCircle < CirclesCount)
        {
            _frame.transform.position = _characters[currentCard].transform.position;
            currentCircle++;

            if (currentCircle < CirclesCount - 1)
                currentCard = Random.Range(0, _characters.Count);
            else if (currentCircle == CirclesCount - 1)
                currentCard = _currentCharacter;

            yield return firstWaiter;
        }

        Time.timeScale = 0;

        _sceneBackground.gameObject.SetActive(true);
        _scene.SetActive(true);
        yield return secondWaiter;
        _soundHandler.PlaySound();
        gameObject.SetActive(false);
        Time.timeScale = 1;
    }
}
