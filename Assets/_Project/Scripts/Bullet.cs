using UnityEngine;
using System.Collections;

namespace ScenarioFour
{
    public class Bullet : MonoBehaviour
    {
        [SerializeField] private float _flyTime;
        [SerializeField] private float _flySpeed;

        private float _currentFlyTime;

        public void Move(Vector3 direction)
        {
            StartCoroutine(Movement(direction));
        }

        private IEnumerator Movement(Vector3 direction)
        {
            Vector3 randomDirection = direction + Random.insideUnitSphere * 0.15f;

            while (_currentFlyTime < _flyTime)
            {
                transform.Translate(randomDirection * Time.deltaTime * _flySpeed);
                _currentFlyTime += Time.deltaTime;
                yield return null;
            }

            Destroy(gameObject);
        }
    }
}
