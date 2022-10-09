using PlaceForTests;
using System;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace ScenarioFour
{
    public class WheelDirector : MonoBehaviour
    {
        [SerializeField] private WheelRotator _wheelRotator;
        [SerializeField] private Button _button;

        private const string SCENE_GIRL = "Girl";
        private const string SCENE_THOR = "Thor";

        private SceneType _sceneType;

        private void OnEnable()
        {
            _button.onClick.AddListener(OnButtonClick);
            _wheelRotator.WheelStoped += OnWheelStop;
        }

        private void OnDisable()
        {
            _button.onClick.RemoveListener(OnButtonClick);
            _wheelRotator.WheelStoped -= OnWheelStop;
        }

        private void Start()
        {
            int random = UnityEngine.Random.Range(0, 100);

            if (random > 50)
                _sceneType = SceneType.Girl;
            else
                _sceneType = SceneType.Thor;
        }

        private void OnButtonClick()
        {
            _button.interactable = false;
            _wheelRotator.Action(_sceneType);
        }

        private void OnWheelStop()
        {
            if (_sceneType == SceneType.Girl)
            { 
                SceneManager.LoadScene(SCENE_GIRL);
            }
            else
            {
                Debug.Log(SCENE_THOR);
                //SceneManager.LoadScene(SCENE_THOR);
            }
        }
    }

    public enum SceneType
    { 
        Girl,
        Thor
    }
}
