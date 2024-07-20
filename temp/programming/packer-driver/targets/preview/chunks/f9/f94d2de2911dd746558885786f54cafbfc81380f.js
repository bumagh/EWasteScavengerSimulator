System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, List, _crd;

  _export("List", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "494e5OHO95Iw6tPLfwEkSwy", "List", undefined);

      _export("List", List = class List {
        constructor() {
          this.items = [];
        }

        /**
         * 添加元素到集合末尾
         */
        Add(item) {
          this.items.push(item);
        }
        /**
         * 移除集合中的元素
         */


        Remove(item) {
          var index = this.items.indexOf(item);

          if (index !== -1) {
            this.items.splice(index, 1);
            return true;
          }

          return false;
        }
        /**
         * 获取集合大小 
         */


        get Count() {
          return this.items.length;
        }

        AllCount(predicate) {
          var count = 0;

          for (var i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) count++;
          }

          return count;
        }
        /**
         * 根据索引获取元素
         */


        ItemAt(index) {
          return this.items[index];
        }
        /**
         * 查找符合条件的元素
         */


        Find(predicate) {
          return this.items.find(predicate);
        }
        /**
         * 查找所有符合条件的元素
         */


        FindAll(predicate) {
          return this.items.filter(predicate);
        }
        /**
         * 是否包含传入的元素
         */


        Has(item) {
          return this.Exists(i => i == item);
        }
        /**
         * 是否存在符合条件的元素
         */


        Exists(predicate) {
          for (var i = 0; i < this.items.length; i++) {
            if (predicate(this.items[i])) return true;
          }

          return false;
        }

        ForEach(callbackfn, thisArg) {
          this.items.forEach(callbackfn, thisArg);
        }
        /**
         * 清空集合
         */


        Clear() {
          this.items.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f94d2de2911dd746558885786f54cafbfc81380f.js.map