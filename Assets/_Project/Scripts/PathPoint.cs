using UnityEngine;

namespace ScenarioFour
{
    public class PathPoint : MonoBehaviour
    {
        [SerializeField] private float _time;

        public float Time => _time; 
    }
}
