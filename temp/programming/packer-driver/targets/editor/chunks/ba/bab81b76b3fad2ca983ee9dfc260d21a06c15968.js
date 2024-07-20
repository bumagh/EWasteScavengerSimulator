System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CircleCollider2D, Collider2D, Contact2DType, RigidBody2D, tween, Vec3, NodeRef, Algorithm, Debug, _dec, _class, _crd, ccclass, property, OutlineSpriteEnums, Outline;

  function _reportPossibleCrUseOfNodeRef(extras) {
    _reporterNs.report("NodeRef", "../Common/NodeRef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlgorithm(extras) {
    _reporterNs.report("Algorithm", "../../../Libraries/Algorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Libraries/Debug", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CircleCollider2D = _cc.CircleCollider2D;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      RigidBody2D = _cc.RigidBody2D;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NodeRef = _unresolved_2.NodeRef;
    }, function (_unresolved_3) {
      Algorithm = _unresolved_3.Algorithm;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83920VMDaNHtbSGnq+75ht4", "Outline", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'CircleCollider2D', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact', 'Node', 'Quat', 'RigidBody2D', 'Tween', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OutlineSpriteEnums", OutlineSpriteEnums = /*#__PURE__*/function (OutlineSpriteEnums) {
        OutlineSpriteEnums["OutlineSpriteThreeQuaters"] = "OutlineSpriteThreeQuaters";
        OutlineSpriteEnums["OutlineSpriteFill"] = "OutlineSpriteFill";
        OutlineSpriteEnums["OutlineSpriteHalfDoor"] = "OutlineSpriteHalfDoor";
        return OutlineSpriteEnums;
      }({}));

      _export("Outline", Outline = (_dec = ccclass('Outline'), _dec(_class = class Outline extends (_crd && NodeRef === void 0 ? (_reportPossibleCrUseOfNodeRef({
        error: Error()
      }), NodeRef) : NodeRef) {
        constructor(...args) {
          super(...args);
          this.outlineSpriteNode = void 0;
          this.outlineSpriteFullNode = void 0;
          this.doorCollider = void 0;
          this.doorRgBody = void 0;
          this.outlineCollider = void 0;
          this.tweenAnim = void 0;
          this.isContact = false;
          this.rotateSpeed = 1;
          this.level = 1;
          this.scale = 1;
        }

        onLoad() {
          this.Init(OutlineSpriteEnums.OutlineSpriteThreeQuaters);
        }

        Init(outlineType) {
          this.outlineSpriteNode = this.GetNode(outlineType);
          this.outlineCollider = this.GetVisual(outlineType, Collider2D);
          this.outlineSpriteFullNode = this.GetNode(OutlineSpriteEnums.OutlineSpriteFill);

          if (outlineType != OutlineSpriteEnums.OutlineSpriteFill) {
            this.doorCollider = this.GetVisual(outlineType + "/Door", CircleCollider2D);
            this.doorRgBody = this.GetVisual(outlineType + "/Door", RigidBody2D);
            this.doorCollider.on(Contact2DType.END_CONTACT, this.OnDoorEndContact, this);
          }

          this.outlineCollider.on(Contact2DType.BEGIN_CONTACT, this.OnOutlineBeginContact, this);
        }

        ChangeType(outlineType) {
          this.doorCollider.off(Contact2DType.END_CONTACT, this.OnDoorEndContact, this);
          this.doorRgBody.enabledContactListener = false;
          this.doorCollider.enabled = false;
          this.outlineSpriteNode.active = false; // this.outlineSpriteNode.active = false;
          // this.Init(outlineType);
          // this.SetSpriteNodeScale(this.scale);
          // this.outlineSpriteNode.active = true;
        }

        onDestroy() {
          this.doorCollider.off(Contact2DType.END_CONTACT, this.OnDoorEndContact, this);
          this.outlineCollider.off(Contact2DType.END_CONTACT, this.OnOutlineBeginContact, this);
        }

        start() {
          this.StartCircleAnim(this.outlineSpriteNode);
        }

        SetSpriteNodeScale(scale) {
          this.outlineSpriteNode.setScale(new Vec3(scale, scale, 1));
        }

        SetNodeAngle() {
          this.node.angle = (_crd && Algorithm === void 0 ? (_reportPossibleCrUseOfAlgorithm({
            error: Error()
          }), Algorithm) : Algorithm).GetRandomNumber(360, 0);
        }

        SetOutlineSpriteRotateSpeed(speed = 1) {
          this.rotateSpeed = speed;
        }

        StartCircleAnim(node) {
          this.tweenAnim = tween(node).by(0.02, {
            angle: this.rotateSpeed
          }).repeatForever().start();
        }

        OnDoorEndContact(selfCollider, otherCollider, contact) {
          // Debug.Log(this.node.name);
          // Debug.Log(selfCollider.node.parent.parent.name);
          if (this.isContact == true) return;
          this.isContact = true;
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("OnDoorEndContact"); // this.tweenAnim.stop();
          // // this.SetNodeAngle();
          // EventManager.Emit("OnBallLeaveDoor", this.node, selfCollider, otherCollider, contact);

          this.scheduleOnce(() => {
            this.ChangeType(OutlineSpriteEnums.OutlineSpriteFill); // this.node.removeFromParent();
          });
        }

        OnOutlineBeginContact(selfCollider, otherCollider, contact) {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("OnOutlineBeginContact"); // if (this.isContact == true) return;
          // this.isContact = true;
          // this.tweenAnim.stop();
          // this.SetNodeAngle();
          // EventManager.Emit("OnBallLeaveDoor", this.node, selfCollider, otherCollider, contact);
          // this.scheduleOnce(() =>
          // {
          //     this.node.removeFromParent();
          // });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bab81b76b3fad2ca983ee9dfc260d21a06c15968.js.map