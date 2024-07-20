System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, find, Debug, Validator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executionOrder, NodeRef;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Libraries/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidator(extras) {
    _reporterNs.report("Validator", "../../../Libraries/Validator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      Validator = _unresolved_3.Validator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b4c7GpGhNPZr2XLBLWX9rQ", "NodeRef", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'find', 'Node']);

      ({
        ccclass,
        property,
        executionOrder
      } = _decorator);

      _export("NodeRef", NodeRef = (_dec = ccclass('NodeRef'), _dec2 = executionOrder(0), _dec3 = property(CCString), _dec4 = property(CCString), _dec(_class = _dec2(_class = (_class2 = class NodeRef extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "id", _descriptor, this);

          _initializerDefineProperty(this, "type", _descriptor2, this);

          this.nodes = new Map();
          this.visuals = new Map();
          this.visualsInChildren = new Map();
        }

        onLoad() {}

        onEnable() {}

        onDisable() {}

        onDestroy() {}

        GetNode(nodePath, callback) {
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(nodePath, "nodePath")) return null;
          if (this.nodes.has(nodePath)) return this.nodes.get(nodePath);else {
            var node = find(nodePath, this.node);
            if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectIllegal(node, `node from ${nodePath}`)) return null;else {
              this.nodes.set(nodePath, node);
              if (!(_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
                error: Error()
              }), Validator) : Validator).IsObjectEmpty(callback)) callback(node);
              return node;
            }
          }
        }

        GetVisual(nodePath, type, callback) {
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(nodePath, "nodePath")) return null;
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(type, "type")) return null;
          var key = `${nodePath}/${type}`;
          var component;

          if (this.visuals.has(key)) {
            component = this.visuals.get(key);
            if (component == null) (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Error(`路径为${nodePath}的组件类型转换失败`);
            return component;
          } else {
            var node = this.GetNode(nodePath);
            if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(node)) return null;
            component = node.getComponent(type);

            if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(component)) {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).Error(`节点${node.name}上未找到组件${type}`);
              return null;
            }

            this.visuals.set(key, component);
            if (!(_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(callback)) callback(component);
            return component;
          }
        }

        GetVisualsInChildren(nodePath, type, callback) {
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(nodePath, "nodePath")) return null;
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(type, "type")) return null;
          var key = `${nodePath}/${type}`;
          var components;

          if (this.visualsInChildren.has(key)) {
            components = this.visualsInChildren.get(key);
            if (components == null) (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Error(`路径为${nodePath}的组件类型转换失败`);
            return components;
          } else {
            var node = this.GetNode(nodePath);
            if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(node)) return null;
            components = node.getComponentsInChildren(type);

            if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(components)) {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).Error(`${node.name}子节点上未找到组件${type}`);
              return null;
            }

            this.visualsInChildren.set(key, components);
            if (!(_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
              error: Error()
            }), Validator) : Validator).IsObjectEmpty(callback)) callback(components);
            return components;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6f711f5202bfe3aa079fe0025c48af1df197785.js.map