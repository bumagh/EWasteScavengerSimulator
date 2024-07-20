System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, instantiate, Prefab, tween, Vec3, NodeRef, Ball, Outline, Algorithm, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameUICtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNodeRef(extras) {
    _reporterNs.report("NodeRef", "../Common/NodeRef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutline(extras) {
    _reporterNs.report("Outline", "./Outline", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlgorithm(extras) {
    _reporterNs.report("Algorithm", "../../../Libraries/Algorithm", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NodeRef = _unresolved_2.NodeRef;
    }, function (_unresolved_3) {
      Ball = _unresolved_3.Ball;
    }, function (_unresolved_4) {
      Outline = _unresolved_4.Outline;
    }, function (_unresolved_5) {
      Algorithm = _unresolved_5.Algorithm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "418e6V8rRBKMJKxEHue670k", "GameUICtrl", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'easing', 'instantiate', 'Node', 'Prefab', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameUICtrl", GameUICtrl = (_dec = ccclass('GameUICtrl'), _dec2 = property(Prefab), _dec(_class = (_class2 = class GameUICtrl extends (_crd && NodeRef === void 0 ? (_reportPossibleCrUseOfNodeRef({
        error: Error()
      }), NodeRef) : NodeRef) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "outlinePrefab", _descriptor, this);

          this.heroBall = void 0;
          this.centerPointNode = void 0;
          this.camera = void 0;
          this.centerPointLocalToBallPos = new Vec3();
        }

        onLoad() {
          this.heroBall = this.GetVisual("GameRoot/Ball", _crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
            error: Error()
          }), Ball) : Ball);
          this.camera = this.GetVisual("Camera", Camera);
          this.centerPointNode = this.GetNode("GameRoot/CenterPoint");
        }

        start() {
          this.centerPointLocalToBallPos = this.camera.convertToUINode(this.centerPointNode.worldPosition, this.heroBall.node);
        }

        MiniCamera(scale = 2) {
          // this.camera.orthoHeight = this.camera.orthoHeight * scale;
          tween(this.camera).to(1, {
            orthoHeight: this.camera.orthoHeight * scale
          }, {
            'easing': 'smooth'
          }).to(1, {
            orthoHeight: this.camera.orthoHeight
          }, {
            'easing': 'smooth'
          }).start();
        }

        UpdateBallPos() {
          this.heroBall.UpdateBallPos();
        }

        BallBeat() {
          const centerPos = new Vec3(this.heroBall.ballSpriteNode.position.x, this.heroBall.ballSpriteNode.position.y);
          const direction = centerPos.subtract(this.centerPointLocalToBallPos).normalize();
          this.heroBall.BallBeat(direction.multiplyScalar(10));
        }

        UpdateBallScore() {
          this.heroBall.UpdateTipScore();
        }

        UpdateBallScale() {
          this.heroBall.UpdateBallScale();
        }

        CreateOutline(scale = 1) {
          var outlineNode = instantiate(this.outlinePrefab);
          outlineNode.name = "Outline" + scale;
          this.GetNode("GameRoot").addChild(outlineNode);
          var outline = outlineNode.getComponent(_crd && Outline === void 0 ? (_reportPossibleCrUseOfOutline({
            error: Error()
          }), Outline) : Outline);
          outline.scale = scale;
          outline.SetSpriteNodeScale(scale);
          outline.SetNodeAngle();
          outline.SetOutlineSpriteRotateSpeed((_crd && Algorithm === void 0 ? (_reportPossibleCrUseOfAlgorithm({
            error: Error()
          }), Algorithm) : Algorithm).GetRandomNumber(3, 0.5)); // outline.level = Math.round(scale);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "outlinePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fd07e12dd11fd4bbf7e4cab3a78e90d2f60f041.js.map