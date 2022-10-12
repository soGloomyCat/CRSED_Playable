using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace CrossoutBoss
{
    public class FakeShooting : MonoBehaviour
    {
        [SerializeField] private float _delayBetweenShots = 0.1f;
        [SerializeField] private Vector2 _spreading = Vector2.one;
        [SerializeField] private Vector2 _offset = Vector2.zero;
        [SerializeField] private ParticleSystem _impactParticles = null;

        private Timer _timer = null;

        private void Awake()
        {
            _timer = new Timer(_delayBetweenShots);
        }

        private void OnEnable()
        {
            _timer.Ticked += OnTimerTicked;
        }

        private void OnDisable()
        {
            _timer.Ticked -= OnTimerTicked;
        }

        private void Update()
        {
            _timer.Update(Time.deltaTime);
        }

        private void OnTimerTicked()
        {
            var direction = transform.rotation * Quaternion.Euler(Random.insideUnitCircle * _spreading + _offset) * Vector3.forward;

            Debug.DrawRay(transform.position, direction * 100, Color.white, _delayBetweenShots);

            if (Physics.Raycast(transform.position, direction, out var result))
            {
                _impactParticles.transform.SetPositionAndRotation(result.point, Quaternion.LookRotation(result.normal));

                _impactParticles.Play();
            }
        }
    }
}
