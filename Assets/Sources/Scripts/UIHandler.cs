using System;
using UnityEngine;
using UnityEngine.UI;

public class UIHandler : MonoBehaviour
{
    [SerializeField] private JumpHandler _jumpHandler;
    [SerializeField] private Button _powerButton;
    [SerializeField] private Button _cTAButton;
    [SerializeField] private Image _fade;
    [SerializeField] private GameObject _finalPanel;

    public event Action NeedActivateEnemies;

    private void OnEnable()
    {
        _jumpHandler.NeedActivateFade += ActiateFade;
        _jumpHandler.NeedDeactivateFade += DeactivateFade;
        _jumpHandler.NeedFinalPanel += ActivateFinalPanel;
        _powerButton.onClick.AddListener(PrepairJump);
        _cTAButton.onClick.AddListener(CTAClick);
    }

    private void OnDisable()
    {
        _jumpHandler.NeedActivateFade -= ActiateFade;
        _jumpHandler.NeedDeactivateFade -= DeactivateFade;
        _jumpHandler.NeedFinalPanel -= ActivateFinalPanel;
        _powerButton.onClick.RemoveListener(PrepairJump);
        _cTAButton.onClick.RemoveListener(CTAClick);
    }

    private void PrepairJump()
    {
        _jumpHandler.PrepairJump();
        _powerButton.gameObject.SetActive(false);
        NeedActivateEnemies?.Invoke();
    }

    private void CTAClick()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private void ActiateFade()
    {
        _fade.gameObject.SetActive(true);
    }

    private void DeactivateFade()
    {
        _fade.gameObject.SetActive(false);
    }

    private void ActivateFinalPanel()
    {
        Time.timeScale = 0;
        _finalPanel.SetActive(true);
    }
}
