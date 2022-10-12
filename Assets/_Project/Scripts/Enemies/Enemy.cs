using UnityEngine;

namespace ScenarioFour
{
    public class Enemy : MonoBehaviour
    {
        [SerializeField] private EnemyAnimatedModel _animatedModel;
        [SerializeField] private ParticleSystem _bloodEffect;

        public void Death()
        {
            _bloodEffect.Play();
            _animatedModel.DeathBack();
        }
    }
}
