System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Debug, List, Event, EventManager, _crd;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  _export({
    Event: void 0,
    EventManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      List = _unresolved_3.List;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66f85bYniFJcI/cYO2DdIqX", "EventManager", undefined);

      _export("Event", Event = class Event {
        constructor(type, callback, target) {
          this.type = void 0;
          this.callback = void 0;
          this.target = void 0;
          this.type = type;
          this.callback = callback;
          this.target = target;
        }

      });

      _export("EventManager", EventManager = class EventManager {
        static On(type, callback, target) {
          var list;

          if (!EventManager.events.has(type)) {
            list = new (_crd && List === void 0 ? (_reportPossibleCrUseOfList({
              error: Error()
            }), List) : List)();
            EventManager.events.set(type, list);
          }

          list = EventManager.events.get(type);
          list.Add(new Event(type, callback, target));
        }

        static Off(type, callback, target) {
          if (!EventManager.events.has(type)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Error(`注销事件时，未找到事件${type}`);
            return;
          }

          var list = EventManager.events.get(type);
          var event = list.Find(item => item.callback === callback && item.target === target);
          if (event != undefined) list.Remove(event);else (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Error(`注销事件时，未找到事件${type}，目标为${target}`);
        }

        static Apply(onApply, type, ...any) {
          if (!EventManager.events.has(type)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Warn(`发送事件时，未找到事件${type}`);
            return;
          }

          var list = EventManager.events.get(type); // 将事件数组写入新的临时数组，防止事件在执行时改变原本的数组

          var tempEventArray = list.items.filter(item => item != null);

          for (var event of tempEventArray) {
            event.callback.apply(event.target, any);
            if (onApply) EventManager.onCallbackApply(type, ...any);
          }
        }

        static Emit(type, ...any) {
          EventManager.Apply(false, type, ...any);
        }

        static Broadcast(type, ...any) {
          EventManager.Apply(true, type, ...any);
        }

      });

      EventManager.events = new Map();
      EventManager.onCallbackApply = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b09abe5e17db099b0fd8ce1cecb07faaac866dd.js.map