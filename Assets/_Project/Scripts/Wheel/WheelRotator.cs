using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;
using ScenarioFour;

namespace PlaceForTests
{
    public class WheelRotator : MonoBehaviour
    {
        [SerializeField] private int _rotationCount;

        private float _oneSpinTime = 1f;

        public event UnityAction WheelStoped;

        public void Action(SceneType sceneType)
        {
            transform.DORotate(Vector3.forward * 360, _oneSpinTime, RotateMode.FastBeyond360).SetEase(Ease.Linear).SetLoops(_rotationCount).OnComplete(() =>
            {
                if (sceneType == SceneType.Thor)
                    RotateToThor();
                else if (sceneType == SceneType.Girl)
                    RotateToGirl();
            });
        }

        /*
         * Настройки для времени и угла для положения девушки и Тора на колесе
         * по часовой стрелке: Тор -> второй, девушка -> четвертая!
         */

        private void RotateToThor()
        {
            int degrees = 60;
            float time = 0.25f;

            transform.DORotate(Vector3.forward * degrees, time, RotateMode.Fast).SetEase(Ease.OutSine).OnComplete(() =>
            {
                WheelStoped?.Invoke();
            });
        }

        private void RotateToGirl()
        {
            int degrees = 240;
            float time = 0.95f;

            transform.DORotate(Vector3.forward * degrees, time, RotateMode.LocalAxisAdd).SetEase(Ease.OutSine).OnComplete(() =>
            {
                WheelStoped?.Invoke();
            });
        }
    }
}
