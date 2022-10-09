using System;
using System.Collections;
using UnityEngine;

namespace ScenarioFour
{
    public class Director : MonoBehaviour
    {
        [SerializeField] private Girl _girl;
        [SerializeField] private Cameras _cameras;
        [SerializeField] private UISwitcher _uiSwitcher;
        [SerializeField] private Enemies _enemies;
        [SerializeField] private ParticleSystem _teleportEffectStatic;

        [Header("CameraTimings")]
        [SerializeField] private CameraTiming[] _timings;

        private int _currentTimingIndex;
        private float _currentTiming;

        private void OnEnable()
        {
            _girl.FirstPartDone += OnFirstPartDone;
            _girl.SecondPartDone += OnSecondPartDone;
            _girl.EnemiesKilled += OnEnemiesKill;
            _girl.Shoot += _enemies.Kill;
            _uiSwitcher.PowerButtonClicked += OnPowerButtonClick;
            _uiSwitcher.AttackButtonClicked += OnAttackButtonClick;
        }

        private void OnDisable()
        {
            _girl.FirstPartDone -= OnFirstPartDone;
            _girl.SecondPartDone -= OnSecondPartDone;
            _girl.EnemiesKilled -= OnEnemiesKill;
            _girl.Shoot += _enemies.Kill;
            _uiSwitcher.PowerButtonClicked -= OnPowerButtonClick;
            _uiSwitcher.AttackButtonClicked -= OnAttackButtonClick;
        }

        private void Start()
        {
            _girl.Init();
            _cameras.Activate(CameraType.Head);
        }

        private void Update()
        {
            HandelTimings();
        }

        private void OnFirstPartDone()
        {
            Time.timeScale = 0;
            _uiSwitcher.ShowPowerButton();
        }

        private void OnSecondPartDone()
        {
            Time.timeScale = 0;
            _uiSwitcher.ShowAttackButton();
        }

        private void OnEnemiesKill()
        {
            _uiSwitcher.ShowPlayButton();
        }

        private void HandelTimings()
        {
            if (_currentTimingIndex >= _timings.Length)
                return;

            _currentTiming += Time.deltaTime;

            if (_currentTiming > _timings[_currentTimingIndex].Timing)
            {
                _cameras.Activate(_timings[_currentTimingIndex].CameraType);
                _currentTimingIndex++;
                _currentTiming = 0;
            }
        }

        private void OnPowerButtonClick()
        {
            Time.timeScale = 1;
            _girl.Teleport(out float teleportDuration);
            _teleportEffectStatic.Play();
            StartCoroutine(DelayTeleportFinishCam(teleportDuration));
        }

        private IEnumerator DelayTeleportFinishCam(float teleportDureation)
        { 
            yield return new WaitForSeconds(teleportDureation - 0.2f);
            _cameras.Activate(CameraType.TeleportFinish);
        }

        private void OnAttackButtonClick()
        {
            Time.timeScale = 1;
            _girl.KillEnemies(_enemies);
            _cameras.Activate(CameraType.BehindRightShoulder);
            StartCoroutine(DelayHeadCamera(1f));
        }

        private IEnumerator DelayHeadCamera(float delay)
        {
            yield return new WaitForSeconds(delay);
            _cameras.Activate(CameraType.Head);
        }
    }

    [Serializable]
    public class CameraTiming
    {
        [SerializeField] private float _timing;
        [SerializeField] private CameraType _cameraType;

        public float Timing => _timing;
        public CameraType CameraType => _cameraType;
    }
}
