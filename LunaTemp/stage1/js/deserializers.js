var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7558 = root || request.c( 'UnityEngine.JointSpring' )
  var i7559 = data
  i7558.spring = i7559[0]
  i7558.damper = i7559[1]
  i7558.targetPosition = i7559[2]
  return i7558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7560 = root || request.c( 'UnityEngine.JointMotor' )
  var i7561 = data
  i7560.m_TargetVelocity = i7561[0]
  i7560.m_Force = i7561[1]
  i7560.m_FreeSpin = i7561[2]
  return i7560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7562 = root || request.c( 'UnityEngine.JointLimits' )
  var i7563 = data
  i7562.m_Min = i7563[0]
  i7562.m_Max = i7563[1]
  i7562.m_Bounciness = i7563[2]
  i7562.m_BounceMinVelocity = i7563[3]
  i7562.m_ContactDistance = i7563[4]
  i7562.minBounce = i7563[5]
  i7562.maxBounce = i7563[6]
  return i7562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7564 = root || request.c( 'UnityEngine.JointDrive' )
  var i7565 = data
  i7564.m_PositionSpring = i7565[0]
  i7564.m_PositionDamper = i7565[1]
  i7564.m_MaximumForce = i7565[2]
  return i7564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7567 = data
  i7566.m_Spring = i7567[0]
  i7566.m_Damper = i7567[1]
  return i7566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7569 = data
  i7568.m_Limit = i7569[0]
  i7568.m_Bounciness = i7569[1]
  i7568.m_ContactDistance = i7569[2]
  return i7568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7571 = data
  i7570.m_ExtremumSlip = i7571[0]
  i7570.m_ExtremumValue = i7571[1]
  i7570.m_AsymptoteSlip = i7571[2]
  i7570.m_AsymptoteValue = i7571[3]
  i7570.m_Stiffness = i7571[4]
  return i7570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7573 = data
  i7572.m_LowerAngle = i7573[0]
  i7572.m_UpperAngle = i7573[1]
  return i7572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7575 = data
  i7574.m_MotorSpeed = i7575[0]
  i7574.m_MaximumMotorTorque = i7575[1]
  return i7574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7577 = data
  i7576.m_DampingRatio = i7577[0]
  i7576.m_Frequency = i7577[1]
  i7576.m_Angle = i7577[2]
  return i7576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7579 = data
  i7578.m_LowerTranslation = i7579[0]
  i7578.m_UpperTranslation = i7579[1]
  return i7578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7580 = root || new pc.UnityMaterial()
  var i7581 = data
  i7580.name = i7581[0]
  request.r(i7581[1], i7581[2], 0, i7580, 'shader')
  i7580.renderQueue = i7581[3]
  i7580.enableInstancing = !!i7581[4]
  var i7583 = i7581[5]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 1) {
    i7582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7583[i + 0]) );
  }
  i7580.floatParameters = i7582
  var i7585 = i7581[6]
  var i7584 = []
  for(var i = 0; i < i7585.length; i += 1) {
    i7584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7585[i + 0]) );
  }
  i7580.colorParameters = i7584
  var i7587 = i7581[7]
  var i7586 = []
  for(var i = 0; i < i7587.length; i += 1) {
    i7586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7587[i + 0]) );
  }
  i7580.vectorParameters = i7586
  var i7589 = i7581[8]
  var i7588 = []
  for(var i = 0; i < i7589.length; i += 1) {
    i7588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7589[i + 0]) );
  }
  i7580.textureParameters = i7588
  var i7591 = i7581[9]
  var i7590 = []
  for(var i = 0; i < i7591.length; i += 1) {
    i7590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7591[i + 0]) );
  }
  i7580.materialFlags = i7590
  return i7580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7595 = data
  i7594.name = i7595[0]
  i7594.value = i7595[1]
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7599 = data
  i7598.name = i7599[0]
  i7598.value = new pc.Color(i7599[1], i7599[2], i7599[3], i7599[4])
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7603 = data
  i7602.name = i7603[0]
  i7602.value = new pc.Vec4( i7603[1], i7603[2], i7603[3], i7603[4] )
  return i7602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7607 = data
  i7606.name = i7607[0]
  request.r(i7607[1], i7607[2], 0, i7606, 'value')
  return i7606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7611 = data
  i7610.name = i7611[0]
  i7610.enabled = !!i7611[1]
  return i7610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7613 = data
  i7612.position = new pc.Vec3( i7613[0], i7613[1], i7613[2] )
  i7612.scale = new pc.Vec3( i7613[3], i7613[4], i7613[5] )
  i7612.rotation = new pc.Quat(i7613[6], i7613[7], i7613[8], i7613[9])
  return i7612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7615 = data
  i7614.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7615[0], i7614.main)
  i7614.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7615[1], i7614.colorBySpeed)
  i7614.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7615[2], i7614.colorOverLifetime)
  i7614.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7615[3], i7614.emission)
  i7614.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7615[4], i7614.rotationBySpeed)
  i7614.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7615[5], i7614.rotationOverLifetime)
  i7614.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7615[6], i7614.shape)
  i7614.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7615[7], i7614.sizeBySpeed)
  i7614.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7615[8], i7614.sizeOverLifetime)
  i7614.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7615[9], i7614.textureSheetAnimation)
  i7614.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7615[10], i7614.velocityOverLifetime)
  i7614.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7615[11], i7614.noise)
  i7614.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7615[12], i7614.inheritVelocity)
  i7614.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7615[13], i7614.forceOverLifetime)
  i7614.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7615[14], i7614.limitVelocityOverLifetime)
  i7614.useAutoRandomSeed = !!i7615[15]
  i7614.randomSeed = i7615[16]
  return i7614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7616 = root || new pc.ParticleSystemMain()
  var i7617 = data
  i7616.duration = i7617[0]
  i7616.loop = !!i7617[1]
  i7616.prewarm = !!i7617[2]
  i7616.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[3], i7616.startDelay)
  i7616.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[4], i7616.startLifetime)
  i7616.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[5], i7616.startSpeed)
  i7616.startSize3D = !!i7617[6]
  i7616.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[7], i7616.startSizeX)
  i7616.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[8], i7616.startSizeY)
  i7616.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[9], i7616.startSizeZ)
  i7616.startRotation3D = !!i7617[10]
  i7616.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[11], i7616.startRotationX)
  i7616.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[12], i7616.startRotationY)
  i7616.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[13], i7616.startRotationZ)
  i7616.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7617[14], i7616.startColor)
  i7616.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7617[15], i7616.gravityModifier)
  i7616.simulationSpace = i7617[16]
  request.r(i7617[17], i7617[18], 0, i7616, 'customSimulationSpace')
  i7616.simulationSpeed = i7617[19]
  i7616.useUnscaledTime = !!i7617[20]
  i7616.scalingMode = i7617[21]
  i7616.playOnAwake = !!i7617[22]
  i7616.maxParticles = i7617[23]
  i7616.emitterVelocityMode = i7617[24]
  i7616.stopAction = i7617[25]
  return i7616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7618 = root || new pc.MinMaxCurve()
  var i7619 = data
  i7618.mode = i7619[0]
  i7618.curveMin = new pc.AnimationCurve( { keys_flow: i7619[1] } )
  i7618.curveMax = new pc.AnimationCurve( { keys_flow: i7619[2] } )
  i7618.curveMultiplier = i7619[3]
  i7618.constantMin = i7619[4]
  i7618.constantMax = i7619[5]
  return i7618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7620 = root || new pc.MinMaxGradient()
  var i7621 = data
  i7620.mode = i7621[0]
  i7620.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7621[1], i7620.gradientMin)
  i7620.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7621[2], i7620.gradientMax)
  i7620.colorMin = new pc.Color(i7621[3], i7621[4], i7621[5], i7621[6])
  i7620.colorMax = new pc.Color(i7621[7], i7621[8], i7621[9], i7621[10])
  return i7620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7623 = data
  i7622.mode = i7623[0]
  var i7625 = i7623[1]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 1) {
    i7624.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7625[i + 0]) );
  }
  i7622.colorKeys = i7624
  var i7627 = i7623[2]
  var i7626 = []
  for(var i = 0; i < i7627.length; i += 1) {
    i7626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7627[i + 0]) );
  }
  i7622.alphaKeys = i7626
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7628 = root || new pc.ParticleSystemColorBySpeed()
  var i7629 = data
  i7628.enabled = !!i7629[0]
  i7628.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7629[1], i7628.color)
  i7628.range = new pc.Vec2( i7629[2], i7629[3] )
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7633 = data
  i7632.color = new pc.Color(i7633[0], i7633[1], i7633[2], i7633[3])
  i7632.time = i7633[4]
  return i7632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7637 = data
  i7636.alpha = i7637[0]
  i7636.time = i7637[1]
  return i7636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7638 = root || new pc.ParticleSystemColorOverLifetime()
  var i7639 = data
  i7638.enabled = !!i7639[0]
  i7638.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7639[1], i7638.color)
  return i7638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7640 = root || new pc.ParticleSystemEmitter()
  var i7641 = data
  i7640.enabled = !!i7641[0]
  i7640.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7641[1], i7640.rateOverTime)
  i7640.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7641[2], i7640.rateOverDistance)
  var i7643 = i7641[3]
  var i7642 = []
  for(var i = 0; i < i7643.length; i += 1) {
    i7642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7643[i + 0]) );
  }
  i7640.bursts = i7642
  return i7640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7646 = root || new pc.ParticleSystemBurst()
  var i7647 = data
  i7646.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7647[0], i7646.count)
  i7646.cycleCount = i7647[1]
  i7646.minCount = i7647[2]
  i7646.maxCount = i7647[3]
  i7646.repeatInterval = i7647[4]
  i7646.time = i7647[5]
  return i7646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7648 = root || new pc.ParticleSystemRotationBySpeed()
  var i7649 = data
  i7648.enabled = !!i7649[0]
  i7648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7649[1], i7648.x)
  i7648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7649[2], i7648.y)
  i7648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7649[3], i7648.z)
  i7648.separateAxes = !!i7649[4]
  i7648.range = new pc.Vec2( i7649[5], i7649[6] )
  return i7648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7650 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7651 = data
  i7650.enabled = !!i7651[0]
  i7650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7651[1], i7650.x)
  i7650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7651[2], i7650.y)
  i7650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7651[3], i7650.z)
  i7650.separateAxes = !!i7651[4]
  return i7650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7652 = root || new pc.ParticleSystemShape()
  var i7653 = data
  i7652.enabled = !!i7653[0]
  i7652.shapeType = i7653[1]
  i7652.randomDirectionAmount = i7653[2]
  i7652.sphericalDirectionAmount = i7653[3]
  i7652.randomPositionAmount = i7653[4]
  i7652.alignToDirection = !!i7653[5]
  i7652.radius = i7653[6]
  i7652.radiusMode = i7653[7]
  i7652.radiusSpread = i7653[8]
  i7652.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7653[9], i7652.radiusSpeed)
  i7652.radiusThickness = i7653[10]
  i7652.angle = i7653[11]
  i7652.length = i7653[12]
  i7652.boxThickness = new pc.Vec3( i7653[13], i7653[14], i7653[15] )
  i7652.meshShapeType = i7653[16]
  request.r(i7653[17], i7653[18], 0, i7652, 'mesh')
  request.r(i7653[19], i7653[20], 0, i7652, 'meshRenderer')
  request.r(i7653[21], i7653[22], 0, i7652, 'skinnedMeshRenderer')
  i7652.useMeshMaterialIndex = !!i7653[23]
  i7652.meshMaterialIndex = i7653[24]
  i7652.useMeshColors = !!i7653[25]
  i7652.normalOffset = i7653[26]
  i7652.arc = i7653[27]
  i7652.arcMode = i7653[28]
  i7652.arcSpread = i7653[29]
  i7652.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7653[30], i7652.arcSpeed)
  i7652.donutRadius = i7653[31]
  i7652.position = new pc.Vec3( i7653[32], i7653[33], i7653[34] )
  i7652.rotation = new pc.Vec3( i7653[35], i7653[36], i7653[37] )
  i7652.scale = new pc.Vec3( i7653[38], i7653[39], i7653[40] )
  return i7652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7654 = root || new pc.ParticleSystemSizeBySpeed()
  var i7655 = data
  i7654.enabled = !!i7655[0]
  i7654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7655[1], i7654.x)
  i7654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7655[2], i7654.y)
  i7654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7655[3], i7654.z)
  i7654.separateAxes = !!i7655[4]
  i7654.range = new pc.Vec2( i7655[5], i7655[6] )
  return i7654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7656 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7657 = data
  i7656.enabled = !!i7657[0]
  i7656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7657[1], i7656.x)
  i7656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7657[2], i7656.y)
  i7656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7657[3], i7656.z)
  i7656.separateAxes = !!i7657[4]
  return i7656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7658 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7659 = data
  i7658.enabled = !!i7659[0]
  i7658.mode = i7659[1]
  i7658.animation = i7659[2]
  i7658.numTilesX = i7659[3]
  i7658.numTilesY = i7659[4]
  i7658.useRandomRow = !!i7659[5]
  i7658.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7659[6], i7658.frameOverTime)
  i7658.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7659[7], i7658.startFrame)
  i7658.cycleCount = i7659[8]
  i7658.rowIndex = i7659[9]
  i7658.flipU = i7659[10]
  i7658.flipV = i7659[11]
  i7658.spriteCount = i7659[12]
  var i7661 = i7659[13]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 2) {
  request.r(i7661[i + 0], i7661[i + 1], 2, i7660, '')
  }
  i7658.sprites = i7660
  return i7658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7664 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7665 = data
  i7664.enabled = !!i7665[0]
  i7664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7665[1], i7664.x)
  i7664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7665[2], i7664.y)
  i7664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7665[3], i7664.z)
  i7664.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7665[4], i7664.speedModifier)
  i7664.space = i7665[5]
  return i7664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7666 = root || new pc.ParticleSystemNoise()
  var i7667 = data
  i7666.enabled = !!i7667[0]
  i7666.separateAxes = !!i7667[1]
  i7666.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[2], i7666.strengthX)
  i7666.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[3], i7666.strengthY)
  i7666.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[4], i7666.strengthZ)
  i7666.frequency = i7667[5]
  i7666.damping = !!i7667[6]
  i7666.octaveCount = i7667[7]
  i7666.octaveMultiplier = i7667[8]
  i7666.octaveScale = i7667[9]
  i7666.quality = i7667[10]
  i7666.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[11], i7666.scrollSpeed)
  i7666.scrollSpeedMultiplier = i7667[12]
  i7666.remapEnabled = !!i7667[13]
  i7666.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[14], i7666.remapX)
  i7666.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[15], i7666.remapY)
  i7666.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[16], i7666.remapZ)
  i7666.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[17], i7666.positionAmount)
  i7666.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[18], i7666.rotationAmount)
  i7666.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7667[19], i7666.sizeAmount)
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7668 = root || new pc.ParticleSystemInheritVelocity()
  var i7669 = data
  i7668.enabled = !!i7669[0]
  i7668.mode = i7669[1]
  i7668.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7669[2], i7668.curve)
  return i7668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7670 = root || new pc.ParticleSystemForceOverLifetime()
  var i7671 = data
  i7670.enabled = !!i7671[0]
  i7670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7671[1], i7670.x)
  i7670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7671[2], i7670.y)
  i7670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7671[3], i7670.z)
  i7670.space = i7671[4]
  i7670.randomized = !!i7671[5]
  return i7670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7672 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7673 = data
  i7672.enabled = !!i7673[0]
  i7672.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7673[1], i7672.limitX)
  i7672.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7673[2], i7672.limitY)
  i7672.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7673[3], i7672.limitZ)
  i7672.dampen = i7673[4]
  i7672.separateAxes = !!i7673[5]
  i7672.space = i7673[6]
  i7672.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7673[7], i7672.drag)
  i7672.multiplyDragByParticleSize = !!i7673[8]
  i7672.multiplyDragByParticleVelocity = !!i7673[9]
  return i7672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7675 = data
  i7674.enabled = !!i7675[0]
  request.r(i7675[1], i7675[2], 0, i7674, 'sharedMaterial')
  var i7677 = i7675[3]
  var i7676 = []
  for(var i = 0; i < i7677.length; i += 2) {
  request.r(i7677[i + 0], i7677[i + 1], 2, i7676, '')
  }
  i7674.sharedMaterials = i7676
  i7674.receiveShadows = !!i7675[4]
  i7674.shadowCastingMode = i7675[5]
  i7674.sortingLayerID = i7675[6]
  i7674.sortingOrder = i7675[7]
  i7674.lightmapIndex = i7675[8]
  i7674.lightmapSceneIndex = i7675[9]
  i7674.lightmapScaleOffset = new pc.Vec4( i7675[10], i7675[11], i7675[12], i7675[13] )
  i7674.lightProbeUsage = i7675[14]
  i7674.reflectionProbeUsage = i7675[15]
  request.r(i7675[16], i7675[17], 0, i7674, 'mesh')
  i7674.meshCount = i7675[18]
  i7674.activeVertexStreamsCount = i7675[19]
  i7674.alignment = i7675[20]
  i7674.renderMode = i7675[21]
  i7674.sortMode = i7675[22]
  i7674.lengthScale = i7675[23]
  i7674.velocityScale = i7675[24]
  i7674.cameraVelocityScale = i7675[25]
  i7674.normalDirection = i7675[26]
  i7674.sortingFudge = i7675[27]
  i7674.minParticleSize = i7675[28]
  i7674.maxParticleSize = i7675[29]
  i7674.pivot = new pc.Vec3( i7675[30], i7675[31], i7675[32] )
  request.r(i7675[33], i7675[34], 0, i7674, 'trailMaterial')
  return i7674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7681 = data
  i7680.name = i7681[0]
  i7680.tag = i7681[1]
  i7680.enabled = !!i7681[2]
  i7680.isStatic = !!i7681[3]
  i7680.layer = i7681[4]
  return i7680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7683 = data
  i7682.name = i7683[0]
  i7682.width = i7683[1]
  i7682.height = i7683[2]
  i7682.mipmapCount = i7683[3]
  i7682.anisoLevel = i7683[4]
  i7682.filterMode = i7683[5]
  i7682.hdr = !!i7683[6]
  i7682.format = i7683[7]
  i7682.wrapMode = i7683[8]
  i7682.alphaIsTransparency = !!i7683[9]
  i7682.alphaSource = i7683[10]
  return i7682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7685 = data
  request.r(i7685[0], i7685[1], 0, i7684, 'sharedMesh')
  return i7684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7687 = data
  request.r(i7687[0], i7687[1], 0, i7686, 'additionalVertexStreams')
  i7686.enabled = !!i7687[2]
  request.r(i7687[3], i7687[4], 0, i7686, 'sharedMaterial')
  var i7689 = i7687[5]
  var i7688 = []
  for(var i = 0; i < i7689.length; i += 2) {
  request.r(i7689[i + 0], i7689[i + 1], 2, i7688, '')
  }
  i7686.sharedMaterials = i7688
  i7686.receiveShadows = !!i7687[6]
  i7686.shadowCastingMode = i7687[7]
  i7686.sortingLayerID = i7687[8]
  i7686.sortingOrder = i7687[9]
  i7686.lightmapIndex = i7687[10]
  i7686.lightmapSceneIndex = i7687[11]
  i7686.lightmapScaleOffset = new pc.Vec4( i7687[12], i7687[13], i7687[14], i7687[15] )
  i7686.lightProbeUsage = i7687[16]
  i7686.reflectionProbeUsage = i7687[17]
  return i7686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7691 = data
  i7690.name = i7691[0]
  i7690.halfPrecision = !!i7691[1]
  i7690.vertexCount = i7691[2]
  i7690.aabb = i7691[3]
  var i7693 = i7691[4]
  var i7692 = []
  for(var i = 0; i < i7693.length; i += 1) {
    i7692.push( !!i7693[i + 0] );
  }
  i7690.streams = i7692
  i7690.vertices = i7691[5]
  var i7695 = i7691[6]
  var i7694 = []
  for(var i = 0; i < i7695.length; i += 1) {
    i7694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7695[i + 0]) );
  }
  i7690.subMeshes = i7694
  var i7697 = i7691[7]
  var i7696 = []
  for(var i = 0; i < i7697.length; i += 16) {
    i7696.push( new pc.Mat4().setData(i7697[i + 0], i7697[i + 1], i7697[i + 2], i7697[i + 3],  i7697[i + 4], i7697[i + 5], i7697[i + 6], i7697[i + 7],  i7697[i + 8], i7697[i + 9], i7697[i + 10], i7697[i + 11],  i7697[i + 12], i7697[i + 13], i7697[i + 14], i7697[i + 15]) );
  }
  i7690.bindposes = i7696
  var i7699 = i7691[8]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 1) {
    i7698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7699[i + 0]) );
  }
  i7690.blendShapes = i7698
  return i7690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7705 = data
  i7704.triangles = i7705[0]
  return i7704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7711 = data
  i7710.name = i7711[0]
  var i7713 = i7711[1]
  var i7712 = []
  for(var i = 0; i < i7713.length; i += 1) {
    i7712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7713[i + 0]) );
  }
  i7710.frames = i7712
  return i7710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7715 = data
  i7714.name = i7715[0]
  i7714.atlasId = i7715[1]
  i7714.mipmapCount = i7715[2]
  i7714.hdr = !!i7715[3]
  i7714.size = i7715[4]
  i7714.anisoLevel = i7715[5]
  i7714.filterMode = i7715[6]
  i7714.wrapMode = i7715[7]
  var i7717 = i7715[8]
  var i7716 = []
  for(var i = 0; i < i7717.length; i += 4) {
    i7716.push( UnityEngine.Rect.MinMaxRect(i7717[i + 0], i7717[i + 1], i7717[i + 2], i7717[i + 3]) );
  }
  i7714.rects = i7716
  return i7714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7721 = data
  i7720.name = i7721[0]
  i7720.index = i7721[1]
  i7720.startup = !!i7721[2]
  return i7720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7723 = data
  i7722.enabled = !!i7723[0]
  i7722.aspect = i7723[1]
  i7722.orthographic = !!i7723[2]
  i7722.orthographicSize = i7723[3]
  i7722.backgroundColor = new pc.Color(i7723[4], i7723[5], i7723[6], i7723[7])
  i7722.nearClipPlane = i7723[8]
  i7722.farClipPlane = i7723[9]
  i7722.fieldOfView = i7723[10]
  i7722.depth = i7723[11]
  i7722.clearFlags = i7723[12]
  i7722.cullingMask = i7723[13]
  i7722.rect = i7723[14]
  request.r(i7723[15], i7723[16], 0, i7722, 'targetTexture')
  return i7722
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i7724 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i7725 = data
  i7724.m_ShowDebugText = !!i7725[0]
  i7724.m_ShowCameraFrustum = !!i7725[1]
  i7724.m_IgnoreTimeScale = !!i7725[2]
  request.r(i7725[3], i7725[4], 0, i7724, 'm_WorldUpOverride')
  i7724.m_UpdateMethod = i7725[5]
  i7724.m_BlendUpdateMethod = i7725[6]
  i7724.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i7725[7], i7724.m_DefaultBlend)
  request.r(i7725[8], i7725[9], 0, i7724, 'm_CustomBlends')
  i7724.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i7725[10], i7724.m_CameraCutEvent)
  i7724.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i7725[11], i7724.m_CameraActivatedEvent)
  return i7724
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i7726 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i7727 = data
  i7726.m_Style = i7727[0]
  i7726.m_Time = i7727[1]
  i7726.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i7727[2] } )
  return i7726
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i7728 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i7729 = data
  i7728.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7729[0], i7728.m_PersistentCalls)
  return i7728
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7730 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7731 = data
  var i7733 = i7731[0]
  var i7732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7733.length; i += 1) {
    i7732.add(request.d('UnityEngine.Events.PersistentCall', i7733[i + 0]));
  }
  i7730.m_Calls = i7732
  return i7730
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7736 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7737 = data
  request.r(i7737[0], i7737[1], 0, i7736, 'm_Target')
  i7736.m_TargetAssemblyTypeName = i7737[2]
  i7736.m_MethodName = i7737[3]
  i7736.m_Mode = i7737[4]
  i7736.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7737[5], i7736.m_Arguments)
  i7736.m_CallState = i7737[6]
  return i7736
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i7738 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i7739 = data
  i7738.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7739[0], i7738.m_PersistentCalls)
  return i7738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7741 = data
  request.r(i7741[0], i7741[1], 0, i7740, 'clip')
  request.r(i7741[2], i7741[3], 0, i7740, 'outputAudioMixerGroup')
  i7740.playOnAwake = !!i7741[4]
  i7740.loop = !!i7741[5]
  i7740.time = i7741[6]
  i7740.volume = i7741[7]
  i7740.pitch = i7741[8]
  i7740.enabled = !!i7741[9]
  return i7740
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i7742 = root || request.c( 'SoundHandler' )
  var i7743 = data
  request.r(i7743[0], i7743[1], 0, i7742, '_audioSource')
  return i7742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7745 = data
  i7744.enabled = !!i7745[0]
  i7744.type = i7745[1]
  i7744.color = new pc.Color(i7745[2], i7745[3], i7745[4], i7745[5])
  i7744.cullingMask = i7745[6]
  i7744.intensity = i7745[7]
  i7744.range = i7745[8]
  i7744.spotAngle = i7745[9]
  i7744.shadows = i7745[10]
  i7744.shadowNormalBias = i7745[11]
  i7744.shadowBias = i7745[12]
  i7744.shadowStrength = i7745[13]
  i7744.shadowResolution = i7745[14]
  i7744.lightmapBakeType = i7745[15]
  i7744.renderMode = i7745[16]
  request.r(i7745[17], i7745[18], 0, i7744, 'cookie')
  i7744.cookieSize = i7745[19]
  return i7744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7747 = data
  request.r(i7747[0], i7747[1], 0, i7746, 'animatorController')
  i7746.updateMode = i7747[2]
  var i7749 = i7747[3]
  var i7748 = []
  for(var i = 0; i < i7749.length; i += 2) {
  request.r(i7749[i + 0], i7749[i + 1], 2, i7748, '')
  }
  i7746.humanBones = i7748
  i7746.enabled = !!i7747[4]
  return i7746
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i7752 = root || request.c( 'JumpHandler' )
  var i7753 = data
  request.r(i7753[0], i7753[1], 0, i7752, '_landJump')
  request.r(i7753[2], i7753[3], 0, i7752, '_secondLandJump')
  request.r(i7753[4], i7753[5], 0, i7752, '_spawnPoint')
  request.r(i7753[6], i7753[7], 0, i7752, '_enemy')
  request.r(i7753[8], i7753[9], 0, i7752, '_finalPoint')
  return i7752
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i7754 = root || request.c( 'AnimationHandler' )
  var i7755 = data
  request.r(i7755[0], i7755[1], 0, i7754, '_jumpHandler')
  return i7754
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i7756 = root || request.c( 'EffectHandler' )
  var i7757 = data
  request.r(i7757[0], i7757[1], 0, i7756, '_jumpHandler')
  request.r(i7757[2], i7757[3], 0, i7756, '_canvas')
  request.r(i7757[4], i7757[5], 0, i7756, '_jumpSmoke')
  request.r(i7757[6], i7757[7], 0, i7756, '_light')
  request.r(i7757[8], i7757[9], 0, i7756, '_smoke')
  request.r(i7757[10], i7757[11], 0, i7756, '_enemyPool')
  request.r(i7757[12], i7757[13], 0, i7756, '_specialEnemy')
  return i7756
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i7758 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i7759 = data
  request.r(i7759[0], i7759[1], 0, i7758, 'm_LookAt')
  request.r(i7759[2], i7759[3], 0, i7758, 'm_Follow')
  i7758.m_Lens = request.d('Cinemachine.LensSettings', i7759[4], i7758.m_Lens)
  i7758.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i7759[5], i7758.m_Transitions)
  var i7761 = i7759[6]
  var i7760 = []
  for(var i = 0; i < i7761.length; i += 1) {
    i7760.push( i7761[i + 0] );
  }
  i7758.m_ExcludedPropertiesInInspector = i7760
  var i7763 = i7759[7]
  var i7762 = []
  for(var i = 0; i < i7763.length; i += 1) {
    i7762.push( i7763[i + 0] );
  }
  i7758.m_LockStageInInspector = i7762
  i7758.m_Priority = i7759[8]
  i7758.m_StandbyUpdate = i7759[9]
  i7758.m_LegacyBlendHint = i7759[10]
  request.r(i7759[11], i7759[12], 0, i7758, 'm_ComponentOwner')
  i7758.m_StreamingVersion = i7759[13]
  return i7758
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i7764 = root || request.c( 'Cinemachine.LensSettings' )
  var i7765 = data
  i7764.FieldOfView = i7765[0]
  i7764.OrthographicSize = i7765[1]
  i7764.NearClipPlane = i7765[2]
  i7764.FarClipPlane = i7765[3]
  i7764.Dutch = i7765[4]
  i7764.LensShift = new pc.Vec2( i7765[5], i7765[6] )
  return i7764
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i7766 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i7767 = data
  i7766.m_BlendHint = i7767[0]
  i7766.m_InheritPosition = !!i7767[1]
  i7766.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i7767[2], i7766.m_OnCameraLive)
  return i7766
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i7772 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i7773 = data
  return i7772
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i7774 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i7775 = data
  i7774.m_TrackedObjectOffset = new pc.Vec3( i7775[0], i7775[1], i7775[2] )
  i7774.m_LookaheadTime = i7775[3]
  i7774.m_LookaheadSmoothing = i7775[4]
  i7774.m_LookaheadIgnoreY = !!i7775[5]
  i7774.m_HorizontalDamping = i7775[6]
  i7774.m_VerticalDamping = i7775[7]
  i7774.m_ScreenX = i7775[8]
  i7774.m_ScreenY = i7775[9]
  i7774.m_DeadZoneWidth = i7775[10]
  i7774.m_DeadZoneHeight = i7775[11]
  i7774.m_SoftZoneWidth = i7775[12]
  i7774.m_SoftZoneHeight = i7775[13]
  i7774.m_BiasX = i7775[14]
  i7774.m_BiasY = i7775[15]
  i7774.m_CenterOnActivate = !!i7775[16]
  return i7774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i7777 = data
  i7776.enabled = !!i7777[0]
  request.r(i7777[1], i7777[2], 0, i7776, 'sharedMaterial')
  var i7779 = i7777[3]
  var i7778 = []
  for(var i = 0; i < i7779.length; i += 2) {
  request.r(i7779[i + 0], i7779[i + 1], 2, i7778, '')
  }
  i7776.sharedMaterials = i7778
  i7776.receiveShadows = !!i7777[4]
  i7776.shadowCastingMode = i7777[5]
  i7776.sortingLayerID = i7777[6]
  i7776.sortingOrder = i7777[7]
  i7776.lightmapIndex = i7777[8]
  i7776.lightmapSceneIndex = i7777[9]
  i7776.lightmapScaleOffset = new pc.Vec4( i7777[10], i7777[11], i7777[12], i7777[13] )
  i7776.lightProbeUsage = i7777[14]
  i7776.reflectionProbeUsage = i7777[15]
  request.r(i7777[16], i7777[17], 0, i7776, 'sharedMesh')
  var i7781 = i7777[18]
  var i7780 = []
  for(var i = 0; i < i7781.length; i += 2) {
  request.r(i7781[i + 0], i7781[i + 1], 2, i7780, '')
  }
  i7776.bones = i7780
  i7776.updateWhenOffscreen = !!i7777[19]
  i7776.localBounds = i7777[20]
  request.r(i7777[21], i7777[22], 0, i7776, 'rootBone')
  var i7783 = i7777[23]
  var i7782 = []
  for(var i = 0; i < i7783.length; i += 1) {
    i7782.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i7783[i + 0]) );
  }
  i7776.blendShapesWeights = i7782
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i7786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i7787 = data
  i7786.weight = i7787[0]
  return i7786
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i7788 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i7789 = data
  i7788.m_BindingMode = i7789[0]
  i7788.m_FollowOffset = new pc.Vec3( i7789[1], i7789[2], i7789[3] )
  i7788.m_XDamping = i7789[4]
  i7788.m_YDamping = i7789[5]
  i7788.m_ZDamping = i7789[6]
  i7788.m_AngularDampingMode = i7789[7]
  i7788.m_PitchDamping = i7789[8]
  i7788.m_YawDamping = i7789[9]
  i7788.m_RollDamping = i7789[10]
  i7788.m_AngularDamping = i7789[11]
  return i7788
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i7790 = root || request.c( 'StartCamera' )
  var i7791 = data
  request.r(i7791[0], i7791[1], 0, i7790, '_startCamera')
  request.r(i7791[2], i7791[3], 0, i7790, '_path')
  request.r(i7791[4], i7791[5], 0, i7790, '_player')
  request.r(i7791[6], i7791[7], 0, i7790, '_canvas')
  return i7790
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i7792 = root || request.c( 'ResolutionHandler' )
  var i7793 = data
  request.r(i7793[0], i7793[1], 0, i7792, '_secondCamera')
  request.r(i7793[2], i7793[3], 0, i7792, '_fourthCamera')
  request.r(i7793[4], i7793[5], 0, i7792, '_fifthCamera')
  return i7792
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i7794 = root || request.c( 'CameraHandler' )
  var i7795 = data
  request.r(i7795[0], i7795[1], 0, i7794, '_jumpHandler')
  request.r(i7795[2], i7795[3], 0, i7794, '_firstCamera')
  request.r(i7795[4], i7795[5], 0, i7794, '_secondCamera')
  request.r(i7795[6], i7795[7], 0, i7794, '_thirdCamera')
  request.r(i7795[8], i7795[9], 0, i7794, '_fourthCamera')
  request.r(i7795[10], i7795[11], 0, i7794, '_fifthCamera')
  return i7794
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i7796 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i7797 = data
  request.r(i7797[0], i7797[1], 0, i7796, 'm_Path')
  i7796.m_PathPosition = i7797[2]
  i7796.m_PositionUnits = i7797[3]
  i7796.m_PathOffset = new pc.Vec3( i7797[4], i7797[5], i7797[6] )
  i7796.m_XDamping = i7797[7]
  i7796.m_YDamping = i7797[8]
  i7796.m_ZDamping = i7797[9]
  i7796.m_CameraUp = i7797[10]
  i7796.m_PitchDamping = i7797[11]
  i7796.m_YawDamping = i7797[12]
  i7796.m_RollDamping = i7797[13]
  i7796.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i7797[14], i7796.m_AutoDolly)
  return i7796
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i7798 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i7799 = data
  i7798.m_Enabled = !!i7799[0]
  i7798.m_PositionOffset = i7799[1]
  i7798.m_SearchRadius = i7799[2]
  i7798.m_SearchResolution = i7799[3]
  return i7798
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i7800 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i7801 = data
  i7800.m_Looped = !!i7801[0]
  var i7803 = i7801[1]
  var i7802 = []
  for(var i = 0; i < i7803.length; i += 1) {
    i7802.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i7803[i + 0]) );
  }
  i7800.m_Waypoints = i7802
  i7800.m_Resolution = i7801[2]
  i7800.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i7801[3], i7800.m_Appearance)
  return i7800
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i7806 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i7807 = data
  i7806.position = new pc.Vec3( i7807[0], i7807[1], i7807[2] )
  i7806.roll = i7807[3]
  return i7806
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i7808 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i7809 = data
  i7808.pathColor = new pc.Color(i7809[0], i7809[1], i7809[2], i7809[3])
  i7808.inactivePathColor = new pc.Color(i7809[4], i7809[5], i7809[6], i7809[7])
  i7808.width = i7809[8]
  return i7808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7811 = data
  i7810.pivot = new pc.Vec2( i7811[0], i7811[1] )
  i7810.anchorMin = new pc.Vec2( i7811[2], i7811[3] )
  i7810.anchorMax = new pc.Vec2( i7811[4], i7811[5] )
  i7810.sizeDelta = new pc.Vec2( i7811[6], i7811[7] )
  i7810.anchoredPosition3D = new pc.Vec3( i7811[8], i7811[9], i7811[10] )
  i7810.rotation = new pc.Quat(i7811[11], i7811[12], i7811[13], i7811[14])
  i7810.scale = new pc.Vec3( i7811[15], i7811[16], i7811[17] )
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7813 = data
  i7812.enabled = !!i7813[0]
  i7812.planeDistance = i7813[1]
  i7812.referencePixelsPerUnit = i7813[2]
  i7812.isFallbackOverlay = !!i7813[3]
  i7812.renderMode = i7813[4]
  i7812.renderOrder = i7813[5]
  i7812.sortingLayerName = i7813[6]
  i7812.sortingOrder = i7813[7]
  i7812.scaleFactor = i7813[8]
  request.r(i7813[9], i7813[10], 0, i7812, 'worldCamera')
  i7812.overrideSorting = !!i7813[11]
  i7812.pixelPerfect = !!i7813[12]
  i7812.targetDisplay = i7813[13]
  i7812.overridePixelPerfect = !!i7813[14]
  return i7812
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7814 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7815 = data
  i7814.m_UiScaleMode = i7815[0]
  i7814.m_ReferencePixelsPerUnit = i7815[1]
  i7814.m_ScaleFactor = i7815[2]
  i7814.m_ReferenceResolution = new pc.Vec2( i7815[3], i7815[4] )
  i7814.m_ScreenMatchMode = i7815[5]
  i7814.m_MatchWidthOrHeight = i7815[6]
  i7814.m_PhysicalUnit = i7815[7]
  i7814.m_FallbackScreenDPI = i7815[8]
  i7814.m_DefaultSpriteDPI = i7815[9]
  i7814.m_DynamicPixelsPerUnit = i7815[10]
  i7814.m_PresetInfoIsWorld = !!i7815[11]
  return i7814
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7816 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7817 = data
  i7816.m_IgnoreReversedGraphics = !!i7817[0]
  i7816.m_BlockingObjects = i7817[1]
  i7816.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7817[2] )
  return i7816
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i7818 = root || request.c( 'UIHandler' )
  var i7819 = data
  request.r(i7819[0], i7819[1], 0, i7818, '_jumpHandler')
  request.r(i7819[2], i7819[3], 0, i7818, '_powerButton')
  request.r(i7819[4], i7819[5], 0, i7818, '_cTAButton')
  request.r(i7819[6], i7819[7], 0, i7818, '_fade')
  request.r(i7819[8], i7819[9], 0, i7818, '_finalPanel')
  return i7818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7821 = data
  i7820.cullTransparentMesh = !!i7821[0]
  return i7820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7822 = root || request.c( 'UnityEngine.UI.Image' )
  var i7823 = data
  request.r(i7823[0], i7823[1], 0, i7822, 'm_Sprite')
  i7822.m_Type = i7823[2]
  i7822.m_PreserveAspect = !!i7823[3]
  i7822.m_FillCenter = !!i7823[4]
  i7822.m_FillMethod = i7823[5]
  i7822.m_FillAmount = i7823[6]
  i7822.m_FillClockwise = !!i7823[7]
  i7822.m_FillOrigin = i7823[8]
  i7822.m_UseSpriteMesh = !!i7823[9]
  i7822.m_PixelsPerUnitMultiplier = i7823[10]
  request.r(i7823[11], i7823[12], 0, i7822, 'm_Material')
  i7822.m_Maskable = !!i7823[13]
  i7822.m_Color = new pc.Color(i7823[14], i7823[15], i7823[16], i7823[17])
  i7822.m_RaycastTarget = !!i7823[18]
  i7822.m_RaycastPadding = new pc.Vec4( i7823[19], i7823[20], i7823[21], i7823[22] )
  return i7822
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7824 = root || request.c( 'UnityEngine.UI.Button' )
  var i7825 = data
  i7824.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7825[0], i7824.m_OnClick)
  i7824.m_Navigation = request.d('UnityEngine.UI.Navigation', i7825[1], i7824.m_Navigation)
  i7824.m_Transition = i7825[2]
  i7824.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7825[3], i7824.m_Colors)
  i7824.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7825[4], i7824.m_SpriteState)
  i7824.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7825[5], i7824.m_AnimationTriggers)
  i7824.m_Interactable = !!i7825[6]
  request.r(i7825[7], i7825[8], 0, i7824, 'm_TargetGraphic')
  return i7824
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7826 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7827 = data
  i7826.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7827[0], i7826.m_PersistentCalls)
  return i7826
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7828 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7829 = data
  i7828.m_Mode = i7829[0]
  i7828.m_WrapAround = !!i7829[1]
  request.r(i7829[2], i7829[3], 0, i7828, 'm_SelectOnUp')
  request.r(i7829[4], i7829[5], 0, i7828, 'm_SelectOnDown')
  request.r(i7829[6], i7829[7], 0, i7828, 'm_SelectOnLeft')
  request.r(i7829[8], i7829[9], 0, i7828, 'm_SelectOnRight')
  return i7828
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7830 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7831 = data
  i7830.m_NormalColor = new pc.Color(i7831[0], i7831[1], i7831[2], i7831[3])
  i7830.m_HighlightedColor = new pc.Color(i7831[4], i7831[5], i7831[6], i7831[7])
  i7830.m_PressedColor = new pc.Color(i7831[8], i7831[9], i7831[10], i7831[11])
  i7830.m_SelectedColor = new pc.Color(i7831[12], i7831[13], i7831[14], i7831[15])
  i7830.m_DisabledColor = new pc.Color(i7831[16], i7831[17], i7831[18], i7831[19])
  i7830.m_ColorMultiplier = i7831[20]
  i7830.m_FadeDuration = i7831[21]
  return i7830
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7832 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7833 = data
  request.r(i7833[0], i7833[1], 0, i7832, 'm_HighlightedSprite')
  request.r(i7833[2], i7833[3], 0, i7832, 'm_PressedSprite')
  request.r(i7833[4], i7833[5], 0, i7832, 'm_SelectedSprite')
  request.r(i7833[6], i7833[7], 0, i7832, 'm_DisabledSprite')
  return i7832
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7834 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7835 = data
  i7834.m_NormalTrigger = i7835[0]
  i7834.m_HighlightedTrigger = i7835[1]
  i7834.m_PressedTrigger = i7835[2]
  i7834.m_SelectedTrigger = i7835[3]
  i7834.m_DisabledTrigger = i7835[4]
  return i7834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7837 = data
  i7836.m_Alpha = i7837[0]
  i7836.m_Interactable = !!i7837[1]
  i7836.m_BlocksRaycasts = !!i7837[2]
  i7836.m_IgnoreParentGroups = !!i7837[3]
  i7836.enabled = !!i7837[4]
  return i7836
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7838 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7839 = data
  i7838.m_hasFontAssetChanged = !!i7839[0]
  request.r(i7839[1], i7839[2], 0, i7838, 'm_baseMaterial')
  i7838.m_maskOffset = new pc.Vec4( i7839[3], i7839[4], i7839[5], i7839[6] )
  i7838.m_text = i7839[7]
  i7838.m_isRightToLeft = !!i7839[8]
  request.r(i7839[9], i7839[10], 0, i7838, 'm_fontAsset')
  request.r(i7839[11], i7839[12], 0, i7838, 'm_sharedMaterial')
  var i7841 = i7839[13]
  var i7840 = []
  for(var i = 0; i < i7841.length; i += 2) {
  request.r(i7841[i + 0], i7841[i + 1], 2, i7840, '')
  }
  i7838.m_fontSharedMaterials = i7840
  request.r(i7839[14], i7839[15], 0, i7838, 'm_fontMaterial')
  var i7843 = i7839[16]
  var i7842 = []
  for(var i = 0; i < i7843.length; i += 2) {
  request.r(i7843[i + 0], i7843[i + 1], 2, i7842, '')
  }
  i7838.m_fontMaterials = i7842
  i7838.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7839[17], i7839[18], i7839[19], i7839[20])
  i7838.m_fontColor = new pc.Color(i7839[21], i7839[22], i7839[23], i7839[24])
  i7838.m_enableVertexGradient = !!i7839[25]
  i7838.m_colorMode = i7839[26]
  i7838.m_fontColorGradient = request.d('TMPro.VertexGradient', i7839[27], i7838.m_fontColorGradient)
  request.r(i7839[28], i7839[29], 0, i7838, 'm_fontColorGradientPreset')
  request.r(i7839[30], i7839[31], 0, i7838, 'm_spriteAsset')
  i7838.m_tintAllSprites = !!i7839[32]
  request.r(i7839[33], i7839[34], 0, i7838, 'm_StyleSheet')
  i7838.m_TextStyleHashCode = i7839[35]
  i7838.m_overrideHtmlColors = !!i7839[36]
  i7838.m_faceColor = UnityEngine.Color32.ConstructColor(i7839[37], i7839[38], i7839[39], i7839[40])
  i7838.m_fontSize = i7839[41]
  i7838.m_fontSizeBase = i7839[42]
  i7838.m_fontWeight = i7839[43]
  i7838.m_enableAutoSizing = !!i7839[44]
  i7838.m_fontSizeMin = i7839[45]
  i7838.m_fontSizeMax = i7839[46]
  i7838.m_fontStyle = i7839[47]
  i7838.m_HorizontalAlignment = i7839[48]
  i7838.m_VerticalAlignment = i7839[49]
  i7838.m_textAlignment = i7839[50]
  i7838.m_characterSpacing = i7839[51]
  i7838.m_wordSpacing = i7839[52]
  i7838.m_lineSpacing = i7839[53]
  i7838.m_lineSpacingMax = i7839[54]
  i7838.m_paragraphSpacing = i7839[55]
  i7838.m_charWidthMaxAdj = i7839[56]
  i7838.m_enableWordWrapping = !!i7839[57]
  i7838.m_wordWrappingRatios = i7839[58]
  i7838.m_overflowMode = i7839[59]
  request.r(i7839[60], i7839[61], 0, i7838, 'm_linkedTextComponent')
  request.r(i7839[62], i7839[63], 0, i7838, 'parentLinkedComponent')
  i7838.m_enableKerning = !!i7839[64]
  i7838.m_enableExtraPadding = !!i7839[65]
  i7838.checkPaddingRequired = !!i7839[66]
  i7838.m_isRichText = !!i7839[67]
  i7838.m_parseCtrlCharacters = !!i7839[68]
  i7838.m_isOrthographic = !!i7839[69]
  i7838.m_isCullingEnabled = !!i7839[70]
  i7838.m_horizontalMapping = i7839[71]
  i7838.m_verticalMapping = i7839[72]
  i7838.m_uvLineOffset = i7839[73]
  i7838.m_geometrySortingOrder = i7839[74]
  i7838.m_IsTextObjectScaleStatic = !!i7839[75]
  i7838.m_VertexBufferAutoSizeReduction = !!i7839[76]
  i7838.m_useMaxVisibleDescender = !!i7839[77]
  i7838.m_pageToDisplay = i7839[78]
  i7838.m_margin = new pc.Vec4( i7839[79], i7839[80], i7839[81], i7839[82] )
  i7838.m_isUsingLegacyAnimationComponent = !!i7839[83]
  i7838.m_isVolumetricText = !!i7839[84]
  request.r(i7839[85], i7839[86], 0, i7838, 'm_Material')
  i7838.m_Maskable = !!i7839[87]
  i7838.m_Color = new pc.Color(i7839[88], i7839[89], i7839[90], i7839[91])
  i7838.m_RaycastTarget = !!i7839[92]
  i7838.m_RaycastPadding = new pc.Vec4( i7839[93], i7839[94], i7839[95], i7839[96] )
  return i7838
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7844 = root || request.c( 'TMPro.VertexGradient' )
  var i7845 = data
  i7844.topLeft = new pc.Color(i7845[0], i7845[1], i7845[2], i7845[3])
  i7844.topRight = new pc.Color(i7845[4], i7845[5], i7845[6], i7845[7])
  i7844.bottomLeft = new pc.Color(i7845[8], i7845[9], i7845[10], i7845[11])
  i7844.bottomRight = new pc.Color(i7845[12], i7845[13], i7845[14], i7845[15])
  return i7844
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i7846 = root || request.c( 'UnityEngine.UI.Mask' )
  var i7847 = data
  i7846.m_ShowMaskGraphic = !!i7847[0]
  return i7846
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i7848 = root || request.c( 'EnemyPool' )
  var i7849 = data
  var i7851 = i7849[0]
  var i7850 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i7851.length; i += 2) {
  request.r(i7851[i + 0], i7851[i + 1], 1, i7850, '')
  }
  i7848._enemies = i7850
  return i7848
}

Deserializers["Stalker"] = function (request, data, root) {
  var i7854 = root || request.c( 'Stalker' )
  var i7855 = data
  request.r(i7855[0], i7855[1], 0, i7854, '_target')
  return i7854
}

Deserializers["Enemy"] = function (request, data, root) {
  var i7856 = root || request.c( 'Enemy' )
  var i7857 = data
  return i7856
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7858 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7859 = data
  request.r(i7859[0], i7859[1], 0, i7858, 'm_FirstSelected')
  i7858.m_sendNavigationEvents = !!i7859[2]
  i7858.m_DragThreshold = i7859[3]
  return i7858
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7860 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7861 = data
  i7860.m_HorizontalAxis = i7861[0]
  i7860.m_VerticalAxis = i7861[1]
  i7860.m_SubmitButton = i7861[2]
  i7860.m_CancelButton = i7861[3]
  i7860.m_InputActionsPerSecond = i7861[4]
  i7860.m_RepeatDelay = i7861[5]
  i7860.m_ForceModuleActive = !!i7861[6]
  return i7860
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i7862 = root || request.c( 'ChooseHandler' )
  var i7863 = data
  i7862._currentCharacter = i7863[0]
  request.r(i7863[1], i7863[2], 0, i7862, '_soundHandler')
  request.r(i7863[3], i7863[4], 0, i7862, '_scene')
  request.r(i7863[5], i7863[6], 0, i7862, '_sceneBackground')
  request.r(i7863[7], i7863[8], 0, i7862, '_chooseButton')
  var i7865 = i7863[9]
  var i7864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7865.length; i += 2) {
  request.r(i7865[i + 0], i7865[i + 1], 1, i7864, '')
  }
  i7862._characters = i7864
  request.r(i7863[10], i7863[11], 0, i7862, '_frame')
  return i7862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7869 = data
  i7868.ambientIntensity = i7869[0]
  i7868.reflectionIntensity = i7869[1]
  i7868.ambientMode = i7869[2]
  i7868.ambientLight = new pc.Color(i7869[3], i7869[4], i7869[5], i7869[6])
  i7868.ambientSkyColor = new pc.Color(i7869[7], i7869[8], i7869[9], i7869[10])
  i7868.ambientGroundColor = new pc.Color(i7869[11], i7869[12], i7869[13], i7869[14])
  i7868.ambientEquatorColor = new pc.Color(i7869[15], i7869[16], i7869[17], i7869[18])
  i7868.fogColor = new pc.Color(i7869[19], i7869[20], i7869[21], i7869[22])
  i7868.fogEndDistance = i7869[23]
  i7868.fogStartDistance = i7869[24]
  i7868.fogDensity = i7869[25]
  i7868.fog = !!i7869[26]
  request.r(i7869[27], i7869[28], 0, i7868, 'skybox')
  i7868.fogMode = i7869[29]
  var i7871 = i7869[30]
  var i7870 = []
  for(var i = 0; i < i7871.length; i += 1) {
    i7870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7871[i + 0]) );
  }
  i7868.lightmaps = i7870
  i7868.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7869[31], i7868.lightProbes)
  i7868.lightmapsMode = i7869[32]
  i7868.environmentLightingMode = i7869[33]
  i7868.ambientProbe = new pc.SphericalHarmonicsL2(i7869[34])
  i7868.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7869[35])
  i7868.useReferenceAmbientProbe = !!i7869[36]
  request.r(i7869[37], i7869[38], 0, i7868, 'customReflection')
  request.r(i7869[39], i7869[40], 0, i7868, 'defaultReflection')
  i7868.defaultReflectionMode = i7869[41]
  i7868.defaultReflectionResolution = i7869[42]
  i7868.sunLightObjectId = i7869[43]
  i7868.pixelLightCount = i7869[44]
  i7868.defaultReflectionHDR = !!i7869[45]
  i7868.hasLightDataAsset = !!i7869[46]
  i7868.hasManualGenerate = !!i7869[47]
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7875 = data
  request.r(i7875[0], i7875[1], 0, i7874, 'lightmapColor')
  request.r(i7875[2], i7875[3], 0, i7874, 'lightmapDirection')
  return i7874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7876 = root || new UnityEngine.LightProbes()
  var i7877 = data
  return i7876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7885 = data
  var i7887 = i7885[0]
  var i7886 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i7887.length; i += 1) {
    i7886.add(i7887[i + 0]);
  }
  i7884.invalidShaderVariants = i7886
  i7884.name = i7885[1]
  i7884.guid = i7885[2]
  var i7889 = i7885[3]
  var i7888 = []
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.push( i7889[i + 0] );
  }
  i7884.shaderDefinedKeywords = i7888
  var i7891 = i7885[4]
  var i7890 = []
  for(var i = 0; i < i7891.length; i += 1) {
    i7890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7891[i + 0]) );
  }
  i7884.passes = i7890
  var i7893 = i7885[5]
  var i7892 = []
  for(var i = 0; i < i7893.length; i += 1) {
    i7892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7893[i + 0]) );
  }
  i7884.usePasses = i7892
  var i7895 = i7885[6]
  var i7894 = []
  for(var i = 0; i < i7895.length; i += 1) {
    i7894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7895[i + 0]) );
  }
  i7884.defaultParameterValues = i7894
  request.r(i7885[7], i7885[8], 0, i7884, 'unityFallbackShader')
  i7884.readDepth = !!i7885[9]
  i7884.isCreatedByShaderGraph = !!i7885[10]
  return i7884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7900 = root || new pc.UnityShaderPass()
  var i7901 = data
  i7900.id = i7901[0]
  i7900.subShaderIndex = i7901[1]
  i7900.name = i7901[2]
  i7900.passType = i7901[3]
  i7900.usePass = !!i7901[4]
  i7900.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[5], i7900.zTest)
  i7900.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[6], i7900.zWrite)
  i7900.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[7], i7900.culling)
  i7900.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7901[8], i7900.blending)
  i7900.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7901[9], i7900.alphaBlending)
  i7900.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[10], i7900.colorWriteMask)
  i7900.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[11], i7900.offsetUnits)
  i7900.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[12], i7900.offsetFactor)
  i7900.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[13], i7900.stencilRef)
  i7900.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[14], i7900.stencilReadMask)
  i7900.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7901[15], i7900.stencilWriteMask)
  i7900.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7901[16], i7900.stencilOp)
  i7900.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7901[17], i7900.stencilOpFront)
  i7900.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7901[18], i7900.stencilOpBack)
  var i7903 = i7901[19]
  var i7902 = []
  for(var i = 0; i < i7903.length; i += 1) {
    i7902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7903[i + 0]) );
  }
  i7900.tags = i7902
  var i7905 = i7901[20]
  var i7904 = []
  for(var i = 0; i < i7905.length; i += 1) {
    i7904.push( i7905[i + 0] );
  }
  i7900.passDefinedKeywords = i7904
  var i7907 = i7901[21]
  var i7906 = []
  for(var i = 0; i < i7907.length; i += 1) {
    i7906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7907[i + 0]) );
  }
  i7900.variants = i7906
  var i7909 = i7901[22]
  var i7908 = []
  for(var i = 0; i < i7909.length; i += 1) {
    i7908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7909[i + 0]) );
  }
  i7900.excludedVariants = i7908
  i7900.hasDepthReader = !!i7901[23]
  return i7900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7911 = data
  i7910.val = i7911[0]
  i7910.name = i7911[1]
  return i7910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7913 = data
  i7912.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7913[0], i7912.src)
  i7912.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7913[1], i7912.dst)
  i7912.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7913[2], i7912.op)
  return i7912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7915 = data
  i7914.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7915[0], i7914.pass)
  i7914.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7915[1], i7914.fail)
  i7914.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7915[2], i7914.zFail)
  i7914.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7915[3], i7914.comp)
  return i7914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7919 = data
  i7918.name = i7919[0]
  i7918.value = i7919[1]
  return i7918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7923 = data
  i7922.passId = i7923[0]
  i7922.subShaderIndex = i7923[1]
  var i7925 = i7923[2]
  var i7924 = []
  for(var i = 0; i < i7925.length; i += 1) {
    i7924.push( i7925[i + 0] );
  }
  i7922.keywords = i7924
  i7922.vertexProgram = i7923[3]
  i7922.fragmentProgram = i7923[4]
  i7922.readDepth = !!i7923[5]
  return i7922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7929 = data
  request.r(i7929[0], i7929[1], 0, i7928, 'shader')
  i7928.pass = i7929[2]
  return i7928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7933 = data
  i7932.name = i7933[0]
  i7932.type = i7933[1]
  i7932.value = new pc.Vec4( i7933[2], i7933[3], i7933[4], i7933[5] )
  i7932.textureValue = i7933[6]
  return i7932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7935 = data
  i7934.name = i7935[0]
  request.r(i7935[1], i7935[2], 0, i7934, 'texture')
  i7934.aabb = i7935[3]
  i7934.vertices = i7935[4]
  i7934.triangles = i7935[5]
  i7934.textureRect = UnityEngine.Rect.MinMaxRect(i7935[6], i7935[7], i7935[8], i7935[9])
  i7934.packedRect = UnityEngine.Rect.MinMaxRect(i7935[10], i7935[11], i7935[12], i7935[13])
  i7934.border = new pc.Vec4( i7935[14], i7935[15], i7935[16], i7935[17] )
  i7934.transparency = i7935[18]
  i7934.bounds = i7935[19]
  i7934.pixelsPerUnit = i7935[20]
  i7934.textureWidth = i7935[21]
  i7934.textureHeight = i7935[22]
  i7934.nativeSize = new pc.Vec2( i7935[23], i7935[24] )
  i7934.pivot = new pc.Vec2( i7935[25], i7935[26] )
  i7934.textureRectOffset = new pc.Vec2( i7935[27], i7935[28] )
  return i7934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7937 = data
  i7936.name = i7937[0]
  return i7936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7939 = data
  i7938.name = i7939[0]
  i7938.wrapMode = i7939[1]
  i7938.isLooping = !!i7939[2]
  i7938.length = i7939[3]
  var i7941 = i7939[4]
  var i7940 = []
  for(var i = 0; i < i7941.length; i += 1) {
    i7940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7941[i + 0]) );
  }
  i7938.curves = i7940
  var i7943 = i7939[5]
  var i7942 = []
  for(var i = 0; i < i7943.length; i += 1) {
    i7942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7943[i + 0]) );
  }
  i7938.events = i7942
  i7938.halfPrecision = !!i7939[6]
  return i7938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7947 = data
  i7946.path = i7947[0]
  i7946.componentType = i7947[1]
  i7946.property = i7947[2]
  i7946.keys = i7947[3]
  var i7949 = i7947[4]
  var i7948 = []
  for(var i = 0; i < i7949.length; i += 1) {
    i7948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7949[i + 0]) );
  }
  i7946.objectReferenceKeys = i7948
  return i7946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7953 = data
  i7952.time = i7953[0]
  request.r(i7953[1], i7953[2], 0, i7952, 'value')
  return i7952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7957 = data
  i7956.functionName = i7957[0]
  i7956.floatParameter = i7957[1]
  i7956.intParameter = i7957[2]
  i7956.stringParameter = i7957[3]
  request.r(i7957[4], i7957[5], 0, i7956, 'objectReferenceParameter')
  i7956.time = i7957[6]
  return i7956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7959 = data
  i7958.name = i7959[0]
  var i7961 = i7959[1]
  var i7960 = []
  for(var i = 0; i < i7961.length; i += 1) {
    i7960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7961[i + 0]) );
  }
  i7958.states = i7960
  var i7963 = i7959[2]
  var i7962 = []
  for(var i = 0; i < i7963.length; i += 1) {
    i7962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7963[i + 0]) );
  }
  i7958.layers = i7962
  var i7965 = i7959[3]
  var i7964 = []
  for(var i = 0; i < i7965.length; i += 1) {
    i7964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7965[i + 0]) );
  }
  i7958.parameters = i7964
  var i7967 = i7959[4]
  var i7966 = []
  for(var i = 0; i < i7967.length; i += 1) {
    i7966.push( i7967[i + 0] );
  }
  i7958.animationClips = i7966
  i7958.HasSubStateMachines = !!i7959[5]
  return i7958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7971 = data
  i7970.cycleOffset = i7971[0]
  i7970.cycleOffsetParameter = i7971[1]
  i7970.cycleOffsetParameterActive = !!i7971[2]
  i7970.mirror = !!i7971[3]
  i7970.mirrorParameter = i7971[4]
  i7970.mirrorParameterActive = !!i7971[5]
  i7970.motionId = i7971[6]
  i7970.nameHash = i7971[7]
  i7970.fullPathHash = i7971[8]
  i7970.speed = i7971[9]
  i7970.speedParameter = i7971[10]
  i7970.speedParameterActive = !!i7971[11]
  i7970.tag = i7971[12]
  i7970.name = i7971[13]
  i7970.writeDefaultValues = !!i7971[14]
  var i7973 = i7971[15]
  var i7972 = []
  for(var i = 0; i < i7973.length; i += 1) {
    i7972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7973[i + 0]) );
  }
  i7970.transitions = i7972
  var i7975 = i7971[16]
  var i7974 = []
  for(var i = 0; i < i7975.length; i += 2) {
  request.r(i7975[i + 0], i7975[i + 1], 2, i7974, '')
  }
  i7970.behaviours = i7974
  return i7970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7979 = data
  i7978.fullPath = i7979[0]
  i7978.canTransitionToSelf = !!i7979[1]
  i7978.duration = i7979[2]
  i7978.exitTime = i7979[3]
  i7978.hasExitTime = !!i7979[4]
  i7978.hasFixedDuration = !!i7979[5]
  i7978.interruptionSource = i7979[6]
  i7978.offset = i7979[7]
  i7978.orderedInterruption = !!i7979[8]
  i7978.destinationStateNameHash = i7979[9]
  i7978.destinationStateMachineId = i7979[10]
  i7978.isExit = !!i7979[11]
  i7978.mute = !!i7979[12]
  i7978.solo = !!i7979[13]
  var i7981 = i7979[14]
  var i7980 = []
  for(var i = 0; i < i7981.length; i += 1) {
    i7980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7981[i + 0]) );
  }
  i7978.conditions = i7980
  return i7978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7987 = data
  i7986.mode = i7987[0]
  i7986.parameter = i7987[1]
  i7986.threshold = i7987[2]
  return i7986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7991 = data
  i7990.blendingMode = i7991[0]
  i7990.defaultWeight = i7991[1]
  i7990.name = i7991[2]
  i7990.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7991[3], i7990.stateMachine)
  return i7990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7993 = data
  i7992.id = i7993[0]
  i7992.defaultStateNameHash = i7993[1]
  var i7995 = i7993[2]
  var i7994 = []
  for(var i = 0; i < i7995.length; i += 1) {
    i7994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7995[i + 0]) );
  }
  i7992.entryTransitions = i7994
  var i7997 = i7993[3]
  var i7996 = []
  for(var i = 0; i < i7997.length; i += 1) {
    i7996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7997[i + 0]) );
  }
  i7992.anyStateTransitions = i7996
  return i7992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8001 = data
  i8000.destinationStateNameHash = i8001[0]
  i8000.destinationStateMachineId = i8001[1]
  i8000.isExit = !!i8001[2]
  i8000.mute = !!i8001[3]
  i8000.solo = !!i8001[4]
  var i8003 = i8001[5]
  var i8002 = []
  for(var i = 0; i < i8003.length; i += 1) {
    i8002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8003[i + 0]) );
  }
  i8000.conditions = i8002
  return i8000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8007 = data
  i8006.defaultBool = !!i8007[0]
  i8006.defaultFloat = i8007[1]
  i8006.defaultInt = i8007[2]
  i8006.name = i8007[3]
  i8006.nameHash = i8007[4]
  i8006.type = i8007[5]
  return i8006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8009 = data
  i8008.name = i8009[0]
  i8008.bytes64 = i8009[1]
  i8008.data = i8009[2]
  return i8008
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i8010 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i8011 = data
  var i8013 = i8011[0]
  var i8012 = []
  for(var i = 0; i < i8013.length; i += 1) {
    i8012.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i8013[i + 0]) );
  }
  i8010.m_CustomBlends = i8012
  return i8010
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i8016 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i8017 = data
  i8016.m_From = i8017[0]
  i8016.m_To = i8017[1]
  i8016.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i8017[2], i8016.m_Blend)
  return i8016
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8018 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8019 = data
  i8018.hashCode = i8019[0]
  request.r(i8019[1], i8019[2], 0, i8018, 'material')
  i8018.materialHashCode = i8019[3]
  request.r(i8019[4], i8019[5], 0, i8018, 'atlas')
  i8018.normalStyle = i8019[6]
  i8018.normalSpacingOffset = i8019[7]
  i8018.boldStyle = i8019[8]
  i8018.boldSpacing = i8019[9]
  i8018.italicStyle = i8019[10]
  i8018.tabSize = i8019[11]
  i8018.m_Version = i8019[12]
  i8018.m_SourceFontFileGUID = i8019[13]
  request.r(i8019[14], i8019[15], 0, i8018, 'm_SourceFontFile_EditorRef')
  request.r(i8019[16], i8019[17], 0, i8018, 'm_SourceFontFile')
  i8018.m_AtlasPopulationMode = i8019[18]
  i8018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8019[19], i8018.m_FaceInfo)
  var i8021 = i8019[20]
  var i8020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8021.length; i += 1) {
    i8020.add(request.d('UnityEngine.TextCore.Glyph', i8021[i + 0]));
  }
  i8018.m_GlyphTable = i8020
  var i8023 = i8019[21]
  var i8022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8023.length; i += 1) {
    i8022.add(request.d('TMPro.TMP_Character', i8023[i + 0]));
  }
  i8018.m_CharacterTable = i8022
  var i8025 = i8019[22]
  var i8024 = []
  for(var i = 0; i < i8025.length; i += 2) {
  request.r(i8025[i + 0], i8025[i + 1], 2, i8024, '')
  }
  i8018.m_AtlasTextures = i8024
  i8018.m_AtlasTextureIndex = i8019[23]
  i8018.m_IsMultiAtlasTexturesEnabled = !!i8019[24]
  i8018.m_ClearDynamicDataOnBuild = !!i8019[25]
  var i8027 = i8019[26]
  var i8026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8027.length; i += 1) {
    i8026.add(request.d('UnityEngine.TextCore.GlyphRect', i8027[i + 0]));
  }
  i8018.m_UsedGlyphRects = i8026
  var i8029 = i8019[27]
  var i8028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8029.length; i += 1) {
    i8028.add(request.d('UnityEngine.TextCore.GlyphRect', i8029[i + 0]));
  }
  i8018.m_FreeGlyphRects = i8028
  i8018.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8019[28], i8018.m_fontInfo)
  i8018.m_AtlasWidth = i8019[29]
  i8018.m_AtlasHeight = i8019[30]
  i8018.m_AtlasPadding = i8019[31]
  i8018.m_AtlasRenderMode = i8019[32]
  var i8031 = i8019[33]
  var i8030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8031.length; i += 1) {
    i8030.add(request.d('TMPro.TMP_Glyph', i8031[i + 0]));
  }
  i8018.m_glyphInfoList = i8030
  i8018.m_KerningTable = request.d('TMPro.KerningTable', i8019[34], i8018.m_KerningTable)
  i8018.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8019[35], i8018.m_FontFeatureTable)
  var i8033 = i8019[36]
  var i8032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8033.length; i += 2) {
  request.r(i8033[i + 0], i8033[i + 1], 1, i8032, '')
  }
  i8018.fallbackFontAssets = i8032
  var i8035 = i8019[37]
  var i8034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8035.length; i += 2) {
  request.r(i8035[i + 0], i8035[i + 1], 1, i8034, '')
  }
  i8018.m_FallbackFontAssetTable = i8034
  i8018.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8019[38], i8018.m_CreationSettings)
  var i8037 = i8019[39]
  var i8036 = []
  for(var i = 0; i < i8037.length; i += 1) {
    i8036.push( request.d('TMPro.TMP_FontWeightPair', i8037[i + 0]) );
  }
  i8018.m_FontWeightTable = i8036
  var i8039 = i8019[40]
  var i8038 = []
  for(var i = 0; i < i8039.length; i += 1) {
    i8038.push( request.d('TMPro.TMP_FontWeightPair', i8039[i + 0]) );
  }
  i8018.fontWeights = i8038
  return i8018
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8040 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8041 = data
  i8040.m_FaceIndex = i8041[0]
  i8040.m_FamilyName = i8041[1]
  i8040.m_StyleName = i8041[2]
  i8040.m_PointSize = i8041[3]
  i8040.m_Scale = i8041[4]
  i8040.m_LineHeight = i8041[5]
  i8040.m_AscentLine = i8041[6]
  i8040.m_CapLine = i8041[7]
  i8040.m_MeanLine = i8041[8]
  i8040.m_Baseline = i8041[9]
  i8040.m_DescentLine = i8041[10]
  i8040.m_SuperscriptOffset = i8041[11]
  i8040.m_SuperscriptSize = i8041[12]
  i8040.m_SubscriptOffset = i8041[13]
  i8040.m_SubscriptSize = i8041[14]
  i8040.m_UnderlineOffset = i8041[15]
  i8040.m_UnderlineThickness = i8041[16]
  i8040.m_StrikethroughOffset = i8041[17]
  i8040.m_StrikethroughThickness = i8041[18]
  i8040.m_TabWidth = i8041[19]
  return i8040
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8044 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8045 = data
  i8044.m_Index = i8045[0]
  i8044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8045[1], i8044.m_Metrics)
  i8044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8045[2], i8044.m_GlyphRect)
  i8044.m_Scale = i8045[3]
  i8044.m_AtlasIndex = i8045[4]
  return i8044
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8046 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8047 = data
  i8046.m_Width = i8047[0]
  i8046.m_Height = i8047[1]
  i8046.m_HorizontalBearingX = i8047[2]
  i8046.m_HorizontalBearingY = i8047[3]
  i8046.m_HorizontalAdvance = i8047[4]
  return i8046
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8048 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8049 = data
  i8048.m_X = i8049[0]
  i8048.m_Y = i8049[1]
  i8048.m_Width = i8049[2]
  i8048.m_Height = i8049[3]
  return i8048
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8052 = root || request.c( 'TMPro.TMP_Character' )
  var i8053 = data
  i8052.m_ElementType = i8053[0]
  i8052.m_Unicode = i8053[1]
  i8052.m_GlyphIndex = i8053[2]
  i8052.m_Scale = i8053[3]
  return i8052
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8058 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8059 = data
  i8058.Name = i8059[0]
  i8058.PointSize = i8059[1]
  i8058.Scale = i8059[2]
  i8058.CharacterCount = i8059[3]
  i8058.LineHeight = i8059[4]
  i8058.Baseline = i8059[5]
  i8058.Ascender = i8059[6]
  i8058.CapHeight = i8059[7]
  i8058.Descender = i8059[8]
  i8058.CenterLine = i8059[9]
  i8058.SuperscriptOffset = i8059[10]
  i8058.SubscriptOffset = i8059[11]
  i8058.SubSize = i8059[12]
  i8058.Underline = i8059[13]
  i8058.UnderlineThickness = i8059[14]
  i8058.strikethrough = i8059[15]
  i8058.strikethroughThickness = i8059[16]
  i8058.TabWidth = i8059[17]
  i8058.Padding = i8059[18]
  i8058.AtlasWidth = i8059[19]
  i8058.AtlasHeight = i8059[20]
  return i8058
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8062 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8063 = data
  i8062.id = i8063[0]
  i8062.x = i8063[1]
  i8062.y = i8063[2]
  i8062.width = i8063[3]
  i8062.height = i8063[4]
  i8062.xOffset = i8063[5]
  i8062.yOffset = i8063[6]
  i8062.xAdvance = i8063[7]
  i8062.scale = i8063[8]
  return i8062
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8064 = root || request.c( 'TMPro.KerningTable' )
  var i8065 = data
  var i8067 = i8065[0]
  var i8066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8067.length; i += 1) {
    i8066.add(request.d('TMPro.KerningPair', i8067[i + 0]));
  }
  i8064.kerningPairs = i8066
  return i8064
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8070 = root || request.c( 'TMPro.KerningPair' )
  var i8071 = data
  i8070.xOffset = i8071[0]
  i8070.m_FirstGlyph = i8071[1]
  i8070.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8071[2], i8070.m_FirstGlyphAdjustments)
  i8070.m_SecondGlyph = i8071[3]
  i8070.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8071[4], i8070.m_SecondGlyphAdjustments)
  i8070.m_IgnoreSpacingAdjustments = !!i8071[5]
  return i8070
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8072 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8073 = data
  var i8075 = i8073[0]
  var i8074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8075.length; i += 1) {
    i8074.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8075[i + 0]));
  }
  i8072.m_GlyphPairAdjustmentRecords = i8074
  return i8072
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8078 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8079 = data
  i8078.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8079[0], i8078.m_FirstAdjustmentRecord)
  i8078.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8079[1], i8078.m_SecondAdjustmentRecord)
  i8078.m_FeatureLookupFlags = i8079[2]
  return i8078
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8082 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8083 = data
  i8082.sourceFontFileName = i8083[0]
  i8082.sourceFontFileGUID = i8083[1]
  i8082.pointSizeSamplingMode = i8083[2]
  i8082.pointSize = i8083[3]
  i8082.padding = i8083[4]
  i8082.packingMode = i8083[5]
  i8082.atlasWidth = i8083[6]
  i8082.atlasHeight = i8083[7]
  i8082.characterSetSelectionMode = i8083[8]
  i8082.characterSequence = i8083[9]
  i8082.referencedFontAssetGUID = i8083[10]
  i8082.referencedTextAssetGUID = i8083[11]
  i8082.fontStyle = i8083[12]
  i8082.fontStyleModifier = i8083[13]
  i8082.renderMode = i8083[14]
  i8082.includeFontFeatures = !!i8083[15]
  return i8082
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8086 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8087 = data
  request.r(i8087[0], i8087[1], 0, i8086, 'regularTypeface')
  request.r(i8087[2], i8087[3], 0, i8086, 'italicTypeface')
  return i8086
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8088 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8089 = data
  i8088.useSafeMode = !!i8089[0]
  i8088.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8089[1], i8088.safeModeOptions)
  i8088.timeScale = i8089[2]
  i8088.useSmoothDeltaTime = !!i8089[3]
  i8088.maxSmoothUnscaledTime = i8089[4]
  i8088.rewindCallbackMode = i8089[5]
  i8088.showUnityEditorReport = !!i8089[6]
  i8088.logBehaviour = i8089[7]
  i8088.drawGizmos = !!i8089[8]
  i8088.defaultRecyclable = !!i8089[9]
  i8088.defaultAutoPlay = i8089[10]
  i8088.defaultUpdateType = i8089[11]
  i8088.defaultTimeScaleIndependent = !!i8089[12]
  i8088.defaultEaseType = i8089[13]
  i8088.defaultEaseOvershootOrAmplitude = i8089[14]
  i8088.defaultEasePeriod = i8089[15]
  i8088.defaultAutoKill = !!i8089[16]
  i8088.defaultLoopType = i8089[17]
  i8088.debugMode = !!i8089[18]
  i8088.debugStoreTargetId = !!i8089[19]
  i8088.showPreviewPanel = !!i8089[20]
  i8088.storeSettingsLocation = i8089[21]
  i8088.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8089[22], i8088.modules)
  i8088.createASMDEF = !!i8089[23]
  i8088.showPlayingTweens = !!i8089[24]
  i8088.showPausedTweens = !!i8089[25]
  return i8088
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8090 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8091 = data
  i8090.logBehaviour = i8091[0]
  i8090.nestedTweenFailureBehaviour = i8091[1]
  return i8090
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8093 = data
  i8092.showPanel = !!i8093[0]
  i8092.audioEnabled = !!i8093[1]
  i8092.physicsEnabled = !!i8093[2]
  i8092.physics2DEnabled = !!i8093[3]
  i8092.spriteEnabled = !!i8093[4]
  i8092.uiEnabled = !!i8093[5]
  i8092.textMeshProEnabled = !!i8093[6]
  i8092.tk2DEnabled = !!i8093[7]
  i8092.deAudioEnabled = !!i8093[8]
  i8092.deUnityExtendedEnabled = !!i8093[9]
  i8092.epoOutlineEnabled = !!i8093[10]
  return i8092
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8094 = root || request.c( 'TMPro.TMP_Settings' )
  var i8095 = data
  i8094.m_enableWordWrapping = !!i8095[0]
  i8094.m_enableKerning = !!i8095[1]
  i8094.m_enableExtraPadding = !!i8095[2]
  i8094.m_enableTintAllSprites = !!i8095[3]
  i8094.m_enableParseEscapeCharacters = !!i8095[4]
  i8094.m_EnableRaycastTarget = !!i8095[5]
  i8094.m_GetFontFeaturesAtRuntime = !!i8095[6]
  i8094.m_missingGlyphCharacter = i8095[7]
  i8094.m_warningsDisabled = !!i8095[8]
  request.r(i8095[9], i8095[10], 0, i8094, 'm_defaultFontAsset')
  i8094.m_defaultFontAssetPath = i8095[11]
  i8094.m_defaultFontSize = i8095[12]
  i8094.m_defaultAutoSizeMinRatio = i8095[13]
  i8094.m_defaultAutoSizeMaxRatio = i8095[14]
  i8094.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8095[15], i8095[16] )
  i8094.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8095[17], i8095[18] )
  i8094.m_autoSizeTextContainer = !!i8095[19]
  i8094.m_IsTextObjectScaleStatic = !!i8095[20]
  var i8097 = i8095[21]
  var i8096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8097.length; i += 2) {
  request.r(i8097[i + 0], i8097[i + 1], 1, i8096, '')
  }
  i8094.m_fallbackFontAssets = i8096
  i8094.m_matchMaterialPreset = !!i8095[22]
  request.r(i8095[23], i8095[24], 0, i8094, 'm_defaultSpriteAsset')
  i8094.m_defaultSpriteAssetPath = i8095[25]
  i8094.m_enableEmojiSupport = !!i8095[26]
  i8094.m_MissingCharacterSpriteUnicode = i8095[27]
  i8094.m_defaultColorGradientPresetsPath = i8095[28]
  request.r(i8095[29], i8095[30], 0, i8094, 'm_defaultStyleSheet')
  i8094.m_StyleSheetsResourcePath = i8095[31]
  request.r(i8095[32], i8095[33], 0, i8094, 'm_leadingCharacters')
  request.r(i8095[34], i8095[35], 0, i8094, 'm_followingCharacters')
  i8094.m_UseModernHangulLineBreakingRules = !!i8095[36]
  return i8094
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8098 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8099 = data
  var i8101 = i8099[0]
  var i8100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8101.length; i += 1) {
    i8100.add(request.d('TMPro.TMP_Style', i8101[i + 0]));
  }
  i8098.m_StyleList = i8100
  return i8098
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8104 = root || request.c( 'TMPro.TMP_Style' )
  var i8105 = data
  i8104.m_Name = i8105[0]
  i8104.m_HashCode = i8105[1]
  i8104.m_OpeningDefinition = i8105[2]
  i8104.m_ClosingDefinition = i8105[3]
  i8104.m_OpeningTagArray = i8105[4]
  i8104.m_ClosingTagArray = i8105[5]
  i8104.m_OpeningTagUnicodeArray = i8105[6]
  i8104.m_ClosingTagUnicodeArray = i8105[7]
  return i8104
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i8106 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i8107 = data
  var i8109 = i8107[0]
  var i8108 = []
  for(var i = 0; i < i8109.length; i += 1) {
    i8108.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i8109[i + 0]) );
  }
  i8106.PositionNoise = i8108
  var i8111 = i8107[1]
  var i8110 = []
  for(var i = 0; i < i8111.length; i += 1) {
    i8110.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i8111[i + 0]) );
  }
  i8106.OrientationNoise = i8110
  return i8106
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i8114 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i8115 = data
  i8114.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i8115[0], i8114.X)
  i8114.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i8115[1], i8114.Y)
  i8114.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i8115[2], i8114.Z)
  return i8114
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i8116 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i8117 = data
  i8116.Frequency = i8117[0]
  i8116.Amplitude = i8117[1]
  i8116.Constant = !!i8117[2]
  return i8116
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i8118 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i8119 = data
  var i8121 = i8119[0]
  var i8120 = []
  for(var i = 0; i < i8121.length; i += 1) {
    i8120.push( request.d('ScenarioFour.CameraFov', i8121[i + 0]) );
  }
  i8118._fovList = i8120
  return i8118
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i8124 = root || request.c( 'ScenarioFour.CameraFov' )
  var i8125 = data
  i8124._cameraType = i8125[0]
  i8124._landscape = i8125[1]
  i8124._portrait = i8125[2]
  return i8124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8127 = data
  var i8129 = i8127[0]
  var i8128 = []
  for(var i = 0; i < i8129.length; i += 1) {
    i8128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8129[i + 0]) );
  }
  i8126.files = i8128
  i8126.componentToPrefabIds = i8127[1]
  return i8126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8133 = data
  i8132.path = i8133[0]
  request.r(i8133[1], i8133[2], 0, i8132, 'unityObject')
  return i8132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8135 = data
  var i8137 = i8135[0]
  var i8136 = []
  for(var i = 0; i < i8137.length; i += 1) {
    i8136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8137[i + 0]) );
  }
  i8134.scriptsExecutionOrder = i8136
  var i8139 = i8135[1]
  var i8138 = []
  for(var i = 0; i < i8139.length; i += 1) {
    i8138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8139[i + 0]) );
  }
  i8134.sortingLayers = i8138
  var i8141 = i8135[2]
  var i8140 = []
  for(var i = 0; i < i8141.length; i += 1) {
    i8140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8141[i + 0]) );
  }
  i8134.cullingLayers = i8140
  i8134.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8135[3], i8134.timeSettings)
  i8134.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8135[4], i8134.physicsSettings)
  i8134.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8135[5], i8134.physics2DSettings)
  i8134.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8135[6], i8134.qualitySettings)
  i8134.enableRealtimeShadows = !!i8135[7]
  i8134.autoInstantiatePrefabs = !!i8135[8]
  i8134.enableAutoInstancing = !!i8135[9]
  i8134.lightmapEncodingQuality = i8135[10]
  i8134.desiredColorSpace = i8135[11]
  return i8134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8145 = data
  i8144.name = i8145[0]
  i8144.value = i8145[1]
  return i8144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8149 = data
  i8148.id = i8149[0]
  i8148.name = i8149[1]
  i8148.value = i8149[2]
  return i8148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8153 = data
  i8152.id = i8153[0]
  i8152.name = i8153[1]
  return i8152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8155 = data
  i8154.fixedDeltaTime = i8155[0]
  i8154.maximumDeltaTime = i8155[1]
  i8154.timeScale = i8155[2]
  i8154.maximumParticleTimestep = i8155[3]
  return i8154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8157 = data
  i8156.gravity = new pc.Vec3( i8157[0], i8157[1], i8157[2] )
  i8156.defaultSolverIterations = i8157[3]
  i8156.bounceThreshold = i8157[4]
  i8156.autoSyncTransforms = !!i8157[5]
  i8156.autoSimulation = !!i8157[6]
  var i8159 = i8157[7]
  var i8158 = []
  for(var i = 0; i < i8159.length; i += 1) {
    i8158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8159[i + 0]) );
  }
  i8156.collisionMatrix = i8158
  return i8156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8163 = data
  i8162.enabled = !!i8163[0]
  i8162.layerId = i8163[1]
  i8162.otherLayerId = i8163[2]
  return i8162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8165 = data
  request.r(i8165[0], i8165[1], 0, i8164, 'material')
  i8164.gravity = new pc.Vec2( i8165[2], i8165[3] )
  i8164.positionIterations = i8165[4]
  i8164.velocityIterations = i8165[5]
  i8164.velocityThreshold = i8165[6]
  i8164.maxLinearCorrection = i8165[7]
  i8164.maxAngularCorrection = i8165[8]
  i8164.maxTranslationSpeed = i8165[9]
  i8164.maxRotationSpeed = i8165[10]
  i8164.timeToSleep = i8165[11]
  i8164.linearSleepTolerance = i8165[12]
  i8164.angularSleepTolerance = i8165[13]
  i8164.defaultContactOffset = i8165[14]
  i8164.autoSimulation = !!i8165[15]
  i8164.queriesHitTriggers = !!i8165[16]
  i8164.queriesStartInColliders = !!i8165[17]
  i8164.callbacksOnDisable = !!i8165[18]
  i8164.reuseCollisionCallbacks = !!i8165[19]
  i8164.autoSyncTransforms = !!i8165[20]
  var i8167 = i8165[21]
  var i8166 = []
  for(var i = 0; i < i8167.length; i += 1) {
    i8166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8167[i + 0]) );
  }
  i8164.collisionMatrix = i8166
  return i8164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8171 = data
  i8170.enabled = !!i8171[0]
  i8170.layerId = i8171[1]
  i8170.otherLayerId = i8171[2]
  return i8170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8173 = data
  var i8175 = i8173[0]
  var i8174 = []
  for(var i = 0; i < i8175.length; i += 1) {
    i8174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8175[i + 0]) );
  }
  i8172.qualityLevels = i8174
  var i8177 = i8173[1]
  var i8176 = []
  for(var i = 0; i < i8177.length; i += 1) {
    i8176.push( i8177[i + 0] );
  }
  i8172.names = i8176
  i8172.shadows = i8173[2]
  i8172.anisotropicFiltering = i8173[3]
  i8172.antiAliasing = i8173[4]
  i8172.lodBias = i8173[5]
  i8172.shadowCascades = i8173[6]
  i8172.shadowDistance = i8173[7]
  i8172.shadowmaskMode = i8173[8]
  i8172.shadowProjection = i8173[9]
  i8172.shadowResolution = i8173[10]
  i8172.softParticles = !!i8173[11]
  i8172.softVegetation = !!i8173[12]
  i8172.activeColorSpace = i8173[13]
  i8172.desiredColorSpace = i8173[14]
  i8172.masterTextureLimit = i8173[15]
  i8172.maxQueuedFrames = i8173[16]
  i8172.particleRaycastBudget = i8173[17]
  i8172.pixelLightCount = i8173[18]
  i8172.realtimeReflectionProbes = !!i8173[19]
  i8172.shadowCascade2Split = i8173[20]
  i8172.shadowCascade4Split = new pc.Vec3( i8173[21], i8173[22], i8173[23] )
  i8172.streamingMipmapsActive = !!i8173[24]
  i8172.vSyncCount = i8173[25]
  i8172.asyncUploadBufferSize = i8173[26]
  i8172.asyncUploadTimeSlice = i8173[27]
  i8172.billboardsFaceCameraPosition = !!i8173[28]
  i8172.shadowNearPlaneOffset = i8173[29]
  i8172.streamingMipmapsMemoryBudget = i8173[30]
  i8172.maximumLODLevel = i8173[31]
  i8172.streamingMipmapsAddAllCameras = !!i8173[32]
  i8172.streamingMipmapsMaxLevelReduction = i8173[33]
  i8172.streamingMipmapsRenderersPerFrame = i8173[34]
  i8172.resolutionScalingFixedDPIFactor = i8173[35]
  i8172.streamingMipmapsMaxFileIORequests = i8173[36]
  i8172.currentQualityLevel = i8173[37]
  return i8172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8183 = data
  i8182.weight = i8183[0]
  i8182.vertices = i8183[1]
  i8182.normals = i8183[2]
  i8182.tangents = i8183[3]
  return i8182
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8184 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8185 = data
  request.r(i8185[0], i8185[1], 0, i8184, 'm_ObjectArgument')
  i8184.m_ObjectArgumentAssemblyTypeName = i8185[2]
  i8184.m_IntArgument = i8185[3]
  i8184.m_FloatArgument = i8185[4]
  i8184.m_StringArgument = i8185[5]
  i8184.m_BoolArgument = !!i8185[6]
  return i8184
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8186 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8187 = data
  i8186.xPlacement = i8187[0]
  i8186.yPlacement = i8187[1]
  i8186.xAdvance = i8187[2]
  i8186.yAdvance = i8187[3]
  return i8186
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8188 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8189 = data
  i8188.m_GlyphIndex = i8189[0]
  i8188.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8189[1], i8188.m_GlyphValueRecord)
  return i8188
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8190 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8191 = data
  i8190.m_XPlacement = i8191[0]
  i8190.m_YPlacement = i8191[1]
  i8190.m_XAdvance = i8191[2]
  i8190.m_YAdvance = i8191[3]
  return i8190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[30],"70":[10],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[10],"94":[8],"95":[96],"97":[96],"34":[38],"22":[19],"26":[19],"98":[19],"99":[19],"100":[38],"101":[45,38],"102":[8],"103":[45,38],"104":[38],"105":[8,38],"47":[38,45],"106":[38],"107":[38],"108":[38],"41":[34],"43":[45,38],"109":[38],"40":[34],"110":[38],"111":[38],"112":[38],"113":[38],"114":[38],"115":[38],"116":[38],"49":[38],"117":[38],"118":[45,38],"119":[38],"120":[38],"121":[38],"122":[38],"123":[45,38],"124":[38],"125":[51],"126":[51],"52":[51],"127":[51],"128":[10],"129":[10],"130":[10],"131":[132],"133":[10],"134":[42]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Cinemachine.CinemachineBrain","Cinemachine.CinemachineBlenderSettings","UnityEngine.AudioSource","UnityEngine.AudioClip","SoundHandler","UnityEngine.Light","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","JumpHandler","AnimationHandler","EffectHandler","UIHandler","EnemyPool","Enemy","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","UnityEngine.SkinnedMeshRenderer","Cinemachine.CinemachineTransposer","StartCamera","Cinemachine.CinemachineSmoothPath","UnityEngine.Canvas","ResolutionHandler","CameraHandler","Cinemachine.CinemachineTrackedDolly","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Stalker","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ChooseHandler","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","Cinemachine.NoiseSettings","ScenarioFour.CameraFovList","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScenarioFour.AnimatedModel","ScenarioFour.EnemyAnimatedModel","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Rendering.PostProcessing.PostProcessLayer","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "CRSEDPlayableAd(Repack)";

Deserializers.lunaInitializationTime = "09/23/2022 12:25:20";

Deserializers.lunaDaysRunning = "18.2";

Deserializers.lunaVersion = "4.0.0";

Deserializers.lunaSHA = "5046d9954fe68e1599eaaf3688d6669074172d3a";

Deserializers.creativeName = "Eric_v1";

Deserializers.lunaAppID = "13417";

Deserializers.projectId = "33295ed8-87c8-46f3-914c-5d52dbfa511a";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.6.17\ncom.unity.postprocessing: 3.2.2\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1148";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAdRepack";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "f5756ae7-bcf4-437c-a8a4-43e53ac83130";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

