using UnityEngine;
using UnityEngine.Events;

namespace ScenarioFour
{
    [RequireComponent(typeof(Animator))]
    public class EnemyAnimatedModel : MonoBehaviour
    {
        private readonly int _randomOffset = Animator.StringToHash("RandomOffset");
        private readonly int _deathForward = Animator.StringToHash("DeathForward");
        private readonly int _deathBack = Animator.StringToHash("DeathBack");
        private Animator _animator;

        public event UnityAction Shoot;

        private void Awake()
        {
            _animator = GetComponent<Animator>();
            _animator.SetFloat(_randomOffset, Random.Range(0, 1f));
        }

        public void ShootPointReached() => Shoot?.Invoke();

        public void DeathForward() => _animator.Play(_deathForward);
        public void DeathBack() => _animator.Play(_deathBack);
    }
}
