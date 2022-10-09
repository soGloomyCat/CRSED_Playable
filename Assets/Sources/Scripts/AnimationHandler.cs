using UnityEngine;

[RequireComponent(typeof(Animator))]
public class AnimationHandler : MonoBehaviour
{
    private const string JumpTrigger = "Jump";
    private const string FallTrigger = "Fall";
    private const string SecondJumpTrigger = "SecondJump";
    private const string AttackTrigger = "Attack";
    private const string RoarTrigger = "Roar";

    [SerializeField] private JumpHandler _jumpHandler;

    private Animator _animator;

    private void OnEnable()
    {
        _jumpHandler.NeedJumpAnimation += ActivateJump;
        _jumpHandler.NeedFallAnimation += ActivateFall;
        _jumpHandler.NeedRepeattJump += ActivateSecondJump;
        _jumpHandler.NeedAttackAnimation += ActivateAttack;
        _jumpHandler.NeedRoarAnimation += ActivateRoar;
    }

    private void OnDisable()
    {
        _jumpHandler.NeedJumpAnimation -= ActivateJump;
        _jumpHandler.NeedFallAnimation -= ActivateFall;
        _jumpHandler.NeedRepeattJump -= ActivateSecondJump;
        _jumpHandler.NeedAttackAnimation -= ActivateAttack;
        _jumpHandler.NeedRoarAnimation -= ActivateRoar;
    }

    private void Awake()
    {
        _animator = GetComponent<Animator>();
    }

    private void ActivateJump()
    {
        _animator.SetTrigger(JumpTrigger);
    }

    private void ActivateFall()
    {
        _animator.SetTrigger(FallTrigger);
    }

    private void ActivateSecondJump()
    {
        _animator.SetTrigger(SecondJumpTrigger);
    }

    private void ActivateAttack()
    {
        _animator.SetTrigger(AttackTrigger);
    }

    private void ActivateRoar()
    {
        _animator.SetTrigger(RoarTrigger);
    }
}
