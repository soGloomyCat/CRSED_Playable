using UnityEngine;

public class EffectHandler : MonoBehaviour
{
    [SerializeField] private JumpHandler _jumpHandler;
    [SerializeField] private UIHandler _canvas;
    [SerializeField] private ParticleSystem _jumpSmoke;
    [SerializeField] private ParticleSystem _light;
    [SerializeField] private ParticleSystem _smoke;
    [SerializeField] private EnemyPool _enemyPool;
    [SerializeField] private Enemy _specialEnemy;

    private void OnEnable()
    {
        _jumpHandler.NeedStartJumpEffect += ActivateJumpEffect;
        _jumpHandler.NeedStopJumpSmokeEffect += StopJumpEffect;
        _jumpHandler.NeedStopLightEffect += StopLightEffect;
        _jumpHandler.NeedFallEffect += ActivateFalltEffect;
        _jumpHandler.NeedRemoveEnemies += RemoveEnemies;
        _jumpHandler.NeedSpecialEnemy += ActivateSpecialEnemy;
        _jumpHandler.NeedRemoveSpecialEnemy += ActivateSpecialFall;
        _jumpHandler.NeedFinalJump += ActivateFinalJumpEffect;
        _canvas.NeedActivateEnemies += ActivateShoot;
    }

    private void OnDisable()
    {
        _jumpHandler.NeedStartJumpEffect -= ActivateJumpEffect;
        _jumpHandler.NeedStopJumpSmokeEffect -= StopJumpEffect;
        _jumpHandler.NeedStopLightEffect -= StopLightEffect;
        _jumpHandler.NeedFallEffect -= ActivateFalltEffect;
        _jumpHandler.NeedRemoveEnemies -= RemoveEnemies;
        _jumpHandler.NeedSpecialEnemy -= ActivateSpecialEnemy;
        _jumpHandler.NeedRemoveSpecialEnemy -= ActivateSpecialFall;
        _jumpHandler.NeedFinalJump -= ActivateFinalJumpEffect;
        _canvas.NeedActivateEnemies -= ActivateShoot;
    }

    private void ActivateJumpEffect()
    {
        _jumpSmoke.transform.position = transform.position;
        _jumpSmoke.Play();
        _light.Play();
    }

    private void StopJumpEffect()
    {
        _jumpSmoke.Stop();
    }

    private void StopLightEffect()
    {
        _light.Stop();
    }

    private void ActivateFalltEffect()
    {
        _smoke.Play();
    }

    private void ActivateFinalJumpEffect()
    {
        _jumpSmoke.transform.position = _jumpHandler.transform.position;
        _jumpSmoke.Play();
        _light.Play();
    }

    private void ActivateShoot()
    {
        _enemyPool.ActivateShoot();
    }

    private void RemoveEnemies()
    {
        _enemyPool.ActivateFall();
    }

    private void ActivateSpecialEnemy()
    {
        _specialEnemy.gameObject.SetActive(true);
    }

    private void ActivateSpecialFall()
    {
        _specialEnemy.ActivateFall();
    }
}
