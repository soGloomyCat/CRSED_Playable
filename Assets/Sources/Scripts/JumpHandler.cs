using System;
using System.Collections;
using UnityEngine;

public class JumpHandler : MonoBehaviour
{
    [SerializeField] private Transform _landJump;
    [SerializeField] private Transform _secondLandJump;
    [SerializeField] private Transform _spawnPoint;
    [SerializeField] private Transform _enemy;
    [SerializeField] private Transform _finalPoint;

    private Coroutine _coroutine;
    private Vector3 _firstHelpPoint;
    private Vector3 _secondHelpPoint;
    private Vector3 _thirdHelpPoint;

    public event Action NeedJumpAnimation;
    public event Action NeedStartJumpEffect;
    public event Action NeedStopJumpSmokeEffect;
    public event Action NeedRelieveFirstCamera;
    public event Action NeedChangeCamera;
    public event Action NeedRepeatChangeCamera;
    public event Action NeedSecondRepeatChangeCamera;
    public event Action NeedStopLightEffect;
    public event Action NeedFallAnimation;
    public event Action NeedFallEffect;
    public event Action NeedRemoveEnemies;
    public event Action NeedRepeattJump;
    public event Action NeedSpecialEnemy;
    public event Action NeedAttackAnimation;
    public event Action NeedRemoveSpecialEnemy;
    public event Action NeedActivateFade;
    public event Action NeedActivateFinalCamera;
    public event Action NeedDeactivateFade;
    public event Action NeedRoarAnimation;
    public event Action NeedFinalJump;
    public event Action NeedFinalPanel;

    public void PrepairJump()
    {
        if (_coroutine != null)
            StopCoroutine(_coroutine);

        _coroutine = StartCoroutine(Jump());
    }

    private IEnumerator Jump()
    {
        float tempDistance = Vector3.Distance(transform.position, _landJump.position);
        Vector3 highPoint = new Vector3(_landJump.position.x, _landJump.position.y * 1.6f, transform.position.z - tempDistance / 2);
        Vector3 finalPoint = _landJump.position;
        _firstHelpPoint = new Vector3(highPoint.x, highPoint.y - 0.5f, highPoint.z - 10);
        _secondHelpPoint = new Vector3(_firstHelpPoint.x, _firstHelpPoint.y - 2, _firstHelpPoint.z - 5);
        _thirdHelpPoint = new Vector3(_secondHelpPoint.x, _secondHelpPoint.y - 2, _secondHelpPoint.z - 5);
        NeedJumpAnimation?.Invoke();
        NeedStartJumpEffect?.Invoke();

        yield return new WaitForSeconds(1.52f);
        NeedStopJumpSmokeEffect?.Invoke();
        NeedRelieveFirstCamera?.Invoke();

        while (transform.position != highPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, highPoint, 80f * Time.deltaTime);

            if (Vector3.Distance(transform.position, highPoint) <= 50f)
                NeedChangeCamera?.Invoke();

            yield return null;
        }

        highPoint = _firstHelpPoint;

        while (transform.position != highPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, highPoint, 50f * Time.deltaTime);

            yield return null;
        }

        highPoint = _secondHelpPoint;

        while (transform.position != highPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, highPoint, 50f * Time.deltaTime);

            yield return null;
        }

        highPoint = _thirdHelpPoint;

        while (transform.position != highPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, highPoint, 50f * Time.deltaTime);

            yield return null;
        }

        while (transform.position != finalPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, finalPoint, 50f * Time.deltaTime);

            if (Vector3.Distance(transform.position, finalPoint) <= 30f)
            {
                NeedRepeatChangeCamera?.Invoke();
                NeedStopLightEffect?.Invoke();
            }

            if (Vector3.Distance(transform.position, finalPoint) <= 5f)
            {
                NeedFallAnimation?.Invoke();
            }

            yield return null;
        }

        yield return new WaitForSecondsRealtime(0.3f);
        NeedFallEffect?.Invoke();
        NeedRemoveEnemies?.Invoke();
        yield return new WaitForSecondsRealtime(1f);

        while (transform.rotation.y >= 0.1f)
        {
            transform.rotation = Quaternion.Lerp(transform.rotation, Quaternion.Euler(transform.rotation.x, 0, transform.rotation.z), 1.5f * Time.deltaTime);
            yield return null;
        }

        NeedRepeattJump?.Invoke();

        tempDistance = Vector3.Distance(transform.position, _secondLandJump.position);
        highPoint = new Vector3(_secondLandJump.position.x, _secondLandJump.position.y * 1.2f, transform.position.z + tempDistance / 2);
        finalPoint = _secondLandJump.position;

        yield return new WaitForSecondsRealtime(0.45f);

        while (transform.position != highPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, highPoint, 20f * Time.deltaTime);

            yield return null;
        }

        while (transform.position != finalPoint)
        {
            transform.position = Vector3.MoveTowards(transform.position, finalPoint, 20f * Time.deltaTime);

            yield return null;
        }

        transform.position = _spawnPoint.position;
        NeedSecondRepeatChangeCamera?.Invoke();
        NeedSpecialEnemy?.Invoke();
        NeedAttackAnimation?.Invoke();

        yield return new WaitForSecondsRealtime(0.8f);

        while (transform.position != _enemy.position)
        {
            transform.position = Vector3.MoveTowards(transform.position, _enemy.position, 20f * Time.deltaTime);

            yield return null;
        }

        NeedRemoveSpecialEnemy?.Invoke();

        yield return new WaitForSecondsRealtime(1f);
        NeedActivateFade?.Invoke();
        transform.position = _finalPoint.position;
        transform.rotation = Quaternion.Euler(transform.rotation.x, 180, transform.rotation.z);
        NeedActivateFinalCamera?.Invoke();
        yield return new WaitForSecondsRealtime(1f);
        NeedDeactivateFade?.Invoke();
        NeedRoarAnimation?.Invoke();
        yield return new WaitForSecondsRealtime(3.1f);
        NeedFinalJump?.Invoke();
        yield return new WaitForSecondsRealtime(1.25f);

        while (transform.position.y <= 40)
        {
            transform.position = Vector3.MoveTowards(transform.position, new Vector3(transform.position.x, transform.position.y + 1, transform.position.z), 80f * Time.deltaTime);
            yield return null;
        }

        NeedFinalPanel?.Invoke();
    }
}
