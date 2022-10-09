using UnityEngine;
using UnityEngine.Events;

namespace ScenarioFour
{
    [RequireComponent(typeof(Animator))]
    public class AnimatedModel : MonoBehaviour
    {
        private readonly int _shoot = Animator.StringToHash("Shoot");
        private readonly int _jump = Animator.StringToHash("Jump");
        private Animator _animator;

        public event UnityAction ShootPoint;

        private void Awake()
        {
            _animator = GetComponent<Animator>();
        }

        public void Shoot()
        {
            _animator.Play(_shoot);
            ShootPoint?.Invoke();
        }
        public void Jump() => _animator.Play(_jump);
    }
}
