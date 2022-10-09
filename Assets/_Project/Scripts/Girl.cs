using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

namespace ScenarioFour
{
    public class Girl : MonoBehaviour
    {
        [SerializeField] private Path _path;
        [SerializeField] private AnimatedModel _animatedModel;
        [SerializeField] private GameObject _model;
        [SerializeField] private ParticleSystem _teleportEffect;
        [SerializeField] private Bullet _bulletTemplate;
        [SerializeField] private Transform _shootPoint;

        public event UnityAction FirstPartDone;
        public event UnityAction SecondPartDone;
        public event UnityAction EnemiesKilled;
        public event UnityAction Shoot;

        private void OnEnable()
        {
            _animatedModel.ShootPoint += OnShootPoint;
        }

        private void OnDisable()
        {
            _animatedModel.ShootPoint -= OnShootPoint;
        }

        public void Init()
        {
            MoveFirstPart();
        }

        private void MoveFirstPart()
        {
            PathPoint first = _path.First;
            PathPoint second = _path.Second;

            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOLookAt(first.transform.position, 0.15f));
            sequence.Join(transform.DOMove(first.transform.position, first.Time).SetEase(Ease.Linear));
            sequence.Append(transform.DOLookAt(second.transform.position, 1f));
            sequence.Join(transform.DOMove(second.transform.position, second.Time).SetEase(Ease.Linear));
            //sequence.Append(transform.DORotate(Vector3.zero, 0.6f));
            sequence.OnComplete(() => FirstPartDone?.Invoke());
        }

        public void Teleport(out float teleportTime)
        {
            _model.SetActive(false);
            _teleportEffect.Play();

            PathPoint third = _path.Third;
            PathPoint fourth = _path.Fourth;
            teleportTime = third.Time;

            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOLookAt(third.transform.position, 0.15f));
            sequence.Join(transform.DOMove(third.transform.position, third.Time).SetEase(Ease.Linear));
            sequence.AppendCallback(() => _model.SetActive(true));
            sequence.AppendCallback(() => _animatedModel.Jump());
            sequence.Append(transform.DOLookAt(-Vector3.forward, 0.6f));
            sequence.Join(transform.DOMove(fourth.transform.position, fourth.Time).SetEase(Ease.Linear));
            sequence.AppendCallback(() => _teleportEffect.Stop());
            sequence.AppendInterval(.6f);
            sequence.OnComplete(() => SecondPartDone?.Invoke());
        }

        public void KillEnemies(Enemies enemies)
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOLookAt(enemies.Right.transform.position - Vector3.forward * 0.5f, 0.2f));
            sequence.AppendInterval(0.5f);
            sequence.AppendCallback(() => _animatedModel.Shoot());
            sequence.AppendInterval(0.5f);
            sequence.Append(transform.DOLookAt(enemies.Left.transform.position + Vector3.forward * 0.5f, 0.6f));
            sequence.AppendInterval(0.5f);
            sequence.AppendCallback(() => _animatedModel.Shoot());
            sequence.AppendInterval(1.5f);
            sequence.AppendCallback(() => EnemiesKilled?.Invoke());
        }

        private void OnShootPoint()
        {
            for (int i = 0; i < 10; i++)
            {
                OneShoot();
            }

            Shoot?.Invoke();
        }

        private void OneShoot()
        {
            Bullet bullet = Instantiate(_bulletTemplate, _shootPoint.position, Quaternion.identity);
            bullet.Move(_shootPoint.forward);
        }
    }
}
