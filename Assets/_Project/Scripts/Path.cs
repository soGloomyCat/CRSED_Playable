using UnityEngine;
using System;

namespace ScenarioFour
{
    public class Path : MonoBehaviour
    {
        [SerializeField] private PathPoint[] _points;

        public PathPoint First => _points[0];
        public PathPoint Second => _points[1];
        public PathPoint Third => _points[2];
        public PathPoint Fourth => _points[3];
    }
}
