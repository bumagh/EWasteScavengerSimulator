System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Validator, Debug, Algorithm, _crd;

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidator(extras) {
    _reporterNs.report("Validator", "./Validator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  _export("Algorithm", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }, function (_unresolved_2) {
      Validator = _unresolved_2.Validator;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e383rFUbpD8qEBcQtNHH3/", "Algorithm", undefined);

      __checkObsolete__(['math']);

      _export("Algorithm", Algorithm = class Algorithm {
        /**
         * 随机获取Map的一个元素的值
         */
        static RandomItemFromMap(map) {
          var keys = Array.from(map.keys());
          var randomIndex = Math.floor(Math.random() * keys.length);
          var randomKey = keys[randomIndex];
          return [randomKey, map.get(randomKey)];
        }
        /**
         * 随机获取泛型列表的一个元素
         */


        static RandomItemFormList(list) {
          var randomIndex = Math.floor(Math.random() * list.Count);
          return list.ItemAt(randomIndex);
        }
        /**
         * 随机获取泛型数组的一个元素
         */


        static RandomItemFormArray(array) {
          var randomIndex = Math.floor(Math.random() * array.length);
          return array[randomIndex];
        }
        /**
         * 将大数字转换为“W”的形式
         */


        static FormatBigNumber(num) {
          if (num == undefined) num = 0;

          if (num > 1000) {
            num = num / 10000;
            var formattedNum = "";

            if (num > 1) {
              var numStr = num.toString();
              var dotIndex = numStr.indexOf(".");
              formattedNum = numStr.substring(0, dotIndex == -1 ? numStr.length : dotIndex) + "W";
            } else {
              formattedNum = num.toString().slice(0, 3) + "W";
            }

            return formattedNum;
          } else {
            return num.toString();
          }
        }
        /**
         * 移除字符串里的冒号和大括号，并根据分割符拆分成数组
         */


        static RemoveColonAndBracesToArray(source, separator) {
          if (separator === void 0) {
            separator = ",";
          }

          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsStringIllegal(source, "source")) return [];
          return source.replace(/[:{}"]/g, "").split(separator);
        }
        /**
         * 将字符串的每个字符拆开，并插入换行符
         */


        static ConvertToNewlines(str) {
          var result = '';

          for (var i = 0; i < str.length; i++) {
            result += str[i];

            if (i < str.length - 1) {
              result += '\n';
            }
          }

          return result;
        }
        /**
         * 随机获取数组里的元素
         */


        static GetRandomElements(array, count) {
          if (count > array.length) {
            throw new Error('Count cannot be greater than the array length.');
          }

          var result = [];
          var usedIndices = new Set();

          while (result.length < count) {
            var randomIndex = this.GetRandomNumber(array.length - 1, 0); // 检查该索引是否已经被使用过  

            if (!usedIndices.has(randomIndex)) {
              usedIndices.add(randomIndex);
              result.push(array[randomIndex]);
            }
          }

          return result;
        }

        static GetRandomNumber(max, min) {
          return Math.round(Math.random() * (min - max) + max);
        }

        static GetRandomItemByWeight(map, seed) {
          if (map.size === 0) return null;
          var totalWeight = 0;

          for (var item of map) totalWeight += item[1];

          var randomValue = math.pseudoRandomRange(seed, 0, totalWeight);
          var currentWeight = 0;
          var tempItem;

          for (var _item of map) {
            currentWeight += _item[1];
            if (randomValue <= currentWeight) return _item;
            tempItem = _item;
          }

          return tempItem;
        }
        /**
         * 移除集合中的指定元素
         */


        static RemoveItemFromArray(array, element) {
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(array, "array")) return false;
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsObjectIllegal(element, "element")) return false;
          if (array.length == 0) return false;
          var index = array.indexOf(element);

          if (index !== -1) {
            array.splice(index, 1);
            return true;
          }

          return false;
        }
        /**
         * 将Map转换成二维数组
         */


        static ConvertMapToArray(map) {
          var array = new Array();

          for (var item of map) array.push(item);

          return array;
        }
        /**
         * 洗牌算法
         */


        static Shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex; // 当还剩有元素未洗牌  

          while (0 !== currentIndex) {
            // 选取剩下的元素
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1; // 并与当前元素交换

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
        /**
         * 截断字符串
         */


        static TruncateString(target, maxLength, suffix) {
          if (maxLength === void 0) {
            maxLength = 4;
          }

          if (suffix === void 0) {
            suffix = "...";
          }

          if (target.length > maxLength) return "" + target.substring(0, maxLength) + suffix;else return target;
        }

        static JSONStrToNoKey(jsonStr) {
          var jsonObject = JSON.parse(jsonStr);
          var keys = Object.keys(jsonObject);
          var values = keys.map(key => jsonObject[key]);
          var newString = values.join(', '); // 输出 "Alice, 25, New York"

          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log(newString);
          return "[" + newString + "]";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ab8e980ffaa3fd67ee56351f202e4b586d8d847.js.map