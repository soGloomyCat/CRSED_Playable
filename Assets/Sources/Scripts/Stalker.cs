using UnityEngine;

public class Stalker : MonoBehaviour
{
    private const float RotationSpeed = 80f;

    [SerializeField] private Transform _target;

    private void Update()
    {
        DetermineTarget();
    }

    private void DetermineTarget()
    {
        Vector3 tempDirection = _target.position - transform.position;
        Quaternion angle = Quaternion.LookRotation(tempDirection);
        transform.rotation = Quaternion.Lerp(transform.rotation, angle, RotationSpeed * Time.deltaTime);
    }
}
