using DG.Tweening;
using UnityEngine;

namespace ScenarioFour
{
    public class PulseTransform : MonoBehaviour
    {
        private Sequence _sequence;

        public void Init()
        {
            _sequence = DOTween.Sequence();
            _sequence.Append(transform.DOScale(Vector3.one * 1.2f, 0.5f));
            _sequence.Append(transform.DOScale(Vector3.one, 0.5f));
            _sequence.SetLoops(-1);
            _sequence.SetUpdate(true);
        }

        public void Stop()
        {
            if (_sequence != null)
                _sequence.Kill();
        }
    }
}
