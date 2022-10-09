using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyPool : MonoBehaviour
{
    [SerializeField] private List<Enemy> _enemies;

    public void ActivateFall()
    {
        foreach (var enemy in _enemies)
            enemy.ActivateFall();
    }

    public void ActivateShoot()
    {
        foreach (var enemy in _enemies)
            enemy.ActivateShoot();
    }
}
