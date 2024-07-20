System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, RigidBody2D, Vec2, Vec3, NodeRef, _dec, _class, _crd, ccclass, property, Ball;

  function _reportPossibleCrUseOfNodeRef(extras) {
    _reporterNs.report("NodeRef", "../Common/NodeRef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NodeRef = _unresolved_2.NodeRef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2421eLrPXdJloM+x5Z/uz+s", "Ball", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'find', 'Label', 'Node', 'NodeSpace', 'Quat', 'RigidBody2D', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec(_class = class Ball extends (_crd && NodeRef === void 0 ? (_reportPossibleCrUseOfNodeRef({
        error: Error()
      }), NodeRef) : NodeRef) {
        constructor(...args) {
          super(...args);
          this.ballSpriteNode = void 0;
          this.rgBody = void 0;
          this.tipLabel = void 0;
          this._score = -1;
          this.angle = 0;
          // 当前角度
          this.speed = 30;
          // 当前角度
          this.radius = 2;
        }

        // 当前角度
        get score() {
          return this._score;
        }

        set score(value) {
          this._score = value;
        }

        onLoad() {
          this.ballSpriteNode = this.GetNode("Sprite");
          this.rgBody = this.GetVisual("Sprite", RigidBody2D);
          this.tipLabel = this.GetVisual("Label", Label);
        }

        start() {
          this.UpdateTipScore();
        }

        UpdateTipScore(scoreNum = 0) {
          this.score = scoreNum == 0 ? this.score + 1 : scoreNum;
          this.tipLabel.string = `1:${this.score.toString()}分`;
        }

        update(deltaTime) {
          this.updateTextPosition(); // this.angle += this.speed * deltaTime;
          // // 计算刚体的目标位置（圆周运动轨迹上的点）
          // const targetPosition = new Vec2(this.radius * Math.cos(this.angle), this.radius * Math.sin(this.angle)
          // );
          // // 计算朝向圆心的向量
          // const direction = targetPosition.subtract(new Vec2(this.ballSpriteNode.position.x, this.ballSpriteNode.position.y)).normalize();
          // // 计算冲量大小（使刚体保持圆周运动）
          // const impulseMagnitude = this.rgBody.getMass() * this.speed * this.radius;
          // // 应用冲量给刚体
          // this.rgBody.applyLinearImpulse(direction.multiplyScalar(impulseMagnitude), new Vec2(this.ballSpriteNode.position.x, this.ballSpriteNode.position.y), true);
          // find("Canvas/Camera").getComponent<Camera>(Camera).conve
        }

        BallBeat(vec3) {
          var point = new Vec2();
          this.rgBody.getLocalCenter(point); // this.rgBody.applyLinearImpulse(new Vec2(0, 10 * this.node.scale.x), point, true);

          this.rgBody.applyLinearImpulse(new Vec2(vec3.x, vec3.y), point, true);
        }

        UpdateBallScale() {
          // this.ballSpriteNode.setScale(new Vec3(this.ballSpriteNode.scale.x*1.5,));
          this.node.setScale(new Vec3(this.node.scale.x * 2, this.node.scale.y * 2, 1));
          this.rgBody.gravityScale = this.rgBody.gravityScale / 2;
        }

        UpdateBallPos() {
          this.ballSpriteNode.position = new Vec3(0, 0, 0);
        }

        updateTextPosition() {
          // 获取目标节点的世界坐标
          const pos = new Vec3(this.ballSpriteNode.position.x, this.ballSpriteNode.position.y + 30, 0); // 将目标节点的世界坐标转换为文本节点的局部坐标
          // 更新文本节点的位置

          this.tipLabel.node.setPosition(pos);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6020c23c26cc851a01efba46591fefbf50067a1d.js.map