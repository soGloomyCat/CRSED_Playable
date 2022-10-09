using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using UnityEngine.Events;
using System.Collections;

namespace ScenarioFour
{
    public class UISwitcher : MonoBehaviour
    {
        [SerializeField] private Button _powerButton;
        [SerializeField] private Button _attackButton;
        [SerializeField] private Button _playButton;
        [SerializeField] private GameObject _finalPanel;

        public event UnityAction PowerButtonClicked;
        public event UnityAction AttackButtonClicked;

        private void Awake()
        {
            _powerButton.transform.localScale = Vector3.zero;
            _attackButton.transform.localScale = Vector3.zero;
        }

        private void OnEnable()
        {
            _powerButton.onClick.AddListener(OnPowerButtonClick);
            _attackButton.onClick.AddListener(OnAttackButtonClick);
            _playButton.onClick.AddListener(OnPlayButtonClick);
        }

        private void OnDisable()
        {
            _powerButton.onClick.RemoveListener(OnPowerButtonClick);
            _attackButton.onClick.RemoveListener(OnAttackButtonClick);
            _playButton.onClick.RemoveListener(OnPlayButtonClick);
        }

        public void ShowPowerButton() => ShowButton(_powerButton.transform);

        public void ShowPlayButton()
        {
            _finalPanel.SetActive(true);
            Invoke("StopTime", 2f);
        }

        public void ShowAttackButton()
        {
            ShowButton(_attackButton.transform);
        }

        private void StopTime()
        {
            Time.timeScale = 0;
        }

        private void ShowButton(Transform button)
        {
            button.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBack).SetUpdate(true).OnComplete(() =>
            {
                if (button.TryGetComponent(out PulseTransform pulse))
                {
                    pulse.Init();
                }
            });
        }

        private void HideButton(Transform button)
        {
            button.DOScale(Vector3.zero, 0.2f).SetUpdate(true).OnComplete(() =>
            {
                if (button.TryGetComponent(out PulseTransform pulse))
                {
                    pulse.Stop();
                }
            });
        }

        private void OnPowerButtonClick()
        {
            HideButton(_powerButton.transform);
            PowerButtonClicked?.Invoke();
        }

        private void OnAttackButtonClick()
        {
            HideButton(_attackButton.transform);
            AttackButtonClicked?.Invoke();
        }

        private void OnPlayButtonClick()
        {
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}
