using UnityEngine;

namespace ScenarioFour
{
    public class Enemies : MonoBehaviour
    {
        [SerializeField] private Enemy _enemyRight;
        [SerializeField] private Enemy _enemyLeft;

        public Enemy Right => _enemyRight;
        public Enemy Left => _enemyLeft;

        private int _shootCount;

        public void Kill()
        { 
            _shootCount++;

            switch (_shootCount)
            { 
                case 1: 
                    _enemyRight.Death();
                    break;
                case 2: 
                    _enemyLeft.Death();
                    break;
            }

        }
    }
}
