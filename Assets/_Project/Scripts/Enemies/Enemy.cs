using UnityEngine;

namespace ScenarioFour
{
    public class Enemy : MonoBehaviour
    {
        [SerializeField] private EnemyAnimatedModel _animatedModel;
        [SerializeField] private Bullet _bulletTemplate;
        [SerializeField] private Transform _shootPoint;
        [SerializeField] private ParticleSystem _bloodEffect;

        private void OnEnable()
        {
            _animatedModel.Shoot += OnShoot;
        }

        private void OnDisable()
        {
            _animatedModel.Shoot -= OnShoot;
        }

        private void OnShoot()
        {
            Bullet bullet = Instantiate(_bulletTemplate, _shootPoint.position, Quaternion.identity);
            bullet.Move(_shootPoint.forward);
        }

        public void Death()
        {
            _bloodEffect.Play();
            _animatedModel.DeathBack();
        }
    }
}
