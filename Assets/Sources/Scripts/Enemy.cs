using System.Collections;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class Enemy : MonoBehaviour
{
    private const string AttackTrigger = "Attack";
    private const string FallTrigger = "Fall";

    private Coroutine _coroutine;
    private Animator _animator;

    private void Awake()
    {
        _animator = GetComponent<Animator>();
    }

    public void ActivateShoot()
    {
        _animator.SetTrigger(AttackTrigger);
    }

    public void ActivateFall()
    {
        _animator.SetTrigger(FallTrigger);

        if (_coroutine != null)
            StopCoroutine(_coroutine);

        _coroutine = StartCoroutine(Die());
    }

    private IEnumerator Die()
    {
        yield return new WaitForSeconds(3f);
        Destroy(gameObject);
    }
}
