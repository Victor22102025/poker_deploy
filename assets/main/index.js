System.register("chunks:///_virtual/Api.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "dce3fKISkdG04hJD0Hkkfw8", "Api", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Api = exports('Api', (_dec = ccclass('Api'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Api, _Component);

        function Api() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Api.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return Api;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/array_buff.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06667dMl/BKhKhoxOpDOvtu", "array_buff", undefined);

      var Code = exports('Code', function Code() {});
      Code.LOGIN = 1;
      Code.LOGOUT = 2;
      Code.JOIN_ROOM = 3;
      Code.LEAVE_ROOM = 4;
      Code.ROOM_PLUGIN = 5;
      Code.ZONE_PLUGIN = 6;
      Code.PING = 7;
      Code.CHANGE_LANGUAGE = 8;
      var Messages;

      (function (_Messages) {
        var AbstractMessage =
        /* Code.* */
        function AbstractMessage(type) {
          this.type = void 0;
          this.zoneName = void 0;
          this.type = type;
          this.zoneName = '';
        };

        var LoginMessage = /*#__PURE__*/function (_AbstractMessage) {
          _inheritsLoose(LoginMessage, _AbstractMessage);

          function LoginMessage() {
            var _this;

            _this = _AbstractMessage.call(this, Code.LOGIN) || this;
            _this.username = void 0;
            _this.password = void 0;
            _this.username = '';
            _this.password = '';
            return _this;
          }

          return LoginMessage;
        }(AbstractMessage);

        _Messages.LoginMessage = LoginMessage;

        var LogoutMessage = /*#__PURE__*/function (_AbstractMessage2) {
          _inheritsLoose(LogoutMessage, _AbstractMessage2);

          function LogoutMessage() {
            return _AbstractMessage2.call(this, Code.LOGOUT) || this;
          }

          return LogoutMessage;
        }(AbstractMessage);

        _Messages.LogoutMessage = LogoutMessage;

        var GetRoomsMessage = /*#__PURE__*/function (_AbstractMessage3) {
          _inheritsLoose(GetRoomsMessage, _AbstractMessage3);

          function GetRoomsMessage() {
            var _this2;

            _this2 = _AbstractMessage3.call(this, Code.ZONE_PLUGIN) || this;
            _this2.pluginName = void 0;
            _this2.params = void 0;
            _this2.pluginName = '';
            _this2.params = {
              action: 'rooms'
            };
            return _this2;
          }

          return GetRoomsMessage;
        }(AbstractMessage);

        _Messages.GetRoomsMessage = GetRoomsMessage;

        var CreateRoomMessage = /*#__PURE__*/function (_AbstractMessage4) {
          _inheritsLoose(CreateRoomMessage, _AbstractMessage4);

          function CreateRoomMessage() {
            var _this3;

            _this3 = _AbstractMessage4.call(this, Code.ZONE_PLUGIN) || this;
            _this3.pluginName = void 0;
            _this3.params = void 0;
            _this3.pluginName = '';
            _this3.params = {
              action: 'create_room'
            };
            return _this3;
          }

          return CreateRoomMessage;
        }(AbstractMessage);

        _Messages.CreateRoomMessage = CreateRoomMessage;

        var JoinRoomMessage = /*#__PURE__*/function (_AbstractMessage5) {
          _inheritsLoose(JoinRoomMessage, _AbstractMessage5);
          /* 4 bytes */


          function JoinRoomMessage() {
            var _this4;

            _this4 = _AbstractMessage5.call(this, Code.JOIN_ROOM) || this;
            _this4.roomId = void 0;
            _this4.password = void 0;
            _this4.roomId = 0;
            _this4.password = '';
            return _this4;
          }

          return JoinRoomMessage;
        }(AbstractMessage);

        _Messages.JoinRoomMessage = JoinRoomMessage;

        var LeaveRoomMessage = /*#__PURE__*/function (_AbstractMessage6) {
          _inheritsLoose(LeaveRoomMessage, _AbstractMessage6);
          /* 4 bytes */


          function LeaveRoomMessage() {
            var _this5;

            _this5 = _AbstractMessage6.call(this, Code.JOIN_ROOM) || this;
            _this5.roomId = void 0;
            _this5.roomId = 0;
            return _this5;
          }

          return LeaveRoomMessage;
        }(AbstractMessage);

        _Messages.LeaveRoomMessage = LeaveRoomMessage;

        var SpinGameMessage = /*#__PURE__*/function (_AbstractMessage7) {
          _inheritsLoose(SpinGameMessage, _AbstractMessage7);
          /* 4 bytes */


          function SpinGameMessage() {
            var _this6;

            _this6 = _AbstractMessage7.call(this, Code.ROOM_PLUGIN) || this;
            _this6.roomId = void 0;
            _this6.params = void 0;
            _this6.roomId = 0;
            _this6.params = {
              action: 'spin | freespin | gamble',
              bet: 100
            };
            return _this6;
          }

          return SpinGameMessage;
        }(AbstractMessage);

        _Messages.SpinGameMessage = SpinGameMessage;

        var UpdateBalanceMessage = /*#__PURE__*/function (_AbstractMessage8) {
          _inheritsLoose(UpdateBalanceMessage, _AbstractMessage8);

          function UpdateBalanceMessage() {
            var _this7;

            _this7 = _AbstractMessage8.call(this, Code.ZONE_PLUGIN) || this;
            _this7.pluginName = void 0;
            _this7.params = void 0;
            _this7.pluginName = '';
            _this7.params = {
              action: 'update_balance',
              transaction: 'add',
              amount: 999
            };
            return _this7;
          }

          return UpdateBalanceMessage;
        }(AbstractMessage);

        _Messages.UpdateBalanceMessage = UpdateBalanceMessage;
      })(Messages || (Messages = {}));

      var Responses;

      (function (_Responses) {
        var AbstractResponse =
        /* Code.* */
        function AbstractResponse() {
          this.type = void 0;
          this.type = 0;
        };

        var LoginResponse = /*#__PURE__*/function (_AbstractResponse) {
          _inheritsLoose(LoginResponse, _AbstractResponse);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */


          function LoginResponse() {
            var _this8;

            _this8 = _AbstractResponse.call(this) || this;
            _this8.success = void 0;
            _this8.errorCode = void 0;
            _this8.username = void 0;
            _this8.zoneName = void 0;
            _this8.balance = void 0;
            _this8.message = void 0;
            _this8.success = false;
            _this8.errorCode = 0;
            _this8.username = '';
            _this8.zoneName = '';
            _this8.balance = 0;
            _this8.message = '';
            return _this8;
          }

          return LoginResponse;
        }(AbstractResponse);

        _Responses.LoginResponse = LoginResponse;

        var LogoutMessage = /*#__PURE__*/function (_AbstractResponse2) {
          _inheritsLoose(LogoutMessage, _AbstractResponse2);
          /* 1 bytes */

          /* 4 bytes */


          function LogoutMessage() {
            var _this9;

            _this9 = _AbstractResponse2.call(this) || this;
            _this9.success = void 0;
            _this9.reasonId = void 0;
            _this9.success = false;
            _this9.reasonId = 0;
            return _this9;
          }

          return LogoutMessage;
        }(AbstractResponse);

        _Responses.LogoutMessage = LogoutMessage;

        var GetRoomsResponse = /*#__PURE__*/function (_AbstractResponse3) {
          _inheritsLoose(GetRoomsResponse, _AbstractResponse3);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */


          function GetRoomsResponse() {
            var _this10;

            _this10 = _AbstractResponse3.call(this) || this;
            _this10.success = void 0;
            _this10.roomId = void 0;
            _this10.errorCode = void 0;
            _this10.action = void 0;
            _this10.zoneName = void 0;
            _this10.rooms = void 0;
            _this10.success = false;
            _this10.roomId = 0;
            _this10.errorCode = 0;
            _this10.action = '';
            _this10.zoneName = '';
            _this10.rooms = [];
            return _this10;
          }

          return GetRoomsResponse;
        }(AbstractResponse);

        _Responses.GetRoomsResponse = GetRoomsResponse;

        var CreateRoomsResponse = /*#__PURE__*/function (_AbstractResponse4) {
          _inheritsLoose(CreateRoomsResponse, _AbstractResponse4);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */

          /* 1 bytes */


          function CreateRoomsResponse() {
            var _this11;

            _this11 = _AbstractResponse4.call(this) || this;
            _this11.success = void 0;
            _this11.roomId = void 0;
            _this11.errorCode = void 0;
            _this11.action = void 0;
            _this11.roomName = void 0;
            _this11.roomHasPassword = void 0;
            _this11.roomPassword = void 0;
            _this11.success = false;
            _this11.roomId = 0;
            _this11.errorCode = 0;
            _this11.action = '';
            _this11.roomName = '';
            _this11.roomHasPassword = false;
            _this11.roomPassword = '';
            return _this11;
          }

          return CreateRoomsResponse;
        }(AbstractResponse);

        _Responses.CreateRoomsResponse = CreateRoomsResponse;

        var JoinRoomResponse = /*#__PURE__*/function (_AbstractResponse5) {
          _inheritsLoose(JoinRoomResponse, _AbstractResponse5);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */


          function JoinRoomResponse() {
            var _this12;

            _this12 = _AbstractResponse5.call(this) || this;
            _this12.success = void 0;
            _this12.errorCode = void 0;
            _this12.roomId = void 0;
            _this12.message = void 0;
            _this12.success = false;
            _this12.errorCode = 0;
            _this12.roomId = 0;
            _this12.message = '';
            return _this12;
          }

          return JoinRoomResponse;
        }(AbstractResponse);

        _Responses.JoinRoomResponse = JoinRoomResponse;

        var LeaveRoomResponse = /*#__PURE__*/function (_AbstractResponse6) {
          _inheritsLoose(LeaveRoomResponse, _AbstractResponse6);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */

          /* 4 bytes */


          function LeaveRoomResponse() {
            var _this13;

            _this13 = _AbstractResponse6.call(this) || this;
            _this13.success = void 0;
            _this13.reasonId = void 0;
            _this13.roomId = void 0;
            _this13.errorCode = void 0;
            _this13.message = void 0;
            _this13.success = false;
            _this13.reasonId = 0;
            _this13.roomId = 0;
            _this13.errorCode = 0;
            _this13.message = '';
            return _this13;
          }

          return LeaveRoomResponse;
        }(AbstractResponse);

        _Responses.LeaveRoomResponse = LeaveRoomResponse;

        var RoomResponse =
        /* 4 bytes */
        function RoomResponse() {
          this.id = void 0;
          this.name = void 0;
          this.hasPassword = void 0;
          this.password = void 0;
          this.id = 0;
          this.name = '';
          this.hasPassword = false;
          this.password = '';
        };

        _Responses.RoomResponse = RoomResponse;

        var SpinResponse = /*#__PURE__*/function (_AbstractResponse7) {
          _inheritsLoose(SpinResponse, _AbstractResponse7);
          /* 1 bytes */

          /* 4 bytes */

          /* 4 bytes */


          function SpinResponse() {
            var _this14;

            _this14 = _AbstractResponse7.call(this) || this;
            _this14.success = void 0;
            _this14.roomId = void 0;
            _this14.errorCode = void 0;
            _this14.action = void 0;
            _this14.zoneName = void 0;
            _this14.rooms = void 0;
            _this14.success = false;
            _this14.roomId = 0;
            _this14.errorCode = 0;
            _this14.action = '';
            _this14.zoneName = '';
            _this14.rooms = [];
            return _this14;
          }

          return SpinResponse;
        }(AbstractResponse);

        _Responses.SpinResponse = SpinResponse;
        var TEMPLATES = _Responses.TEMPLATES = [[1, 1, 1, 1, 1], // 0
        [0, 0, 0, 0, 0], // 1
        [2, 2, 2, 2, 2], // 2
        [0, 1, 2, 1, 0], // 3
        [2, 1, 0, 1, 2], // 4
        [2, 1, 0, 1, 0], // 5
        [0, 1, 2, 1, 2], // 6
        [2, 1, 1, 1, 2], // 7
        [1, 0, 0, 0, 1], // 8
        [0, 1, 1, 1, 0], // 9
        [2, 1, 1, 1, 2], // 10
        [0, 1, 2, 2, 1], // 11
        [2, 1, 0, 0, 1], // 12
        [1, 1, 0, 1, 1], // 13
        [1, 1, 2, 1, 1], // 14
        [0, 2, 0, 2, 0], // 15
        [0, 1, 0, 1, 0], // 16
        [1, 0, 1, 0, 1], // 17
        [1, 1, 1, 1, 1], // 18
        [0, 0, 0, 0, 0], // 19
        [0, 0, 0, 0, 0], // 20
        [1, 1, 1, 1, 1], // 21
        [0, 0, 0, 0, 0], // 22
        [2, 2, 2, 2, 2], // 23
        [0, 0, 0, 0, 0], // 24
        [2, 2, 2, 2, 2], // 25
        [2, 2, 1, 1, 0], // 26
        [0, 1, 2, 2, 2], // 27
        [0, 0, 0, 0, 0], // 28
        [0, 0, 0, 0, 0], // 29
        [0, 1, 1, 2, 2], // 30
        [2, 1, 1, 0, 0], // 31
        [0, 1, 0, 1, 0], // 32
        [2, 1, 2, 1, 2], // 33
        [0, 1, 2, 1, 0], // 34
        [2, 1, 0, 1, 2], // 35
        [1, 1, 1, 1, 1], // 36
        [1, 1, 1, 1, 1], // 37
        [1, 1, 1, 1, 1], // 38
        [1, 1, 0, 0, 1], // 39
        [0, 0, 1, 1, 0], // 40
        [0, 0, 1, 0, 0], // 41
        [2, 2, 1, 2, 2], // 42
        [0, 1, 0, 1, 0], // 43
        [1, 0, 2, 0, 1], // 44
        [2, 1, 0, 1, 2], // 45
        [0, 1, 0, 0, 1], // 46
        [1, 0, 0, 1, 0], // 47
        [1, 1, 1, 1, 1], // 48
        [0, 0, 0, 0, 0] // 49
        ];
      })(Responses || (Responses = {}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssignBlindsBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, UserManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4992bOWzxZOFKtNXsqu4mgI", "AssignBlindsBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AssignBlindsBehaviour = exports('AssignBlindsBehaviour', (_dec = ccclass('AssignBlindsBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(AssignBlindsBehaviour, _BaseBehaviour);

        function AssignBlindsBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._userManager = null;
          return _this;
        }

        var _proto = AssignBlindsBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          this._userManager = this.gameplayManager.getMiniManager(UserManager);

          this._userManager.roleAssigner.assignBlinds();

          this.endBehaviour();
        };

        return AssignBlindsBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssignDealerBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, UserManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cc94eaje4xBJpN6FucGi2ou", "AssignDealerBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AssignDealerBehaviour = exports('AssignDealerBehaviour', (_dec = ccclass('AssignDealerBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(AssignDealerBehaviour, _BaseBehaviour);

        function AssignDealerBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._userManager = null;
          return _this;
        }

        var _proto = AssignDealerBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          this._userManager = this.gameplayManager.getMiniManager(UserManager);

          this._userManager.roleAssigner.assignDealer();

          this.endBehaviour();
        };

        return AssignDealerBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AsyncUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, director, Director;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1b18iewBVEoL8Di4I0qSNF", "AsyncUtils", undefined);

      var AsyncUtils = exports('AsyncUtils', /*#__PURE__*/function () {
        function AsyncUtils() {}

        AsyncUtils.delay = function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        };

        AsyncUtils.waitForSeconds = function waitForSeconds(seconds) {
          return this.delay(seconds * 1000);
        };

        AsyncUtils.waitForNextFrame = function waitForNextFrame() {
          return new Promise(function (resolve) {
            var cb = function cb() {
              director.off(Director.EVENT_AFTER_UPDATE, cb);
              resolve();
            };

            director.once(Director.EVENT_AFTER_UPDATE, cb);
          });
        };

        AsyncUtils.waitForCondition = /*#__PURE__*/function () {
          var _waitForCondition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(condition, checkInterval, timeout) {
            var start;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (checkInterval === void 0) {
                      checkInterval = 50;
                    }

                    if (timeout === void 0) {
                      timeout = 5000;
                    }

                    start = performance.now();

                  case 3:
                    if (!(performance.now() - start < timeout)) {
                      _context.next = 10;
                      break;
                    }

                    if (!condition()) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", true);

                  case 6:
                    _context.next = 8;
                    return this.delay(checkInterval);

                  case 8:
                    _context.next = 3;
                    break;

                  case 10:
                    return _context.abrupt("return", false);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function waitForCondition(_x, _x2, _x3) {
            return _waitForCondition.apply(this, arguments);
          }

          return waitForCondition;
        }();

        AsyncUtils.waitForFrames = /*#__PURE__*/function () {
          var _waitForFrames = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(frameCount) {
            var i;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < frameCount)) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 4;
                    return this.waitForNextFrame();

                  case 4:
                    i++;
                    _context2.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function waitForFrames(_x4) {
            return _waitForFrames.apply(this, arguments);
          }

          return waitForFrames;
        }();

        AsyncUtils.withTimeout = function withTimeout(promise, timeoutMs) {
          return new Promise(function (resolve, reject) {
            var timer = setTimeout(function () {
              return reject(new Error('AsyncUtils: Timeout exceeded'));
            }, timeoutMs);
            promise.then(function (result) {
              clearTimeout(timer);
              resolve(result);
            }, function (error) {
              clearTimeout(timer);
              reject(error);
            });
          });
        };

        return AsyncUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ESound.ts', './AudioPlaying.ts', './PoolAsset.ts', './MathUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, AudioClip, AudioSource, Node, Component, ESFXId, EMusicId, AudioPlaying, EPoolType, MathUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ESFXId = module.ESFXId;
      EMusicId = module.EMusicId;
    }, function (module) {
      AudioPlaying = module.AudioPlaying;
    }, function (module) {
      EPoolType = module.EPoolType;
    }, function (module) {
      MathUtils = module.MathUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4, _dec7, _dec8, _dec9, _class7, _class8, _descriptor5, _descriptor6, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class10, _class11, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "9c139jiPKhFCKNZszX2t58i", "AudioManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SFXSound = exports('SFXSound', (_dec = ccclass('SFXSound'), _dec2 = property({
        type: Enum(ESFXId)
      }), _dec3 = property(AudioClip), _dec(_class = (_class2 = function SFXSound() {
        _initializerDefineProperty(this, "SFXId", _descriptor, this);

        _initializerDefineProperty(this, "clip", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SFXId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ESFXId.SFX_Click;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var RandomSFX = exports('RandomSFX', (_dec4 = ccclass('RandomSFX'), _dec5 = property({
        type: Enum(ESFXId)
      }), _dec6 = property([AudioClip]), _dec4(_class4 = (_class5 = function RandomSFX() {
        _initializerDefineProperty(this, "SFXId", _descriptor3, this);

        _initializerDefineProperty(this, "clips", _descriptor4, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "SFXId", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ESFXId.SFX_Click;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "clips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      var MusicSound = exports('MusicSound', (_dec7 = ccclass('MusicSound'), _dec8 = property({
        type: Enum(EMusicId)
      }), _dec9 = property(AudioClip), _dec7(_class7 = (_class8 = function MusicSound() {
        _initializerDefineProperty(this, "MusicId", _descriptor5, this);

        _initializerDefineProperty(this, "clip", _descriptor6, this);
      }, (_descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "MusicId", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EMusicId.BGM_Lobby;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "clip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class8)) || _class7));
      var SFXData = exports('SFXData', function SFXData(id, audioPlaying) {
        this.ID = void 0;
        this.AudioPlaying = void 0;
        this.ID = id;
        this.AudioPlaying = audioPlaying;
      });
      var AudioManager = exports('AudioManager', (_dec10 = ccclass('AudioManager'), _dec11 = property({
        type: AudioSource
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: [MusicSound]
      }), _dec14 = property({
        type: [SFXSound]
      }), _dec15 = property({
        type: [RandomSFX]
      }), _dec10(_class10 = (_class11 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);

        function AudioManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "musicSource", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfxParent", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "musicClips", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfxClips", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "randomSfxClips", _descriptor11, _assertThisInitialized(_this));

          _this._soundMap = new Map();
          _this._musicVolume = 1;
          _this._sfxVolume = 1;
          _this._musicMuted = false;
          _this._sfxMuted = false;
          _this._poolManager = void 0;
          return _this;
        }

        var _proto = AudioManager.prototype;

        _proto.init = function init() {
          this.setMusicVolume(this._musicVolume);
          this.setSFXVolume(this._sfxVolume);
        };

        _proto.setPool = function setPool(poolManager) {
          this._poolManager = poolManager;
        };

        _proto.setMusicVolume = function setMusicVolume(volume) {
          this._musicVolume = Math.min(Math.max(volume, 0), 1);

          if (!this._musicMuted) {
            this.musicSource.volume = this._musicVolume;
          }
        };

        _proto.setSFXVolume = function setSFXVolume(volume) {
          this._sfxVolume = Math.min(Math.max(volume, 0), 1);
        };

        _proto.muteMusic = function muteMusic(mute) {
          this.musicSource.volume = mute ? 0 : this._musicVolume;
        };

        _proto.muteSFX = function muteSFX(mute) {
          this._sfxMuted = mute;
        } //#endregion
        ;

        _proto.playMusic = function playMusic(id, loop) {
          if (loop === void 0) {
            loop = true;
          }

          var music = this.musicClips.find(function (music) {
            return music.MusicId === id;
          });

          if (music && this.musicSource) {
            this.musicSource.stop();
            this.musicSource.clip = music.clip;
            this.musicSource.loop = loop;
            this.musicSource.play();
          }
        };

        _proto.stopMusic = function stopMusic() {
          var _this$musicSource;

          (_this$musicSource = this.musicSource) == null ? void 0 : _this$musicSource.stop();
        };

        _proto.playRandomSFX = function playRandomSFX(id, isLoop) {
          var sfx = this.randomSfxClips.find(function (sfx) {
            return sfx.SFXId === id;
          });
          var randomIndex = MathUtils.randomInt(sfx.clips.length);
          var clip = sfx.clips[randomIndex];

          if (!sfx) {
            console.error('Sound not found');
            return;
          }

          this.handlePlaySFX(id, clip, isLoop);
        };

        _proto.playSFX = function playSFX(id, isLoop) {
          var sfx = this.sfxClips.find(function (sfx) {
            return sfx.SFXId === id;
          });

          if (!sfx) {
            console.error('Sound not found');
            return;
          }

          this.handlePlaySFX(id, sfx.clip, isLoop);
        };

        _proto.handlePlaySFX = function handlePlaySFX(id, clip, isLoop) {
          var _this2 = this;

          var node = this._poolManager.spawnNodeByType(EPoolType.AudioPlaying, this.sfxParent);

          var audioPlaying = node.getComponent(AudioPlaying);
          var soundID = this.addDataToMap(id, audioPlaying);
          audioPlaying.doPlay(clip, isLoop, this._sfxMuted ? 0 : this._sfxVolume, function () {
            _this2.removeDataFromMap(id, soundID);

            _this2._poolManager.despawnNode(node);
          });
        };

        _proto.stopSFX = function stopSFX(id) {
          var _this3 = this;

          if (!this._soundMap.has(id)) {
            console.warn("Sound " + id + " is not playing");
            return;
          }

          var arrSFX = this._soundMap.get(id);

          arrSFX.forEach(function (a) {
            a.AudioPlaying.doStop();

            _this3._poolManager.despawnNode(a.AudioPlaying.node);
          });

          this._soundMap["delete"](id);
        };

        _proto.addDataToMap = function addDataToMap(id, audioPlaying) {
          var randomID = Math.random();
          var sfxData = new SFXData(randomID, audioPlaying);

          var arrSFX = this._soundMap.get(id);

          if (!arrSFX) {
            arrSFX = [];

            this._soundMap.set(id, arrSFX);
          }

          arrSFX.push(sfxData);
          return randomID;
        };

        _proto.removeDataFromMap = function removeDataFromMap(id, sfxID) {
          if (!this._soundMap.has(id)) {
            console.warn('Sound is not playing');
            return;
          }

          var arrSFX = this._soundMap.get(id);

          var index = arrSFX.findIndex(function (x) {
            return x.ID === sfxID;
          });

          if (index !== -1) {
            arrSFX.splice(index, 1);

            if (arrSFX.length === 0) {
              this._soundMap["delete"](id);
            }
          } else {
            console.error("Sound Data with internal ID " + sfxID + " not found for key " + id + ".");
          }
        };

        _createClass(AudioManager, [{
          key: "getMusicVolume",
          get: //#region getters setters
          function get() {
            return this.musicSource ? this.musicSource.volume : 0;
          }
        }]);

        return AudioManager;
      }(Component), (_descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "musicSource", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class11.prototype, "sfxParent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class11.prototype, "musicClips", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class11.prototype, "sfxClips", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class11.prototype, "randomSfxClips", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class11)) || _class10));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioPlaying.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "5d4c0mi/rpNUr3m0bw79rLc", "AudioPlaying", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AudioPlaying = exports('AudioPlaying', (_dec = ccclass('AudioPlaying'), _dec2 = property({
        type: AudioSource,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioPlaying, _Component);

        function AudioPlaying() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_audioSource", _descriptor, _assertThisInitialized(_this));

          _this._onCompleted = void 0;
          return _this;
        }

        var _proto = AudioPlaying.prototype;

        _proto.onEnable = function onEnable() {
          this._audioSource.node.on(AudioSource.EventType.ENDED, this.handleCompleteAudio, this);
        };

        _proto.onDisable = function onDisable() {
          this._audioSource.node.off(AudioSource.EventType.ENDED, this.handleCompleteAudio, this);
        };

        _proto.doPlay = /*#__PURE__*/function () {
          var _doPlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(audioClip, isLoop, volume, onCompleted) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (isLoop === void 0) {
                      isLoop = false;
                    }

                    if (volume === void 0) {
                      volume = 1;
                    }

                    if (onCompleted === void 0) {
                      onCompleted = null;
                    }

                    this._audioSource.clip = audioClip;
                    this._audioSource.loop = isLoop;
                    this._audioSource.volume = volume;

                    this._audioSource.play();

                    this._onCompleted = onCompleted;

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function doPlay(_x, _x2, _x3, _x4) {
            return _doPlay.apply(this, arguments);
          }

          return doPlay;
        }();

        _proto.handleCompleteAudio = function handleCompleteAudio() {
          if (this._onCompleted) this._onCompleted();
        };

        _proto.doStop = function doStop() {
          this._onCompleted = null;

          this._audioSource.stop();
        };

        return AudioPlaying;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Component, ETweenEasing;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }, function (module) {
      ETweenEasing = module.ETweenEasing;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "5fa93WJ3epHq7Db9H0mui2F", "BaseAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseAnimation = exports('BaseAnimation', (_dec = ccclass('BaseAnimation'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: function visible() {
          return this._loop === false && this._repeat <= 0;
        }
      }), _dec4 = property({
        type: Enum(ETweenEasing),
        visible: true
      }), _dec5 = property({
        min: 0,
        visible: true
      }), _dec6 = property({
        visible: function visible() {
          return this._repeat <= 0 && !this._playWhenHover;
        }
      }), _dec7 = property({
        min: 0,
        step: 1,
        visible: function visible() {
          return this._loop === false && !this._playWhenHover;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseAnimation, _Component);

        function BaseAnimation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_playOnEnable", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playWhenHover", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_easing", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_duration", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loop", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_repeat", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BaseAnimation.prototype;

        _proto.play = function play() {};

        _proto.stop = function stop() {};

        _proto.stopAll = function stopAll() {};

        _createClass(BaseAnimation, [{
          key: "PlayOnEnable",
          get: function get() {
            return this._playOnEnable;
          }
        }, {
          key: "PlayWhenHover",
          get: function get() {
            return this._playWhenHover;
          }
        }, {
          key: "Easing",
          get: function get() {
            return this._easing;
          }
        }, {
          key: "Duration",
          get: function get() {
            return this._duration;
          }
        }, {
          key: "Loop",
          get: function get() {
            return this._loop;
          }
        }, {
          key: "Repeat",
          get: function get() {
            return this._repeat;
          }
        }]);

        return BaseAnimation;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_playOnEnable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_playWhenHover", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_easing", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ETweenEasing.Linear;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_duration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_loop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_repeat", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "eed99UCdp9JnZQL2QUgLd+X", "BaseBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseBehaviour = exports('BaseBehaviour', (_dec = ccclass('BaseBehaviour'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseBehaviour, _Component);

        function BaseBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.events = new EventTarget();
          _this.ON_END_BEHAVIOUR = 'onEndBehaviour';
          _this.gameplayManager = void 0;
          _this.phase = void 0;

          _initializerDefineProperty(_this, "_isActiveWhenStart", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isUnactiveWhenEnd", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BaseBehaviour.prototype;

        _proto.setGameplayManager = function setGameplayManager(gameManager) {
          this.gameplayManager = gameManager;
        };

        _proto.setPhase = function setPhase(phase) {
          this.phase = phase;
        };

        _proto.startBehaviour = function startBehaviour() {
          if (this._isActiveWhenStart) {
            this.node.active = true;
          } //console.log(`Behaviour ${this.node.name} started.`);

        };

        _proto.endBehaviour = function endBehaviour() {
          if (this._isUnactiveWhenEnd) {
            this.node.active = false;
          } //console.log(`Behaviour ${this.node.name} ended.`);


          this.events.emit(this.ON_END_BEHAVIOUR);
        };

        return BaseBehaviour;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isActiveWhenStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_isUnactiveWhenEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, JsonAsset, SpriteFrame, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      JsonAsset = module.JsonAsset;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "329c3XeqiFO4IA7gZJbMvL7", "BaseLoader", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseLoader = exports('BaseLoader', (_dec = ccclass('BaseLoader'), _dec2 = property({
        type: JsonAsset,
        visible: true
      }), _dec3 = property({
        type: [SpriteFrame],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseLoader, _Component);

        function BaseLoader() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "jsonAsset", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sprAsset", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        return BaseLoader;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jsonAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprAsset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePhase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './EPhases.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, EventTarget, Component, BaseBehaviour, Phases;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      Phases = module.Phases;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "d4384QVEstBFqhkM33ByuZu", "BasePhase", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BasePhase = exports('BasePhase', (_dec = ccclass('BasePhase'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        type: Enum(Phases),
        visible: true
      }), _dec5 = property({
        type: BaseBehaviour,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePhase, _Component);

        function BasePhase() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.events = new EventTarget();
          _this.ON_END_PHASE = 'onEndPhase';
          _this.gameManager = void 0;

          _initializerDefineProperty(_this, "_isActiveWhenStart", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isUnactiveWhenEnd", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_phaseType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_baseBehaviours", _descriptor4, _assertThisInitialized(_this));

          _this._currentBehaviour = null;
          _this._currentBehaviourIndex = 0;
          return _this;
        }

        var _proto = BasePhase.prototype;

        _proto.setGameplayManager = function setGameplayManager(gameManager) {
          this.gameManager = gameManager;
        };

        _proto.resetState = function resetState() {
          var _this2 = this;

          this._baseBehaviours.forEach(function (p) {
            return p.events.off(p.ON_END_BEHAVIOUR, _this2.nextBehaviour, _this2);
          });
        };

        _proto.getBehaviour = function getBehaviour(ctor) {
          var _ref;

          return (_ref = this._baseBehaviours.find(function (b) {
            return b instanceof ctor;
          })) != null ? _ref : null;
        };

        _proto.startPhase = function startPhase() {
          // check if no behaviours in array
          if (this._baseBehaviours.length === 0) {
            this.endPhase();
            return;
          } // Start first behaviour


          this._currentBehaviourIndex = 0;
          this._currentBehaviour = this._baseBehaviours[0];

          this._currentBehaviour.setGameplayManager(this.gameManager);

          this._currentBehaviour.setPhase(this);

          this._currentBehaviour.events.on(this._currentBehaviour.ON_END_BEHAVIOUR, this.nextBehaviour, this);

          this._currentBehaviour.startBehaviour();

          if (this._isActiveWhenStart) {
            this.node.active = true;
          }
        };

        _proto.endPhase = function endPhase() {
          // end phase logic
          if (this._isUnactiveWhenEnd) {
            this.node.active = false;
          }

          this.events.emit(this.ON_END_PHASE);
        };

        _proto.nextBehaviour = function nextBehaviour() {
          this._currentBehaviour.events.off(this._currentBehaviour.ON_END_BEHAVIOUR, this.nextBehaviour, this);

          if (this._currentBehaviourIndex >= this._baseBehaviours.length - 1) {
            this.endPhase();
            return;
          }

          this._currentBehaviour = this._baseBehaviours[++this._currentBehaviourIndex];

          this._currentBehaviour.events.on(this._currentBehaviour.ON_END_BEHAVIOUR, this.nextBehaviour, this);

          this._currentBehaviour.setGameplayManager(this.gameManager);

          this._currentBehaviour.setPhase(this);

          this._currentBehaviour.startBehaviour();
        };

        _proto.skipStep = function skipStep(value) {
          if (value < 0) {
            console.error("Can't Skip");
            return;
          }

          this._currentBehaviourIndex += value;
        };

        _createClass(BasePhase, [{
          key: "PhaseType",
          get: function get() {
            return this._phaseType;
          }
        }]);

        return BasePhase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isActiveWhenStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_isUnactiveWhenEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_phaseType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Phases.Setup;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_baseBehaviours", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUIInfor.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Enum, Prefab, EUIPopups;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
    }, function (module) {
      EUIPopups = module.EUIPopups;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "c7bd8+RMA9CZLMqApF16q3j", "BasePopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BasePopup = exports('BasePopup', (_dec = ccclass('BasePopup'), _dec2 = property({
        type: Enum(EUIPopups),
        visible: true
      }), _dec3 = property({
        type: [Prefab],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BasePopup() {
          _initializerDefineProperty(this, "popupType", _descriptor, this);

          _initializerDefineProperty(this, "_uiPopupPrefab", _descriptor2, this);
        }

        var _proto = BasePopup.prototype;

        _proto.getPopupType = function getPopupType() {
          return this.popupType;
        };

        _proto.getPopupPrefab = function getPopupPrefab() {
          return this._uiPopupPrefab;
        };

        return BasePopup;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EUIPopups.Popup;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiPopupPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUIInfor.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Enum, Prefab, EUIScreens;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
    }, function (module) {
      EUIScreens = module.EUIScreens;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "2fc67Qo23lFep1NofeP++ss", "BaseScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseScreen = exports('BaseScreen', (_dec = ccclass('BaseScreen'), _dec2 = property({
        type: Enum(EUIScreens),
        visible: true
      }), _dec3 = property({
        type: [Prefab],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BaseScreen() {
          _initializerDefineProperty(this, "screenType", _descriptor, this);

          _initializerDefineProperty(this, "_uiScreenPrefab", _descriptor2, this);
        }

        var _proto = BaseScreen.prototype;

        _proto.getScreenType = function getScreenType() {
          return this.screenType;
        };

        _proto.getScreenPrefab = function getScreenPrefab() {
          return this._uiScreenPrefab;
        };

        return BaseScreen;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "screenType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EUIScreens.MainMenu;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiScreenPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "73a886OUSZHeZeDJn6XX38I", "BaseUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseUI = exports('BaseUI', (_dec = ccclass('BaseUI'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUI, _Component);

        function BaseUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));

          _this.uiManager = null;
          _this.audioManager = null;
          _this.poolManager = null;
          return _this;
        }

        var _proto = BaseUI.prototype;

        _proto.setUIManager = function setUIManager(uiManager) {
          this.uiManager = uiManager;
        };

        _proto.init = function init() {
          this.audioManager = ServiceLocator.get(Define.Service.AudioManager);
          this.poolManager = ServiceLocator.get(Define.Service.PoolManager);
        };

        _proto.resetState = function resetState() {} //#region node Methods
        ;

        _proto.show = function show() {
          this.panel.active = true;
          this.onShow();
        }
        /** Called when UI is hidden */
        ;

        _proto.hide = function hide() {
          this.onHide();
          this.panel.active = false;
        }
        /** Optional override for when showing */
        ;

        _proto.onShow = function onShow() {}
        /** Optional override for when hiding */
        ;

        _proto.onHide = function onHide() {}
        /** Optional cleanup or animation finished */
        ;

        _proto.onDestroyUI = function onDestroyUI() {} //#endregion        
        ;

        _createClass(BaseUI, [{
          key: "UIManager",
          get: function get() {
            return this.uiManager;
          }
        }]);

        return BaseUI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BetBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserHUD.ts', './EUserOptions.ts', './UserOptionsPanel.ts', './UserManager.ts', './UserInforUI.ts', './TableManager.ts', './TableUI.ts', './Define.ts', './EDealer.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, BetManager, UserHUD, EUserOptions, EButtonType, UserManager, UserInforUI, TableManager, TableUI, Define, EDealerAnimType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserHUD = module.UserHUD;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      EButtonType = module.EButtonType;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      EDealerAnimType = module.EDealerAnimType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f7b02qvvlpAAJI5KdCk5xC8", "BetBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BetBehaviour = exports('BetBehaviour', (_dec = ccclass('BetBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(BetBehaviour, _BaseBehaviour);

        function BetBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._tableUI = void 0;
          _this._userInforUI = void 0;
          _this._userHUDUI = void 0;
          _this._betManager = void 0;
          _this._userManager = void 0;
          _this._turnHandler = void 0;
          _this._currentUser = void 0;
          _this._currentPanel = void 0;
          return _this;
        }

        var _proto = BetBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          this._betManager = this.gameplayManager.getMiniManager(BetManager);
          this._userManager = this.gameplayManager.getMiniManager(UserManager);
          this._turnHandler = this._userManager.turnHandler;
          this._userHUDUI = this.gameplayManager.getUI().get(UserHUD);
          this._userInforUI = this.gameplayManager.getUI().get(UserInforUI);
          this._tableUI = this.gameplayManager.getUI().get(TableUI);

          this._userHUDUI.Events.on(this._userHUDUI.ON_CHOOSING_OPTION, this.onHudOptionSend, this);

          this._betManager.Events.on(this._betManager.ON_RAISE_BET_CHANGING, this.onUpdateRaiseBet, this);

          this.onUpdateRaiseBet(this._betManager.currentRaiseBet);
          this.setupUserTurn();
        };

        _proto.endBehaviour = function endBehaviour() {
          this._userHUDUI.Events.off(this._userHUDUI.ON_CHOOSING_OPTION, this.onHudOptionSend, this);

          this._betManager.Events.off(this._betManager.ON_RAISE_BET_CHANGING, this.onUpdateRaiseBet, this);

          _BaseBehaviour.prototype.endBehaviour.call(this);
        };

        _proto.handleNextUser = function handleNextUser() {
          if (!this._turnHandler.canMoveToNextTurn()) {
            console.log("End");
            this.endBehaviour();
            return;
          }

          this.setupUserTurn();
        };

        _proto.setupUserTurn = function setupUserTurn() {
          var _this2 = this;

          this._currentUser = this._turnHandler.getUserFromQueue(); // if on cheat testing with npc
          // else if user have turn then setup turn
          // else end behaviour to move to next phase

          if (this._currentUser && this._currentUser.PokerAI != null) {
            var tableManager = this.gameplayManager.getMiniManager(TableManager);

            this._currentUser.onAIStartTurn(tableManager.getCardsOnTable(), function (type, raise) {
              return _this2.onAIOptionSend(type, raise);
            });

            this._currentPanel = this.getUserPanelByUser();

            this._currentPanel.onStartTurn();

            this._currentPanel.doCountDown(10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });
          } else if (this._currentUser) {
            var _this$_userHUDUI;

            this._currentUser.startTurn();

            this._currentPanel = this.getUserPanelByUser();

            this._currentPanel.onStartTurn();

            this._tableUI.onSetAnimDealer(EDealerAnimType.CallBet);

            this._currentPanel.doCountDown(10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });

            (_this$_userHUDUI = this._userHUDUI).setOptions.apply(_this$_userHUDUI, this.loadOptions(this._currentUser)).setRaiseRange(this._betManager.minimumBet, this._currentUser.getRaiseAvailable).show();
          } else {
            console.log("No more users in queue");
            this.endBehaviour();
          }
        };

        _proto.onHudOptionSend = function onHudOptionSend(eUserOptions, raiseValue) {
          var _this3 = this;

          var betValue = 0;

          switch (eUserOptions) {
            case EUserOptions.Fold:
              this._currentUser.fold();

              this._currentPanel.onUpdateUIWhenFold(true);

              break;

            case EUserOptions.Call:
              betValue = this._currentUser.call();

              this._betManager.bet(betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(betValue);
              break;

            case EUserOptions.Raise:
              betValue = this._currentUser.raise(raiseValue);

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(raiseValue, betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(betValue);
              break;

            case EUserOptions.AllIn:
              console.log(this._currentUser.node.name + " is all in with " + betValue);

              var value = this._currentUser.allIn();

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(value[1], value[0]);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(value[0]);
              betValue = value[0];
              break;
          }

          this._currentUser.endTurn();

          this._currentPanel.onEndTurn();

          this._currentPanel.stopCountDown();

          this._tableUI.onSetAnimDealer(EDealerAnimType.Idle);

          if (betValue > 0) this._currentPanel.spawnFloatingText(betValue);
          if (this._currentUser.IsAllIn) eUserOptions = EUserOptions.AllIn;

          this._currentPanel.showNoti(eUserOptions, eUserOptions !== EUserOptions.AllIn);

          this._tableUI.doChipEffect(betValue, this._currentPanel.node.worldPosition, this._tableUI.totalPotNode.worldPosition, Define.TimeChipMove, function () {
            _this3._tableUI.onUpdateTotalPot(_this3._betManager.totalBet);
          });

          this._userHUDUI.hide();

          this.handleNextUser();
        };

        _proto.onAIOptionSend = function onAIOptionSend(eUserOptions, raiseValue) {
          var _this4 = this;

          var betValue = 0;

          switch (eUserOptions) {
            case EUserOptions.Fold:
              this._currentUser.fold();

              this._currentPanel.onUpdateUIWhenFold(true);

              break;

            case EUserOptions.Call:
              betValue = this._currentUser.call();

              this._betManager.bet(betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(betValue);
              break;

            case EUserOptions.Raise:
              betValue = this._currentUser.raise(raiseValue);

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(raiseValue, betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(betValue);
              break;

            case EUserOptions.AllIn:
              console.log(this._currentUser.node.name + " is all in with " + betValue);

              var value = this._currentUser.allIn();

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(value[1], value[0]);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).setCurrentBet(value[0]);
              betValue = value[0];
              break;
          }

          if (betValue > 0) this._currentPanel.spawnFloatingText(betValue);

          this._currentUser.endTurn();

          this._currentPanel.onEndTurn();

          this._currentPanel.stopCountDown();

          if (this._currentUser.IsAllIn) eUserOptions = EUserOptions.AllIn;

          this._currentPanel.showNoti(eUserOptions, eUserOptions !== EUserOptions.AllIn);

          this._tableUI.doChipEffect(betValue, this._currentPanel.node.worldPosition, this._tableUI.totalPotNode.worldPosition, Define.TimeChipMove, function () {
            _this4._tableUI.onUpdateTotalPot(_this4._betManager.totalBet);
          });

          this.handleNextUser();
        };

        _proto.getMaxRaise = function getMaxRaise() {
          return Math.min(this.getMinCurrencyOfUsers(), this._betManager.maximumBet);
        };

        _proto.getMinCurrencyOfUsers = function getMinCurrencyOfUsers() {
          var userRaiseVailables = this._userManager.activeUsers.map(function (u) {
            return u.getRaiseAvailable;
          });

          userRaiseVailables = userRaiseVailables.filter(function (c) {
            return c !== 0;
          });
          var minCurrency = Math.min.apply(Math, userRaiseVailables);
          return minCurrency;
        };

        _proto.onUpdateRaiseBet = function onUpdateRaiseBet(currentRaiseBet) {
          this._userManager.activeUsers.forEach(function (u) {
            return u.setTableBet(currentRaiseBet);
          });
        };

        _proto.getUserPanelByUser = function getUserPanelByUser() {
          return this._userInforUI.getPanel(this._userManager.getIndexByUser(this._currentUser));
        };

        _proto.loadOptions = function loadOptions(user) {
          var eButtonTypes = [];

          for (var key in EButtonType) {
            eButtonTypes.push(key);
          }

          var canCall = user.hasCallOptions(this._betManager.currentRaiseBet);
          eButtonTypes = eButtonTypes.filter(function (e) {
            return canCall ? e !== EButtonType[EButtonType.Check] : e !== EButtonType[EButtonType.Call];
          });
          var canRaise = user.canRaise;

          if (!canRaise) {
            eButtonTypes = eButtonTypes.filter(function (e) {
              return e !== EButtonType[EButtonType.Raise];
            });
          }

          eButtonTypes = eButtonTypes.filter(function (e) {
            return e !== EButtonType[EButtonType.Show];
          });
          return eButtonTypes;
        };

        return BetBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameplayHandler.ts', './TableUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, EventTarget, GameplayHandler, TableUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }, function (module) {
      TableUI = module.TableUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "879118zZs9NLZsUbRudMHI9", "BetManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BetManager = exports('BetManager', (_dec = ccclass('BetManager'), _dec(_class = /*#__PURE__*/function (_GameplayHandler) {
        _inheritsLoose(BetManager, _GameplayHandler);

        function BetManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameplayHandler.call.apply(_GameplayHandler, [this].concat(args)) || this;
          _this.Events = new EventTarget();
          _this.ON_RAISE_BET_CHANGING = 'onRaiseBetChanging';
          _this._totalBet = void 0;
          _this._currentRaiseBet = 0;
          _this._minimumBet = 0;
          _this._maximumBet = 0;
          _this._winners = [];
          _this._pots = [];
          return _this;
        }

        var _proto = BetManager.prototype;

        _proto.initBet = function initBet(minimumBet, maximumBet) {
          this._minimumBet = minimumBet;
          this._maximumBet = maximumBet;
        };

        _proto.resetState = function resetState() {
          this._totalBet = 0;
          this.setRaiseBet(0);
          this.onUpdateUITableTotalPot();
          this.Events.emit(this.ON_RAISE_BET_CHANGING, this._currentRaiseBet);
        };

        _proto.bet = function bet(value) {
          this._totalBet += value; //this.onUpdateUITableTotalPot();

          console.log('Table Bet: ' + this.currentRaiseBet + (" | Total bet: " + this._totalBet));
        };

        _proto.setRaiseBet = function setRaiseBet(value) {
          this._currentRaiseBet = value;
          this.Events.emit(this.ON_RAISE_BET_CHANGING, this._currentRaiseBet);
          console.log('Table Bet: ' + this.currentRaiseBet + (" | Total bet: " + this._totalBet));
        };

        _proto.raiseBet = function raiseBet(raiseValue, valueAdded) {
          this.bet(valueAdded);
          this.setRaiseBet(this._currentRaiseBet + raiseValue);
        };

        _proto.setWinners = function setWinners(winners) {
          this._winners = winners;
        };

        _proto.winPot = function winPot() {
          //console.log('Winners getting their bets... ', this._winners.length);
          this._winners.forEach(function (element) {
            element.getWinBet();
          });

          this.resetState();
          return this._winners;
        };

        _proto.onUpdateUITableTotalPot = function onUpdateUITableTotalPot() {
          var tableUI = this.gameplayManager.getUI().get(TableUI);
          tableUI.onUpdateTotalPot(this.totalBet);
        };

        _createClass(BetManager, [{
          key: "totalBet",
          get: function get() {
            return this._totalBet;
          },
          set: function set(value) {
            this._totalBet = value;
          }
        }, {
          key: "currentRaiseBet",
          get: function get() {
            return this._currentRaiseBet;
          }
        }, {
          key: "minimumBet",
          get: function get() {
            return this._minimumBet;
          }
        }, {
          key: "maximumBet",
          get: function get() {
            return this._maximumBet;
          }
        }, {
          key: "pots",
          get: function get() {
            return this._pots;
          },
          set: function set(value) {
            this._pots = value;
          }
        }]);

        return BetManager;
      }(GameplayHandler)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BigBlind.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserRole.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, UserRole;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UserRole = module.UserRole;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e7a48kw5oRIWKG4ndKeF/b3", "BigBlind", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BigBlind = exports('BigBlind', (_dec = ccclass('BigBlind'), _dec(_class = /*#__PURE__*/function (_UserRole) {
        _inheritsLoose(BigBlind, _UserRole);

        function BigBlind() {
          return _UserRole.apply(this, arguments) || this;
        }

        return BigBlind;
      }(UserRole)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlindBetBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserManager.ts', './UserInforUI.ts', './TableUI.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseBehaviour, BetManager, UserManager, UserInforUI, TableUI, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "d7a5foEcmVKDa4SsygG1Xl9", "BlindBetBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BlindBetBehaviour = exports('BlindBetBehaviour', (_dec = ccclass('BlindBetBehaviour'), _dec2 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(BlindBetBehaviour, _BaseBehaviour);

        function BlindBetBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_isSmallBlind", _descriptor, _assertThisInitialized(_this));

          _this._userManager = void 0;
          return _this;
        }

        var _proto = BlindBetBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          this._userManager = this.gameplayManager.getMiniManager(UserManager);
          var betManager = this.gameplayManager.getMiniManager(BetManager);
          var tableUI = this.gameplayManager.getUI().get(TableUI);
          var userIndex = this._isSmallBlind ? this._userManager.smallBlindIndex : this._userManager.bigBlindIndex;
          var betValue = this._isSmallBlind ? betManager.minimumBet / 2 : betManager.minimumBet;

          var blind = this._userManager.getUser(userIndex);

          var panel = this.getUserPanelByUser(blind);
          blind.doBet(betValue);
          betManager.bet(betValue);
          panel.onUpdateChip(blind.userCurrency.currency).setCurrentBet(betValue).spawnFloatingText(betValue);
          tableUI.doChipEffect(betValue, panel.node.worldPosition, tableUI.totalPotNode.worldPosition, Define.TimeChipMove, function () {
            return tableUI.onUpdateTotalPot(betManager.totalBet);
          });
          this.endBehaviour();
        };

        _proto.getUserPanelByUser = function getUserPanelByUser(user) {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
          return uiInforUI.getPanel(this._userManager.getIndexByUser(user));
        };

        return BlindBetBehaviour;
      }(BaseBehaviour), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isSmallBlind", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Button;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae04dTf6btAZ755f+ZYzX+y", "ButtonUtils", undefined);

      var ButtonUtils = exports('ButtonUtils', /*#__PURE__*/function () {
        function ButtonUtils() {}
        /**
         * Gắn event CLICK vào button
         * @param button Button component
         * @param handler Hàm callback khi click
         * @param target Ngữ cảnh (this)
         */


        ButtonUtils.bind = function bind(button, handler, target) {
          if (!button) {
            console.warn('[ButtonExtensions] Button không hợp lệ.');
            return;
          }

          button.node.on(Button.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Gắn event CLICK chỉ chạy 1 lần
         */
        ;

        ButtonUtils.bindOnce = function bindOnce(button, handler, target) {
          if (!button) {
            console.warn('[ButtonExtensions] Button không hợp lệ.');
            return;
          }

          button.node.once(Button.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Gỡ event CLICK khỏi button
         */
        ;

        ButtonUtils.unbind = function unbind(button, handler, target) {
          if (!button) {
            console.warn('[ButtonExtensions] Button không hợp lệ.');
            return;
          }

          button.node.off(Button.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Bật/tắt trạng thái tương tác
         */
        ;

        ButtonUtils.setInteractable = function setInteractable(button, value) {
          if (!button) {
            console.warn('[ButtonExtensions] Button không hợp lệ.');
            return;
          }

          button.interactable = value;
        };

        return ButtonUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Camera, Vec3, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "395a6yR41ZA8Ztwyci5OqjM", "CameraManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraManager = exports('CameraManager', (_dec = ccclass('CameraManager'), _dec2 = property({
        type: Camera,
        visible: true
      }), _dec3 = property({
        type: Camera,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraManager, _Component);

        function CameraManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_mainCamera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiCamera", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CameraManager.prototype;

        _proto.worldToUI = function worldToUI(worldPos, targetUIParent) {
          if (!this._mainCamera || !this._uiCamera) return new Vec3();

          var screenPos = this._mainCamera.worldToScreen(worldPos);

          var uiPos = new Vec3();

          this._uiCamera.screenToWorld(screenPos, uiPos); // Chuyển sang local position của parent UI


          var uiTransform = targetUIParent.getComponent(UITransform);
          return uiTransform ? uiTransform.convertToNodeSpaceAR(uiPos) : uiPos;
        };

        _proto.uiToWorld = function uiToWorld(uiPos, sourceUIParent) {
          if (!this._mainCamera || !this._uiCamera) return new Vec3(); // Convert UI local position sang world

          var uiTransform = sourceUIParent.getComponent(UITransform);
          var worldFromUI = uiTransform ? uiTransform.convertToWorldSpaceAR(uiPos) : uiPos; // Chuyển từ UI world → world trong main camera

          var screenPos = this._uiCamera.worldToScreen(worldFromUI);

          var worldPos = new Vec3();

          this._mainCamera.screenToWorld(screenPos, worldPos);

          return worldPos;
        };

        _createClass(CameraManager, [{
          key: "mainCamera",
          get: function get() {
            return this._mainCamera;
          }
        }, {
          key: "uiCamera",
          get: function get() {
            return this._uiCamera;
          }
        }]);

        return CameraManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiCamera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Card.ts", ['cc', './CardInfor.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Rank, Suit;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Rank = module.Rank;
      Suit = module.Suit;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "80662+kpyRDipjSGJl8c7h/", "Card", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Card = exports('Card', (_dec = ccclass('Card'), _dec(_class = /*#__PURE__*/function () {
        // for test npc
        function Card(suit, rank) {
          this.suit = Suit.Spade;
          this.rank = Rank.Two;
          this.value = 0;
          if (suit) this.suit = suit;
          if (rank) this.rank = rank;
        }

        var _proto = Card.prototype;

        _proto.toString = function toString() {
          return Rank[this.rank] + " of " + this.suit;
        };

        _proto.compareTo = function compareTo(other) {
          if (this.rank !== other.rank) {
            return this.rank - other.rank;
          }

          return this.suit.localeCompare(other.suit);
        };

        _proto.equals = function equals(other) {
          return this.rank === other.rank && this.suit === other.suit;
        };

        return Card;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardAssetLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardLibrary.ts', './BaseLoader.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, CardLibrary, BaseLoader;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      CardLibrary = module.CardLibrary;
    }, function (module) {
      BaseLoader = module.BaseLoader;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f7d9f3UFS1KAa1pkKNwI0rZ", "CardAssetLoader", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardAssetLoader = exports('CardAssetLoader', (_dec = ccclass('CardAssetLoader'), _dec(_class = /*#__PURE__*/function (_BaseLoader) {
        _inheritsLoose(CardAssetLoader, _BaseLoader);

        function CardAssetLoader() {
          return _BaseLoader.apply(this, arguments) || this;
        }

        var _proto = CardAssetLoader.prototype;

        _proto.loadData = function loadData() {
          if (this.jsonAsset && this.sprAsset.length > 0) {
            CardLibrary.initialize(this.jsonAsset, this.sprAsset);
          }
        };

        return CardAssetLoader;
      }(BaseLoader)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardInfor.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        HandRank: void 0,
        Rank: void 0,
        Suit: void 0
      });

      cclegacy._RF.push({}, "22a8dcEQIRKCJUVjtHYHBo7", "CardInfor", undefined);

      var Suit;

      (function (Suit) {
        Suit["Spade"] = "spade";
        Suit["Heart"] = "heart";
        Suit["Diamond"] = "diamond";
        Suit["Club"] = "club";
      })(Suit || (Suit = exports('Suit', {})));

      var Rank;

      (function (Rank) {
        Rank[Rank["Two"] = 2] = "Two";
        Rank[Rank["Three"] = 3] = "Three";
        Rank[Rank["Four"] = 4] = "Four";
        Rank[Rank["Five"] = 5] = "Five";
        Rank[Rank["Six"] = 6] = "Six";
        Rank[Rank["Seven"] = 7] = "Seven";
        Rank[Rank["Eight"] = 8] = "Eight";
        Rank[Rank["Nine"] = 9] = "Nine";
        Rank[Rank["Ten"] = 10] = "Ten";
        Rank[Rank["Jack"] = 11] = "Jack";
        Rank[Rank["Queen"] = 12] = "Queen";
        Rank[Rank["King"] = 13] = "King";
        Rank[Rank["Ace"] = 14] = "Ace";
      })(Rank || (Rank = exports('Rank', {})));

      var HandRank;

      (function (HandRank) {
        HandRank[HandRank["HighCard"] = 1] = "HighCard";
        HandRank[HandRank["OnePair"] = 2] = "OnePair";
        HandRank[HandRank["TwoPair"] = 3] = "TwoPair";
        HandRank[HandRank["ThreeOfAKind"] = 4] = "ThreeOfAKind";
        HandRank[HandRank["Straight"] = 5] = "Straight";
        HandRank[HandRank["Flush"] = 6] = "Flush";
        HandRank[HandRank["FullHouse"] = 7] = "FullHouse";
        HandRank[HandRank["FourOfAKind"] = 8] = "FourOfAKind";
        HandRank[HandRank["StraightFlush"] = 9] = "StraightFlush";
        HandRank[HandRank["RoyalFlush"] = 10] = "RoyalFlush";
      })(HandRank || (HandRank = exports('HandRank', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonUtils.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy, JsonUtils;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JsonUtils = module.JsonUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b27aZMPkhH+ZA7E7aeYYL4", "CardLibrary", undefined);

      var CardLibrary = exports('CardLibrary', /*#__PURE__*/function () {
        function CardLibrary() {}

        CardLibrary.initialize = function initialize(jsonAsset, sprites) {
          var _JsonUtils$parse,
              _this = this;

          if (!jsonAsset) {
            console.warn("\u26A0\uFE0F [" + this.name + "] Missing JSON asset");
            return;
          }

          this._cardDataList = (_JsonUtils$parse = JsonUtils.parse(JSON.stringify(jsonAsset.json))) != null ? _JsonUtils$parse : [];

          this._cardSpriteMap.clear();

          var _loop = function _loop() {
            var card = _step.value;
            var sprite = sprites.find(function (s) {
              return s.name === card.cardSpriteName;
            });

            if (!sprite) {
              console.warn("\u26A0\uFE0F [" + _this.name + "] Missing sprite for: " + card.cardSpriteName);
              return "continue";
            }

            var key = _this.makeKey(card.suit, card.rank);

            _this._cardSpriteMap.set(key, sprite);
          };

          for (var _iterator = _createForOfIteratorHelperLoose(this._cardDataList), _step; !(_step = _iterator()).done;) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          console.log("\u2705 [" + this.name + "] Loaded " + this._cardSpriteMap.size + " sprites");
        };

        CardLibrary.getSprite = function getSprite(suit, rank) {
          var _this$_cardSpriteMap$;

          var key = this.makeKey(suit, rank);
          return (_this$_cardSpriteMap$ = this._cardSpriteMap.get(key)) != null ? _this$_cardSpriteMap$ : null;
        };

        CardLibrary.getAllBySuit = function getAllBySuit(suit) {
          return this._cardDataList.filter(function (card) {
            return card.suit === suit;
          });
        };

        CardLibrary.makeKey = function makeKey(suit, rank) {
          return (suit + "_" + rank).toLowerCase();
        };

        CardLibrary.clear = function clear() {
          this._cardDataList = [];

          this._cardSpriteMap.clear();
        };

        return CardLibrary;
      }());
      CardLibrary._cardDataList = [];
      CardLibrary._cardSpriteMap = new Map();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardPrefab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardInfor.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component, Suit, Rank;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Suit = module.Suit;
      Rank = module.Rank;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "6facdmRKtxJQKO13YJNVKgH", "CardPrefab", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardPrefab = exports('CardPrefab', (_dec = ccclass('CardPrefab'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardPrefab, _Component);

        function CardPrefab() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "listCardFaces", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "listCardBacks", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cardImg", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CardPrefab.prototype;

        _proto.start = function start() {
          this.onSetCardFace(Suit.Diamond, Rank.Ace);
        };

        _proto.onInitCardBack = function onInitCardBack() {
          // Initialize card if needed
          if (this.listCardBacks.length <= 0) return;
          this.cardImg.spriteFrame = this.listCardBacks[0];
        };

        _proto.onSetCardFace = function onSetCardFace(suit, rank) {
          if (this.listCardFaces.length === 0) return;
          var cardName = suit.toString() + "s_" + (rank < 10 ? '0' : '') + rank.toString();
          var foundSprite = this.listCardFaces.find(function (sprite) {
            return sprite.name === cardName;
          });

          if (foundSprite) {
            this.cardImg.spriteFrame = foundSprite;
          } else {
            console.warn("Card sprite not found for: " + cardName);
          }
        };

        return CardPrefab;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listCardFaces", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listCardBacks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardLibrary.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Node, tween, v3, Vec3, Component, CardLibrary, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CardLibrary = module.CardLibrary;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      exports('ECardEffect', void 0);

      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "a2a27hiwxVJ34eBMWyFCGPA", "CardView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ECardEffect;

      (function (ECardEffect) {
        ECardEffect[ECardEffect["None"] = 0] = "None";
        ECardEffect[ECardEffect["Dim"] = 1] = "Dim";
        ECardEffect[ECardEffect["Glow"] = 2] = "Glow";
      })(ECardEffect || (ECardEffect = exports('ECardEffect', {})));

      var CardView = exports('CardView', (_dec = ccclass('CardView'), _dec2 = property({
        type: Sprite,
        visible: true
      }), _dec3 = property({
        type: Sprite,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec5 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardView, _Component);

        function CardView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_modelCard", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_modelBack", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_dim", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_glow", _descriptor4, _assertThisInitialized(_this));

          _this._suit = null;
          _this._rank = null;
          return _this;
        }

        var _proto = CardView.prototype;

        _proto.resetState = function resetState() {
          this.node.active = false;
          this.setEffect(ECardEffect.None);
        };

        _proto.loadCard = function loadCard(suit, rank) {
          this._suit = suit;
          this._rank = rank;
          this._modelCard.spriteFrame = CardLibrary.getSprite(suit, rank); //this.doFlip(true);
        };

        _proto.hideEffects = function hideEffects() {
          this._dim.active = false;
        };

        _proto.doFlip = function doFlip(isFront) {
          var _this2 = this;

          this.setActiveModel(!isFront);
          this.setupPreFlip();
          tween(this._modelCard.node).to(Define.TimeFlip, {
            eulerAngles: v3(0, -90, 0)
          }).call(function () {
            return _this2.setActiveModel(isFront);
          }).to(Define.TimeFlip, {
            eulerAngles: v3(0, 0, 0)
          }).start();
          tween(this._modelBack.node).to(Define.TimeFlip, {
            eulerAngles: v3(0, -90, 0)
          }).to(Define.TimeFlip, {
            eulerAngles: v3(0, 0, 0)
          }).start();
        };

        _proto.checkCardEffect = function checkCardEffect(cards) {
          var isWinningCard = false;

          for (var _iterator = _createForOfIteratorHelperLoose(cards), _step; !(_step = _iterator()).done;) {
            var c = _step.value;

            if (c.rank === this._rank && c.suit === this._suit) {
              isWinningCard = true;
              break;
            }
          }

          this.setEffect(isWinningCard ? ECardEffect.Glow : ECardEffect.Dim);
        };

        _proto.setupPreFlip = function setupPreFlip() {
          this._modelCard.node.setRotationFromEuler(Vec3.ZERO);

          this._modelBack.node.setRotationFromEuler(Vec3.ZERO);
        };

        _proto.setActiveModel = function setActiveModel(isFront) {
          this._modelCard.node.active = isFront;
          this._modelBack.node.active = !isFront;
        };

        _proto.setEffect = function setEffect(cardEffect) {
          switch (cardEffect) {
            case ECardEffect.None:
              this._dim.active = false;
              this._glow.active = false;
              break;

            case ECardEffect.Dim:
              this._dim.active = true;
              this._glow.active = false;
              break;

            case ECardEffect.Glow:
              this._dim.active = false;
              this._glow.active = true;
              break;

            default:
              this._dim.active = false;
              this._glow.active = false;
              break;
          }
        };

        return CardView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_modelCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_modelBack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_dim", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_glow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckFoldBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserManager.ts', './BetManager.ts', './PhaseManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, BaseBehaviour, UserManager, BetManager, PhaseManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      PhaseManager = module.PhaseManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "db1b6IYWTFN37nvSfn940kD", "CheckFoldBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheckFoldBehaviour = exports('CheckFoldBehaviour', (_dec = ccclass('CheckFoldBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(CheckFoldBehaviour, _BaseBehaviour);

        function CheckFoldBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = CheckFoldBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var userManager = this.gameplayManager.getMiniManager(UserManager);
          var betManager = this.gameplayManager.getMiniManager(BetManager);

          if (userManager.countInHandUser() === 1) {
            var remains = this.getUserRemain(userManager); // only 1 call

            var winner = remains[0];
            winner.TotalEarn += betManager.totalBet;
            betManager.setWinners(remains);
            var phaseManager = this.gameplayManager.getMiniManager(PhaseManager);
            phaseManager.endGameImmediately();
          } else {
            this.endBehaviour();
          }
        };

        _proto.getUserRemain = function getUserRemain(userManager) {
          for (var _iterator = _createForOfIteratorHelperLoose(userManager.activeUsers), _step; !(_step = _iterator()).done;) {
            var user = _step.value;

            if (!user.IsFold) {
              return [user]; // return array with a single winner
            }
          }

          return [];
        };

        return CheckFoldBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckHandRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardInfor.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy, _decorator, HandRank, Rank;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      HandRank = module.HandRank;
      Rank = module.Rank;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "bccc7wR2S1FOIGw6zoYHPrK", "CheckHandRank", undefined);

      var ccclass = _decorator.ccclass;
      var CheckHandRank = exports('CheckHandRank', (_dec = ccclass('CheckHandRank'), _dec(_class = /*#__PURE__*/function () {
        function CheckHandRank() {}

        CheckHandRank.checkHandRank = function checkHandRank(userHand, tableHand) {
          var allCards = [].concat(userHand, tableHand);
          var combinations = this.getCombinations(allCards, 5);
          var bestHand = {
            rank: HandRank.HighCard,
            tiebreaker: []
          };
          var bestCombination = [];

          for (var _iterator = _createForOfIteratorHelperLoose(combinations), _step; !(_step = _iterator()).done;) {
            var combination = _step.value;
            var hand = this.evaluateHand(combination);

            if (hand.rank > bestHand.rank || hand.rank === bestHand.rank && this.compareTiebreakers(hand.tiebreaker, bestHand.tiebreaker) > 0) {
              bestHand = hand;
              bestCombination = combination;
            }
          }

          return [bestHand, bestCombination];
        };

        CheckHandRank.getCombinations = function getCombinations(cards, size) {
          if (size > cards.length) return [];
          if (size === 0) return [[]];
          var combinations = [];

          for (var i = 0; i < cards.length; i++) {
            var remainingCards = cards.slice(i + 1);
            var smallerCombinations = this.getCombinations(remainingCards, size - 1);

            for (var _iterator2 = _createForOfIteratorHelperLoose(smallerCombinations), _step2; !(_step2 = _iterator2()).done;) {
              var smallerCombination = _step2.value;
              combinations.push([cards[i]].concat(smallerCombination));
            }
          }

          return combinations;
        };

        CheckHandRank.evaluateHand = function evaluateHand(hand) {
          // Sort the hand by rank (descending)
          var sortedHand = hand.sort(function (a, b) {
            return b.rank - a.rank;
          }); // Helper functions

          var isFlush = function isFlush() {
            return hand.every(function (card) {
              return card.suit === hand[0].suit;
            });
          };

          var isStraight = function isStraight() {
            var ranks = sortedHand.map(function (card) {
              return card.rank;
            });
            var isLowStraight = ranks.toString() === [Rank.Five, Rank.Four, Rank.Three, Rank.Two, Rank.Ace].toString();
            if (isLowStraight) return true;

            for (var i = 1; i < sortedHand.length; i++) {
              if (sortedHand[i - 1].rank !== sortedHand[i].rank + 1) {
                return false;
              }
            }

            return true;
          };

          var getRankCounts = function getRankCounts() {
            var rankCounts = new Map();

            for (var _iterator3 = _createForOfIteratorHelperLoose(hand), _step3; !(_step3 = _iterator3()).done;) {
              var card = _step3.value;
              rankCounts.set(card.rank, (rankCounts.get(card.rank) || 0) + 1);
            }

            return rankCounts;
          }; // Check for Royal Flush


          if (isFlush() && isStraight() && sortedHand[0].rank === Rank.Ace) {
            return {
              rank: HandRank.RoyalFlush,
              tiebreaker: sortedHand.map(function (card) {
                return card.rank;
              })
            };
          } // Check for Straight Flush


          if (isFlush() && isStraight()) {
            return {
              rank: HandRank.StraightFlush,
              tiebreaker: sortedHand.map(function (card) {
                return card.rank;
              })
            };
          } // Count ranks


          var rankCounts = getRankCounts();
          var counts = Array.from(rankCounts.entries()).sort(function (a, b) {
            return b[1] - a[1] || b[0] - a[0];
          }); // Check for Four of a Kind

          if (counts[0][1] === 4) {
            return {
              rank: HandRank.FourOfAKind,
              tiebreaker: [counts[0][0], counts[1][0]]
            };
          } // Check for Full House


          if (counts[0][1] === 3 && counts[1][1] === 2) {
            return {
              rank: HandRank.FullHouse,
              tiebreaker: [counts[0][0], counts[1][0]]
            };
          } // Check for Flush


          if (isFlush()) {
            return {
              rank: HandRank.Flush,
              tiebreaker: sortedHand.map(function (card) {
                return card.rank;
              })
            };
          } // Check for Straight


          if (isStraight()) {
            return {
              rank: HandRank.Straight,
              tiebreaker: sortedHand.map(function (card) {
                return card.rank;
              })
            };
          } // Check for Three of a Kind


          if (counts[0][1] === 3) {
            return {
              rank: HandRank.ThreeOfAKind,
              tiebreaker: [counts[0][0]].concat(counts.slice(1).map(function (c) {
                return c[0];
              }))
            };
          } // Check for Two Pair


          if (counts[0][1] === 2 && counts[1][1] === 2) {
            return {
              rank: HandRank.TwoPair,
              tiebreaker: [counts[0][0], counts[1][0], counts[2][0]]
            };
          } // Check for One Pair


          if (counts[0][1] === 2) {
            return {
              rank: HandRank.OnePair,
              tiebreaker: [counts[0][0]].concat(counts.slice(1).map(function (c) {
                return c[0];
              }))
            };
          } // Default to High Card


          return {
            rank: HandRank.HighCard,
            tiebreaker: sortedHand.map(function (card) {
              return card.rank;
            })
          };
        };

        CheckHandRank.compareTiebreakers = function compareTiebreakers(t1, t2) {
          for (var i = 0; i < Math.min(t1.length, t2.length); i++) {
            if (t1[i] > t2[i]) return 1;
            if (t1[i] < t2[i]) return -1;
          }

          return 0;
        };

        CheckHandRank.evaluateHandStrength = function evaluateHandStrength(hand, tableHand) {
          var allCards = [].concat(hand, tableHand);
          if (allCards.length === 0) return 0;
          var score = 0;
          var values = allCards.map(function (c) {
            return c.value;
          }).sort(function (a, b) {
            return a - b;
          });
          var suits = allCards.map(function (c) {
            return c.suit;
          }); // 1. Hole Card Strength (Base)

          var holeHigh = Math.max(hand[0].value, hand[1].value);
          score += holeHigh; // 2. Pocket Pairs (In hand)

          if (hand[0].value === hand[1].value) {
            score += 20;
            if (hand[0].value > 10) score += 15; // Bonus for JJ+
          } // 3. Board Texture (Pairs, Sets, Quads)


          var valueCounts = {};

          for (var _iterator4 = _createForOfIteratorHelperLoose(values), _step4; !(_step4 = _iterator4()).done;) {
            var v = _step4.value;
            valueCounts[v] = (valueCounts[v] || 0) + 1;
          } // FIX: Use for...in loop instead of Object.values(valueCounts)


          for (var key in valueCounts) {
            var count = valueCounts[key];
            if (count === 2) score += 15; // Pair

            if (count === 3) score += 35; // Trips

            if (count === 4) score += 80; // Quads
          } // 4. Flush Potential


          var suitCounts = {};

          for (var _iterator5 = _createForOfIteratorHelperLoose(suits), _step5; !(_step5 = _iterator5()).done;) {
            var s = _step5.value;
            suitCounts[s] = (suitCounts[s] || 0) + 1;
          } // FIX: Use manual check instead of Object.values(suitCounts).some(...)


          var maxSuitCount = 0;

          for (var _key in suitCounts) {
            if (suitCounts[_key] > maxSuitCount) {
              maxSuitCount = suitCounts[_key];
            }
          }

          if (maxSuitCount >= 5) score += 60; // Flush Made
          else if (maxSuitCount === 4) score += 10; // Flush Draw
          // 5. Straight Potential (Simplified for heuristic)
          // Checks for 5 unique sequential cards

          var uniqueValues = Array.from(new Set(values)); // Remove duplicates

          var consecutive = 0;

          for (var i = 0; i < uniqueValues.length - 1; i++) {
            if (uniqueValues[i + 1] === uniqueValues[i] + 1) {
              consecutive++;
            } else {
              consecutive = 0;
            }

            if (consecutive >= 4) {
              // 4 steps = 5 cards
              score += 50;
              break;
            }
          }

          return score;
        };

        CheckHandRank.sortCards = function sortCards(cards) {
          return [].concat(cards).sort(function (a, b) {
            // 1. Primary sort: Rank (Ascending: Low -> High)
            // Example: 2, 3, 4 ... King, Ace
            if (a.rank !== b.rank) {
              return a.rank - b.rank;
            } // 2. Secondary sort: Suit (Ascending: A -> Z)
            // Example: Club -> Diamond -> Heart -> Spade


            return a.suit.localeCompare(b.suit);
          });
        };

        return CheckHandRank;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckHandRankBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './CardInfor.ts', './TableManager.ts', './CheckHandRank.ts', './BetManager.ts', './UserInforUI.ts', './UserManager.ts', './TableUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, HandRank, TableManager, CheckHandRank, BetManager, UserInforUI, UserManager, TableUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      HandRank = module.HandRank;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      TableUI = module.TableUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6557bOb7xlEWIznTX5CEzh8", "CheckHandRankBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheckHandRankBehaviour = exports('CheckHandRankBehaviour', (_dec = ccclass('CheckHandRankBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(CheckHandRankBehaviour, _BaseBehaviour);

        function CheckHandRankBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._tableUI = void 0;
          _this._userManager = void 0;
          _this._userInforUI = void 0;
          _this._uniqueWinners = new Set();
          _this._userHandMap = new Map();
          return _this;
        }

        var _proto = CheckHandRankBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var betManager, pots, allWinnersArray, losers;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseBehaviour.prototype.startBehaviour.call(this);

                    this._userManager = this.gameplayManager.getMiniManager(UserManager);
                    betManager = this.gameplayManager.getMiniManager(BetManager);
                    this._userInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    this._tableUI = this.gameplayManager.getUI().get(TableUI); // 1. Clear previous data

                    this._uniqueWinners.clear();

                    this._userHandMap.clear(); // 2. Calculate winners for EACH pot


                    pots = betManager.pots;
                    pots.forEach(function (element) {
                      _this2.onCheckWinner(element.Users, element.PotAmount);
                    }); // 3. Convert Set to Array for BetManager
                    // This ensures the array passed to BetManager has NO duplicates

                    allWinnersArray = Array.from(this._uniqueWinners);
                    betManager.setWinners(allWinnersArray); // 4. Set visual effects

                    this._userHandMap.forEach(function (cards, user) {
                      _this2.setUserCardEffectForWinner(user, cards);

                      _this2.setTableEffect(cards);
                    }); // 5. Handle Losers
                    // A loser is anyone active who is NOT in the winners map


                    losers = this._userManager.activeUsers.filter(function (u) {
                      return !_this2._userHandMap.has(u) && !u.IsFold;
                    });
                    this.setUserCardEffectForLosers(losers);
                    this.setUserEffectForLoser(losers);
                    this.endBehaviour();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startBehaviour() {
            return _startBehaviour.apply(this, arguments);
          }

          return startBehaviour;
        }();

        _proto.onCheckWinner = function onCheckWinner(users, potAmount) {
          var _this3 = this; // 1. Safety Check: Ensure managers exist


          var tableManager = this.gameplayManager.getMiniManager(TableManager);
          if (!tableManager) return;
          var bestHand = {
            rank: HandRank.HighCard,
            tiebreaker: []
          };
          var currentPotWinners = new Map();

          for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
            var user = _step.value;
            if (!user || user.IsFold) continue; // Added !user safety check

            var _CheckHandRank$checkH = CheckHandRank.checkHandRank(user.cards, tableManager.getCardsOnTable()),
                userHand = _CheckHandRank$checkH[0],
                combination = _CheckHandRank$checkH[1];

            if (userHand.rank > bestHand.rank || userHand.rank === bestHand.rank && CheckHandRank.compareTiebreakers(userHand.tiebreaker, bestHand.tiebreaker) > 0) {
              bestHand = userHand;
              currentPotWinners.clear();
              currentPotWinners.set(user, combination);
            } else if (userHand.rank === bestHand.rank && CheckHandRank.compareTiebreakers(userHand.tiebreaker, bestHand.tiebreaker) === 0) {
              currentPotWinners.set(user, combination);
            }
          } // 2. Use Array.from instead of [...spread] for mobile stability


          var winnersInThisPot = Array.from(currentPotWinners.keys());

          if (winnersInThisPot.length === 0) {
            console.warn('No valid winners found for this pot.');
            return;
          }

          var share = potAmount / winnersInThisPot.length;
          winnersInThisPot.forEach(function (winner) {
            winner.TotalEarn += share;
            console.log(winner.name + " wins " + share.toFixed(2) + " chips"); // Update global set

            _this3._uniqueWinners.add(winner); // Update global map (Get value safely)


            var winningCards = currentPotWinners.get(winner);

            if (winningCards) {
              _this3._userHandMap.set(winner, winningCards);
            }
          }); // 3. Safe Logging for Builds
          // If HandRank is a 'const enum', accessing HandRank[index] will crash the build.
          // We add a fallback string to prevent the crash.

          var rankName = HandRank[bestHand.rank] || "Rank " + bestHand.rank;

          if (winnersInThisPot.length === 1) {
            console.log("Winner: " + winnersInThisPot[0].name + " | Hand: " + rankName);
          } else {
            // Safer map for logging
            var names = winnersInThisPot.map(function (w) {
              return w.name;
            }).join(', ');
            console.log("Tie among: " + names);
          }
        } // ... existing effect methods ...
        ;

        _proto.setUserCardEffectForWinner = function setUserCardEffectForWinner(user, cards) {
          var index = this._userManager.getIndexByUser(user);

          var panel = this._userInforUI.getPanel(index);

          panel.setCardEffectForWinner(cards);
        };

        _proto.setUserCardEffectForLosers = function setUserCardEffectForLosers(users) {
          var _this4 = this;

          users.forEach(function (user) {
            var index = _this4._userManager.getIndexByUser(user);

            var panel = _this4._userInforUI.getPanel(index);

            panel.setCardEffectForLoser();
          });
        };

        _proto.setUserEffectForLoser = function setUserEffectForLoser(users) {
          var _this5 = this;

          users.forEach(function (user) {
            var index = _this5._userManager.getIndexByUser(user);

            var panel = _this5._userInforUI.getPanel(index);

            panel.setEffectForLoser(true);
          });
        };

        _proto.setTableEffect = function setTableEffect(cards) {
          this._tableUI.setCardEffect(cards);
        };

        return CheckHandRankBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckPotBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './Pot.ts', './BetManager.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, BaseBehaviour, Pot, BetManager, UserManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      Pot = module.Pot;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "91dd9+HFJJEkZx7ORw3e2E8", "CheckPotBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheckPotBehaviour = exports('CheckPotBehaviour', (_dec = ccclass('CheckPotBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(CheckPotBehaviour, _BaseBehaviour);

        function CheckPotBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._userManager = void 0;
          _this._betManager = void 0;
          _this._sidePots = [];
          _this.potAmount = 0;
          return _this;
        }

        var _proto = CheckPotBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          this._userManager = this.gameplayManager.getMiniManager(UserManager);
          this._betManager = this.gameplayManager.getMiniManager(BetManager);

          var hasUserAllIn = this._userManager.haveUserAllIn();

          if (hasUserAllIn) {
            this._sidePots = []; // Reset side pots for new calculation

            this.potAmount = 0;
            this.calculatePot(this._userManager.activeUsers, this._betManager.totalBet);
            this._betManager.pots = this._sidePots;
          } else {
            // No all-ins, single pot
            var totalBet = this._betManager.totalBet;
            var allActiveUsers = this._userManager.activeUsers;
            var mainPot = new Pot(totalBet, allActiveUsers);
            this._betManager.pots = [mainPot];
            this.potAmount = totalBet;
          }

          this.endBehaviour();
        };

        _proto.calculatePot = function calculatePot(contributingUsers, currentTotalBet) {
          var _this2 = this; // 1. Collect all active bets


          var usersInPot = contributingUsers.map(function (user) {
            return {
              user: user,
              bet: user.CurrentBet
            };
          }).filter(function (u) {
            return u.bet > 0;
          });
          if (usersInPot.length < 2) return; // Sort by bet size ascending (helps detect smallest all-in)

          usersInPot.sort(function (a, b) {
            return a.bet - b.bet;
          });
          this._sidePots = []; // Reset existing pots
          // 2. Calculate pots

          var _loop = function _loop() {
            // Smallest remaining bet
            var smallestBet = usersInPot[0].bet;
            if (smallestBet <= 0) return "break"; // Players still in this level

            var contributors = usersInPot.filter(function (u) {
              return u.bet >= smallestBet;
            }); // Pot amount = smallestBet * number of contributors

            var potAmount = smallestBet * contributors.length; // Create new pot

            var newPot = new Pot(potAmount, contributors.map(function (c) {
              return c.user;
            }));

            _this2._sidePots.push(newPot); // Deduct this amount from each user's bet


            for (var _iterator = _createForOfIteratorHelperLoose(usersInPot), _step; !(_step = _iterator()).done;) {
              var u = _step.value;
              u.bet -= smallestBet;
            } // Remove users who have no chips left in the betting round


            usersInPot = usersInPot.filter(function (u) {
              return u.bet > 0;
            });
          };

          while (usersInPot.length > 0) {
            var _ret = _loop();

            if (_ret === "break") break;
          } // 3. Total = sum of all side pots


          this.potAmount = this._sidePots.reduce(function (sum, p) {
            return sum + p.PotAmount;
          }, 0); // 4. Debug print

          console.log("Pot summary:\n        Total Pot: " + this.potAmount + "\n        " + this._sidePots.map(function (pot, i) {
            return (i === 0 ? 'Main Pot' : "Side Pot " + i) + ": Amount=" + pot.PotAmount + ", Users=[" + pot.Users.map(function (u) {
              return u.name;
            }).join(', ') + "]";
          }).join('\n') + "\n        ");
        };

        return CheckPotBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckUserAllInBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConditionBehaviour.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ConditionBehaviour, UserManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ConditionBehaviour = module.ConditionBehaviour;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f14ecy3/StD9ZQUesJZXgX2", "CheckUserAllInBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheckUserAllInBehaviour = exports('CheckUserAllInBehaviour', (_dec = ccclass('CheckUserAllInBehaviour'), _dec(_class = /*#__PURE__*/function (_ConditionBehaviour) {
        _inheritsLoose(CheckUserAllInBehaviour, _ConditionBehaviour);

        function CheckUserAllInBehaviour() {
          return _ConditionBehaviour.apply(this, arguments) || this;
        }

        var _proto = CheckUserAllInBehaviour.prototype;

        _proto.checkCondition = function checkCondition() {
          var userManager = this.gameplayManager.getMiniManager(UserManager);
          var users = userManager.activeUsers;
          var allinCount = users.filter(function (user) {
            return user.IsAllIn;
          }).length;
          this.isConditionMet = allinCount >= users.length - 1;
        };

        return CheckUserAllInBehaviour;
      }(ConditionBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChipAssetLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseLoader.ts', './ChipLibrary.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseLoader, ChipLibrary;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseLoader = module.BaseLoader;
    }, function (module) {
      ChipLibrary = module.ChipLibrary;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fc408O+h9FLjqFohbx0zdfd", "ChipAssetLoader", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChipAssetLoader = exports('ChipAssetLoader', (_dec = ccclass('ChipAssetLoader'), _dec(_class = /*#__PURE__*/function (_BaseLoader) {
        _inheritsLoose(ChipAssetLoader, _BaseLoader);

        function ChipAssetLoader() {
          return _BaseLoader.apply(this, arguments) || this;
        }

        var _proto = ChipAssetLoader.prototype;

        _proto.loadData = function loadData() {
          if (this.jsonAsset && this.sprAsset.length > 0) {
            ChipLibrary.initialize(this.jsonAsset, this.sprAsset);
          }
        };

        return ChipAssetLoader;
      }(BaseLoader)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChipEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "0c6c9Bo42JA8rrP/kLts5ck", "ChipEffect", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChipEffect = exports('ChipEffect', (_dec = ccclass('ChipEffect'), _dec2 = property({
        type: Sprite,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChipEffect, _Component);

        function ChipEffect() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_sprChip", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ChipEffect.prototype;

        _proto.setChipModel = function setChipModel(sprFrame) {
          this._sprChip.spriteFrame = sprFrame;
        };

        return ChipEffect;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprChip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChipGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PoolAsset.ts', './ChipEffect.ts', './PositionUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, EPoolType, ChipEffect, PositionUtils, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EPoolType = module.EPoolType;
    }, function (module) {
      ChipEffect = module.ChipEffect;
    }, function (module) {
      PositionUtils = module.PositionUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "88c63NMs8JFZbhCnQWUKFgs", "ChipGroup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChipGroup = exports('ChipGroup', (_dec = ccclass('ChipGroup'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChipGroup, _Component);

        function ChipGroup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_minRadiusSpawn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_maxRadiusSpawn", _descriptor2, _assertThisInitialized(_this));

          _this._chipsSpawned = [];
          _this._poolManager = null;
          return _this;
        }

        var _proto = ChipGroup.prototype;

        _proto.onEnable = function onEnable() {
          if (this._poolManager) return;
          this._poolManager = ServiceLocator.get(Define.Service.PoolManager);
        };

        _proto.spawnChip = function spawnChip(chipCount, sprFrame) {
          var posRandom = PositionUtils.getPositionsRandom(this.node.worldPosition, chipCount, this._minRadiusSpawn, this._maxRadiusSpawn);

          for (var i = 0; i < chipCount; i++) {
            var chipNode = this._poolManager.spawnNodeByType(EPoolType.Chip, this.node);

            chipNode.worldPosition = posRandom[i];
            var chipEffect = chipNode.getComponent(ChipEffect);

            this._chipsSpawned.push(chipNode);

            chipEffect.setChipModel(sprFrame);
          }
        };

        _proto.despawnChip = function despawnChip() {
          var _this2 = this;

          this._chipsSpawned.forEach(function (c) {
            return _this2._poolManager.despawnNode(c);
          });

          this._chipsSpawned = [];
        };

        return ChipGroup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_minRadiusSpawn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_maxRadiusSpawn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChipLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonUtils.ts'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy, JsonUtils;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JsonUtils = module.JsonUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "01835n9FJJBU42Vw6ZTLRww", "ChipLibrary", undefined);

      var ChipLibrary = exports('ChipLibrary', /*#__PURE__*/function () {
        function ChipLibrary() {} // Lưu danh sách data để duyệt mệnh giá
        // Map để lấy Sprite nhanh


        ChipLibrary.initialize = function initialize(jsonAsset, sprites) {
          var _JsonUtils$parse,
              _this = this;

          if (!jsonAsset) {
            console.warn("\u26A0\uFE0F [" + this.name + "] Missing JSON asset");
            return;
          }

          this._chipDataList = (_JsonUtils$parse = JsonUtils.parse(JSON.stringify(jsonAsset.json))) != null ? _JsonUtils$parse : []; // ⚡ QUAN TRỌNG: Sắp xếp danh sách giảm dần theo giá trị (Cao -> Thấp)
          // Việc này giúp thuật toán quy đổi bên dưới chạy đúng theo ưu tiên giá trị cao nhất

          this._chipDataList.sort(function (a, b) {
            return b.value - a.value;
          });

          this._chipSpriteMap.clear();

          var _loop = function _loop() {
            var chip = _step.value;
            var sprite = sprites.find(function (s) {
              return s.name === chip.chipSpriteName;
            });

            if (!sprite) {
              console.warn("\u26A0\uFE0F [" + _this.name + "] Missing sprite for: " + chip.chipSpriteName);
              return "continue";
            } // Lưu key là string để map.get hoạt động chính xác


            _this._chipSpriteMap.set(chip.value.toString(), sprite);
          };

          for (var _iterator = _createForOfIteratorHelperLoose(this._chipDataList), _step; !(_step = _iterator()).done;) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          console.log("\u2705 [" + this.name + "] Loaded " + this._chipSpriteMap.size + " sprites");
        };

        ChipLibrary.getChips = function getChips(totalValue) {
          var results = [];
          var remainingAmount = totalValue; // ChipDataList đã được sort giảm dần ở initialize

          for (var _iterator2 = _createForOfIteratorHelperLoose(this._chipDataList), _step2; !(_step2 = _iterator2()).done;) {
            var chipData = _step2.value;
            if (remainingAmount <= 0) break;
            var chipValue = chipData.value;

            if (remainingAmount >= chipValue) {
              // Tính số lượng
              var count = Math.floor(remainingAmount / chipValue); // Cập nhật số dư

              remainingAmount %= chipValue; // Lấy Sprite

              var sprite = this._chipSpriteMap.get(chipValue.toString());

              if (sprite) {
                // ✅ TỐI ƯU: Chỉ push 1 object chứa thông tin số lượng
                results.push({
                  sprite: sprite,
                  count: count,
                  value: chipValue
                });
              }
            }
          }

          return results;
        };

        ChipLibrary.clear = function clear() {
          this._chipDataList = [];

          this._chipSpriteMap.clear();
        };

        return ChipLibrary;
      }());
      ChipLibrary._chipDataList = [];
      ChipLibrary._chipSpriteMap = new Map();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConditionBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, BaseBehaviour;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2caae60T71MMbZwDqqA6/4G", "ConditionBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ConditionBehaviour = exports('ConditionBehaviour', (_dec = ccclass('ConditionBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(ConditionBehaviour, _BaseBehaviour);

        function ConditionBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this.isConditionMet = void 0;
          return _this;
        }

        var _proto = ConditionBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          this.checkCondition();
          this.endBehaviour();
        };

        _createClass(ConditionBehaviour, [{
          key: "IsConditionMet",
          get: function get() {
            return this.isConditionMet;
          }
        }]);

        return ConditionBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreateDeckBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, DeckManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      DeckManager = module.DeckManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6e9a06486ZCtqj/d5V2akqq", "CreateDeckBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CreateDeckBehaviour = exports('CreateDeckBehaviour', (_dec = ccclass('CreateDeckBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(CreateDeckBehaviour, _BaseBehaviour);

        function CreateDeckBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = CreateDeckBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          var deckManager = this.gameplayManager.getMiniManager(DeckManager);
          deckManager.createDeck();
          this.endBehaviour();
        };

        return CreateDeckBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DealCardOnTableBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts', './TableManager.ts', './AsyncUtils.ts', './TableUI.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, DeckManager, TableManager, AsyncUtils, TableUI, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      DeckManager = module.DeckManager;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "3f5baq6hyND6qvbdHyDhqbl", "DealCardOnTableBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DealCardOnTableBehaviour = exports('DealCardOnTableBehaviour', (_dec = ccclass('DealCardOnTableBehaviour'), _dec2 = property({
        visible: true,
        range: [0, 5, 1]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(DealCardOnTableBehaviour, _BaseBehaviour);

        function DealCardOnTableBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_numberOfCards", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = DealCardOnTableBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseBehaviour.prototype.startBehaviour.call(this); // Deal specified number of cards to the table


                    _context.next = 3;
                    return this.dealCards();

                  case 3:
                    this.endBehaviour();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startBehaviour() {
            return _startBehaviour.apply(this, arguments);
          }

          return startBehaviour;
        }();

        _proto.dealCards = /*#__PURE__*/function () {
          var _dealCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var deckManager, tableManager, tableUI, timeWaitBetweenCards, i, card;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    deckManager = this.gameplayManager.getMiniManager(DeckManager);
                    tableManager = this.gameplayManager.getMiniManager(TableManager);
                    tableUI = this.gameplayManager.getUI().get(TableUI);
                    timeWaitBetweenCards = 0.2;
                    i = 0;

                  case 5:
                    if (!(i < this._numberOfCards)) {
                      _context2.next = 13;
                      break;
                    }

                    card = deckManager.dealCard(tableManager.Table);
                    tableUI.dealCommonCard(card, Define.TimeToDealCard);
                    _context2.next = 10;
                    return AsyncUtils.waitForSeconds(timeWaitBetweenCards);

                  case 10:
                    i++;
                    _context2.next = 5;
                    break;

                  case 13:
                    _context2.next = 15;
                    return AsyncUtils.waitForSeconds(Define.TimeToDealCard);

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function dealCards() {
            return _dealCards.apply(this, arguments);
          }

          return dealCards;
        }();

        return DealCardOnTableBehaviour;
      }(BaseBehaviour), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_numberOfCards", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DealCardToUserBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts', './UserManager.ts', './AsyncUtils.ts', './UserInforUI.ts', './TableUI.ts', './Define.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, DeckManager, UserManager, AsyncUtils, UserInforUI, TableUI, Define;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      DeckManager = module.DeckManager;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e5195+oX+VAgbC2tG0CuTVF", "DealCardToUserBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DealCardToUserBehaviour = exports('DealCardToUserBehaviour', (_dec = ccclass('DealCardToUserBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(DealCardToUserBehaviour, _BaseBehaviour);

        function DealCardToUserBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._deckManager = null;
          _this._userManager = null;
          _this._userCardMap = new Map();
          return _this;
        }

        var _proto = DealCardToUserBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseBehaviour.prototype.startBehaviour.call(this);

                    _context.next = 3;
                    return this.dealCards();

                  case 3:
                    this.endBehaviour();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startBehaviour() {
            return _startBehaviour.apply(this, arguments);
          }

          return startBehaviour;
        }();

        _proto.dealCards = /*#__PURE__*/function () {
          var _dealCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;

            var userInforUI, tableUI, turnHandler, i, user, cards, card_1, card_2, timeWaitBetweenCards, userCardArray, _loop, _i;

            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this._deckManager = this.gameplayManager.getMiniManager(DeckManager);
                    this._userManager = this.gameplayManager.getMiniManager(UserManager);
                    userInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    tableUI = this.gameplayManager.getUI().get(TableUI);
                    turnHandler = this._userManager.turnHandler;

                    this._userCardMap.clear(); //load data


                    for (i = 0; i < this._userManager.activeUsers.length; i++) {
                      user = turnHandler.getUserFromQueue();
                      cards = [];
                      card_1 = this._deckManager.dealCard(user);
                      card_2 = this._deckManager.dealCard(user);
                      cards.push(card_1, card_2);

                      this._userCardMap.set(user, cards);
                    } //load effect


                    timeWaitBetweenCards = 0.2;
                    userCardArray = Array.from(this._userCardMap.entries());
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(_i) {
                      var _loop2, k;

                      return _regeneratorRuntime().wrap(function _loop$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2(k) {
                                var index, panel;
                                return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        index = _this2._userManager.getIndexByUser(userCardArray[k][0]);
                                        panel = userInforUI.getPanel(index);
                                        tableUI.dealCardToDesination(panel.node.worldPosition, Define.TimeToDealCard, function () {
                                          panel.onReceiveCard(userCardArray[k][1][_i]);
                                        });
                                        _context2.next = 5;
                                        return AsyncUtils.waitForSeconds(timeWaitBetweenCards);

                                      case 5:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _loop2);
                              });
                              k = 0;

                            case 2:
                              if (!(k < _this2._userManager.activeUsers.length)) {
                                _context3.next = 7;
                                break;
                              }

                              return _context3.delegateYield(_loop2(k), "t0", 4);

                            case 4:
                              k++;
                              _context3.next = 2;
                              break;

                            case 7:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _loop);
                    });
                    _i = 0;

                  case 11:
                    if (!(_i < 2)) {
                      _context4.next = 16;
                      break;
                    }

                    return _context4.delegateYield(_loop(_i), "t0", 13);

                  case 13:
                    _i++;
                    _context4.next = 11;
                    break;

                  case 16:
                    this.onSortCardUser();
                    _context4.next = 19;
                    return AsyncUtils.waitForSeconds(Define.TimeToDealCard);

                  case 19:
                    this.onShowUserCard();

                  case 20:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee2, this);
          }));

          function dealCards() {
            return _dealCards.apply(this, arguments);
          }

          return dealCards;
        }();

        _proto.onSortCardUser = function onSortCardUser() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
          uiInforUI.sortCardViewForAllUser();
        };

        _proto.onShowUserCard = function onShowUserCard() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
          uiInforUI.getPanel(0).onShowCard();
        };

        return DealCardToUserBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dealer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserRole.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, UserRole;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UserRole = module.UserRole;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "60109bxg+BCnI+M8KVFEjZG", "Dealer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Dealer = exports('Dealer', (_dec = ccclass('Dealer'), _dec(_class = /*#__PURE__*/function (_UserRole) {
        _inheritsLoose(Dealer, _UserRole);

        function Dealer() {
          return _UserRole.apply(this, arguments) || this;
        }

        return Dealer;
      }(UserRole)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeckManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Card.ts', './CardInfor.ts', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Card, Suit, Rank, GameplayHandler;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Card = module.Card;
    }, function (module) {
      Suit = module.Suit;
      Rank = module.Rank;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "291dcatoFNG97yZpIG+EAgx", "DeckManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DeckManager = exports('DeckManager', (_dec = ccclass('DeckManager'), _dec(_class = /*#__PURE__*/function (_GameplayHandler) {
        _inheritsLoose(DeckManager, _GameplayHandler);

        function DeckManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameplayHandler.call.apply(_GameplayHandler, [this].concat(args)) || this;
          _this._deck = [];
          return _this;
        }

        var _proto = DeckManager.prototype;

        _proto.resetState = function resetState() {
          this._deck = [];
        };

        _proto.createDeck = function createDeck() {
          for (var suit in Suit) {
            for (var rank = Rank.Two; rank <= Rank.Ace; rank++) {
              var card = new Card(suit, rank);

              this._deck.push(card);
            }
          }
        };

        _proto.shuffleDeck = function shuffleDeck() {
          for (var i = this._deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [this._deck[j], this._deck[i]];
            this._deck[i] = _ref[0];
            this._deck[j] = _ref[1];
          }
        };

        _proto.dealCard = function dealCard(cardReceiver) {
          var card = this._deck.pop();

          if (card) {
            cardReceiver.receiveCard(card);
          }

          return card;
        };

        return DeckManager;
      }(GameplayHandler)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9ea93lOo5O2YO/gAqcFmvO", "Define", undefined);

      var Define = exports('Define', function Define() {});
      Define.TimeFlip = 0.2;
      Define.TimeLoadingToMiniGame = 1;
      Define.TimeToStartGame = 3;
      Define.TimeToDealCard = 0.2;
      Define.TimeChipMove = 0.5;
      Define.Service = {
        AudioManager: 'AudioManager',
        CameraManager: 'CameraManager',
        NetworkManager: 'NetworkManager',
        PoolManager: 'PoolManager',
        UIManager: 'UIManager',
        UserProfile: 'UserProfile',
        MinigameManager: 'MinigameManager'
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DowloadHandler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SpriteFrame;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "595654kUxVGIo7NJEcVnHRY", "DowloadHandler", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DowloadHandler = exports('DowloadHandler', (_dec = ccclass('DowloadHandler'), _dec(_class = /*#__PURE__*/function () {
        function DowloadHandler() {} // --- Internal helper function ---


        DowloadHandler.fetchAndValidate = /*#__PURE__*/function () {
          var _fetchAndValidate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
            var response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url);

                  case 2:
                    response = _context.sent;

                    if (response.ok) {
                      _context.next = 6;
                      break;
                    }

                    console.error("[Downloader] HTTP error! status: " + response.status + " for URL: " + url);
                    return _context.abrupt("return", null);

                  case 6:
                    return _context.abrupt("return", response);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function fetchAndValidate(_x) {
            return _fetchAndValidate.apply(this, arguments);
          }

          return fetchAndValidate;
        }() // --- Public methods ---
        ;

        DowloadHandler.DownloadTextByUrl = /*#__PURE__*/function () {
          var _DownloadTextByUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
            var response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.fetchAndValidate(url);

                  case 3:
                    response = _context2.sent;
                    _context2.next = 6;
                    return response.text();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](0);
                    console.error("[DownloadTextByUrl] Failed to download: " + url, _context2.t0);
                    return _context2.abrupt("return", null);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 9]]);
          }));

          function DownloadTextByUrl(_x2) {
            return _DownloadTextByUrl.apply(this, arguments);
          }

          return DownloadTextByUrl;
        }();

        DowloadHandler.DownloadJSONByUrl = /*#__PURE__*/function () {
          var _DownloadJSONByUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
            var response, json;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.fetchAndValidate(url);

                  case 3:
                    response = _context3.sent;
                    _context3.prev = 4;
                    _context3.next = 7;
                    return response.json();

                  case 7:
                    json = _context3.sent;
                    _context3.next = 14;
                    break;

                  case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3["catch"](4);
                    console.error("[DownloadJSONByUrl] Invalid JSON format from: " + url, _context3.t0);
                    return _context3.abrupt("return", null);

                  case 14:
                    return _context3.abrupt("return", json);

                  case 17:
                    _context3.prev = 17;
                    _context3.t1 = _context3["catch"](0);
                    console.error("[DownloadJSONByUrl] Failed to download JSON: " + url, _context3.t1);
                    return _context3.abrupt("return", null);

                  case 21:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 17], [4, 10]]);
          }));

          function DownloadJSONByUrl(_x3) {
            return _DownloadJSONByUrl.apply(this, arguments);
          }

          return DownloadJSONByUrl;
        }();

        DowloadHandler.DownloadFileByUrl = /*#__PURE__*/function () {
          var _DownloadFileByUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url) {
            var response;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.fetchAndValidate(url);

                  case 3:
                    response = _context4.sent;
                    _context4.next = 6;
                    return response.blob();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](0);
                    console.error("[DownloadFileByUrl] Failed to download: " + url, _context4.t0);
                    return _context4.abrupt("return", null);

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 9]]);
          }));

          function DownloadFileByUrl(_x4) {
            return _DownloadFileByUrl.apply(this, arguments);
          }

          return DownloadFileByUrl;
        }();

        DowloadHandler.DownloadImageByUrl = /*#__PURE__*/function () {
          var _DownloadImageByUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      var img = new Image(); // Optional: enable cross-origin for external URLs

                      if (!url.startsWith(window.location.origin)) {
                        img.crossOrigin = 'anonymous';
                      }

                      img.onload = function () {
                        //console.log(`[DownloadImageByUrl] Successfully loaded: ${url}`);
                        resolve(img);
                      };

                      img.onerror = function (err) {
                        console.error("[DownloadImageByUrl] Failed to load image: " + url, err);
                        reject(new Error("Failed to load image: " + url));
                      };

                      img.src = url;
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function DownloadImageByUrl(_x5) {
            return _DownloadImageByUrl.apply(this, arguments);
          }

          return DownloadImageByUrl;
        }();

        DowloadHandler.GetImageByUrl = /*#__PURE__*/function () {
          var _GetImageByUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
            var image, spriteFrame;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return this.DownloadImageByUrl(url);

                  case 3:
                    image = _context6.sent;

                    if (image) {
                      _context6.next = 7;
                      break;
                    }

                    console.warn("[UIPlayerCard] Failed to download avatar");
                    return _context6.abrupt("return");

                  case 7:
                    spriteFrame = SpriteFrame.createWithImage(image);
                    return _context6.abrupt("return", spriteFrame);

                  case 11:
                    _context6.prev = 11;
                    _context6.t0 = _context6["catch"](0);
                    console.error("[UIPlayerCard] Error loading avatar:", _context6.t0);
                    return _context6.abrupt("return", null);

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[0, 11]]);
          }));

          function GetImageByUrl(_x6) {
            return _GetImageByUrl.apply(this, arguments);
          }

          return GetImageByUrl;
        }();

        return DowloadHandler;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Drag.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, Vec3, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f9a14FLJ0xI9Z+TcSNoDazr", "Drag", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Drag = exports('Drag', (_dec = ccclass('Drag'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Drag, _Component);

        function Drag() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._startPos = new Vec3();
          return _this;
        }

        var _proto = Drag.prototype;

        _proto.onLoad = function onLoad() {
          // Save the starting position
          this._startPos.set(this.node.position); // Register the touch event when the component loads


          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onDestroy = function onDestroy() {
          // Good practice: Unregister the event when component is destroyed
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onTouchMove = function onTouchMove(event) {
          // 1. Get the difference in position (delta) since the last frame
          // getUIDelta() is often best for UI nodes, getDelta() for general 2D
          var delta = event.getUIDelta(); // 2. Get the current position of the node

          var currentPos = this.node.position; // 3. Update the position based on the touch delta

          this.node.setPosition(currentPos.x + delta.x, currentPos.y + delta.y, currentPos.z);
        } // Call this method to reset the node to its original location
        ;

        _proto.resetPosition = function resetPosition() {
          this.node.setPosition(this._startPos);
        };

        return Drag;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EDealer.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EDealerAnimType', void 0);

      cclegacy._RF.push({}, "3b574XzZRBKh4P0oiDOuw9g", "EDealer", undefined);

      var EDealerAnimType;

      (function (EDealerAnimType) {
        EDealerAnimType[EDealerAnimType["Idle"] = 0] = "Idle";
        EDealerAnimType[EDealerAnimType["CallBet"] = 1] = "CallBet";
      })(EDealerAnimType || (EDealerAnimType = exports('EDealerAnimType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnumUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "07c91eX6pFOIqzfYIu0Z/3B", "EnumUtils", undefined);

      var EnumUtils = exports('EnumUtils', /*#__PURE__*/function () {
        function EnumUtils() {}

        EnumUtils.getEnum = function getEnum(enumObject, value) {
          // TypeScript giờ đã an tâm rằng E sẽ là một đối tượng (object)
          if (value in enumObject) {
            // ... (Logic parsing)
            var enumValue = enumObject[value];

            if (enumValue !== undefined) {
              return enumValue;
            }
          }

          return null;
        };

        return EnumUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EPhases.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('Phases', void 0);

      cclegacy._RF.push({}, "eb9c6HxeIhHV6jtWAegjs09", "EPhases", undefined);

      var Phases;

      (function (Phases) {
        Phases[Phases["Setup"] = 0] = "Setup";
        Phases[Phases["Blinds"] = 1] = "Blinds";
        Phases[Phases["Deal"] = 2] = "Deal";
        Phases[Phases["Preflop"] = 3] = "Preflop";
        Phases[Phases["Flop"] = 4] = "Flop";
        Phases[Phases["Turn"] = 5] = "Turn";
        Phases[Phases["River"] = 6] = "River";
        Phases[Phases["Showdown"] = 7] = "Showdown";
        Phases[Phases["Evaluate"] = 8] = "Evaluate";
        Phases[Phases["Endgame"] = 9] = "Endgame";
      })(Phases || (Phases = exports('Phases', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ERole.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ERole', void 0);

      cclegacy._RF.push({}, "47086KqWQlF773j4FrxGVzy", "ERole", undefined);

      var ERole;

      (function (ERole) {
        ERole[ERole["Dealer"] = 0] = "Dealer";
        ERole[ERole["SmallBlind"] = 1] = "SmallBlind";
        ERole[ERole["BigBlind"] = 2] = "BigBlind";
      })(ERole || (ERole = exports('ERole', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ESound.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        EMusicId: void 0,
        ESFXId: void 0
      });

      cclegacy._RF.push({}, "f0609j7nPtE+JrrYh0Hz1mr", "ESound", undefined);

      var EMusicId;

      (function (EMusicId) {
        EMusicId[EMusicId["BGM_Lobby"] = 0] = "BGM_Lobby";
      })(EMusicId || (EMusicId = exports('EMusicId', {})));

      var ESFXId;

      (function (ESFXId) {
        ESFXId[ESFXId["SFX_Click"] = 0] = "SFX_Click";
        ESFXId[ESFXId["SFX_DealCard"] = 1] = "SFX_DealCard";
        ESFXId[ESFXId["SFX_Chip"] = 2] = "SFX_Chip";
        ESFXId[ESFXId["SFX_Tap"] = 3] = "SFX_Tap";
        ESFXId[ESFXId["SFX_CardFlip"] = 4] = "SFX_CardFlip";
      })(ESFXId || (ESFXId = exports('ESFXId', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ETween.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        EFadeType: void 0,
        ERotateType: void 0,
        EScaleType: void 0,
        ETranslateType: void 0,
        ETweenEasing: void 0
      });

      cclegacy._RF.push({}, "9047a9Dq2BMCIZsGlprM6KO", "ETween", undefined);

      var ETweenEasing;

      (function (ETweenEasing) {
        ETweenEasing[ETweenEasing["Linear"] = 0] = "Linear";
        ETweenEasing[ETweenEasing["Smooth"] = 1] = "Smooth";
        ETweenEasing[ETweenEasing["Fade"] = 2] = "Fade";
        ETweenEasing[ETweenEasing["Constant"] = 3] = "Constant";
        ETweenEasing[ETweenEasing["QuadIn"] = 4] = "QuadIn";
        ETweenEasing[ETweenEasing["QuadOut"] = 5] = "QuadOut";
        ETweenEasing[ETweenEasing["QuadInOut"] = 6] = "QuadInOut";
        ETweenEasing[ETweenEasing["QuadOutIn"] = 7] = "QuadOutIn";
        ETweenEasing[ETweenEasing["CubicIn"] = 8] = "CubicIn";
        ETweenEasing[ETweenEasing["CubicOut"] = 9] = "CubicOut";
        ETweenEasing[ETweenEasing["CubicInOut"] = 10] = "CubicInOut";
        ETweenEasing[ETweenEasing["CubicOutIn"] = 11] = "CubicOutIn";
        ETweenEasing[ETweenEasing["QuartIn"] = 12] = "QuartIn";
        ETweenEasing[ETweenEasing["QuartOut"] = 13] = "QuartOut";
        ETweenEasing[ETweenEasing["QuartInOut"] = 14] = "QuartInOut";
        ETweenEasing[ETweenEasing["QuartOutIn"] = 15] = "QuartOutIn";
        ETweenEasing[ETweenEasing["QuintIn"] = 16] = "QuintIn";
        ETweenEasing[ETweenEasing["QuintOut"] = 17] = "QuintOut";
        ETweenEasing[ETweenEasing["QuintInOut"] = 18] = "QuintInOut";
        ETweenEasing[ETweenEasing["QuintOutIn"] = 19] = "QuintOutIn";
        ETweenEasing[ETweenEasing["SineIn"] = 20] = "SineIn";
        ETweenEasing[ETweenEasing["SineOut"] = 21] = "SineOut";
        ETweenEasing[ETweenEasing["SineInOut"] = 22] = "SineInOut";
        ETweenEasing[ETweenEasing["SineOutIn"] = 23] = "SineOutIn";
        ETweenEasing[ETweenEasing["ExpoIn"] = 24] = "ExpoIn";
        ETweenEasing[ETweenEasing["ExpoOut"] = 25] = "ExpoOut";
        ETweenEasing[ETweenEasing["ExpoInOut"] = 26] = "ExpoInOut";
        ETweenEasing[ETweenEasing["ExpoOutIn"] = 27] = "ExpoOutIn";
        ETweenEasing[ETweenEasing["CircIn"] = 28] = "CircIn";
        ETweenEasing[ETweenEasing["CircOut"] = 29] = "CircOut";
        ETweenEasing[ETweenEasing["CircInOut"] = 30] = "CircInOut";
        ETweenEasing[ETweenEasing["CircOutIn"] = 31] = "CircOutIn";
        ETweenEasing[ETweenEasing["ElasticIn"] = 32] = "ElasticIn";
        ETweenEasing[ETweenEasing["ElasticOut"] = 33] = "ElasticOut";
        ETweenEasing[ETweenEasing["ElasticInOut"] = 34] = "ElasticInOut";
        ETweenEasing[ETweenEasing["ElasticOutIn"] = 35] = "ElasticOutIn";
        ETweenEasing[ETweenEasing["BackIn"] = 36] = "BackIn";
        ETweenEasing[ETweenEasing["BackOut"] = 37] = "BackOut";
        ETweenEasing[ETweenEasing["BackInOut"] = 38] = "BackInOut";
        ETweenEasing[ETweenEasing["BackOutIn"] = 39] = "BackOutIn";
        ETweenEasing[ETweenEasing["BounceIn"] = 40] = "BounceIn";
        ETweenEasing[ETweenEasing["BounceOut"] = 41] = "BounceOut";
        ETweenEasing[ETweenEasing["BounceInOut"] = 42] = "BounceInOut";
        ETweenEasing[ETweenEasing["BounceOutIn"] = 43] = "BounceOutIn";
      })(ETweenEasing || (ETweenEasing = exports('ETweenEasing', {})));

      var EFadeType;

      (function (EFadeType) {
        EFadeType[EFadeType["FadeIn"] = 0] = "FadeIn";
        EFadeType[EFadeType["FadeOut"] = 1] = "FadeOut";
        EFadeType[EFadeType["FadeInOut"] = 2] = "FadeInOut";
      })(EFadeType || (EFadeType = exports('EFadeType', {})));

      var EScaleType;

      (function (EScaleType) {
        EScaleType[EScaleType["ScaleUp"] = 0] = "ScaleUp";
        EScaleType[EScaleType["ScaleDown"] = 1] = "ScaleDown";
        EScaleType[EScaleType["ScaleUpDown"] = 2] = "ScaleUpDown";
      })(EScaleType || (EScaleType = exports('EScaleType', {})));

      var ETranslateType;

      (function (ETranslateType) {
        ETranslateType[ETranslateType["TranslateToPosition"] = 0] = "TranslateToPosition";
        ETranslateType[ETranslateType["TranslateToTarget"] = 1] = "TranslateToTarget";
        ETranslateType[ETranslateType["TranslateBetweenPosition"] = 2] = "TranslateBetweenPosition";
        ETranslateType[ETranslateType["TranslateBetweenTarget"] = 3] = "TranslateBetweenTarget";
      })(ETranslateType || (ETranslateType = exports('ETranslateType', {})));

      var ERotateType;

      (function (ERotateType) {
        ERotateType[ERotateType["RotateEulerTo"] = 0] = "RotateEulerTo";
        ERotateType[ERotateType["RotateEulerBetween"] = 1] = "RotateEulerBetween";
        ERotateType[ERotateType["RotateQuatTo"] = 2] = "RotateQuatTo";
        ERotateType[ERotateType["RotateQuatBetween"] = 3] = "RotateQuatBetween";
      })(ERotateType || (ERotateType = exports('ERotateType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EUIInfor.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        EUIPopups: void 0,
        EUIScreens: void 0
      });

      cclegacy._RF.push({}, "1421biqPj9Csp88TKh1XbMb", "EUIInfor", undefined);

      var EUIScreens; //------------------------------------------------------
      // set follow priority

      (function (EUIScreens) {
        EUIScreens[EUIScreens["MainMenu"] = 0] = "MainMenu";
        EUIScreens[EUIScreens["SplashScreen"] = 1] = "SplashScreen";
        EUIScreens[EUIScreens["BackScreen"] = 2] = "BackScreen";
      })(EUIScreens || (EUIScreens = exports('EUIScreens', {})));

      var EUIPopups;

      (function (EUIPopups) {
        EUIPopups[EUIPopups["GameMenu"] = 0] = "GameMenu";
        EUIPopups[EUIPopups["Leaderboard"] = 1] = "Leaderboard";
        EUIPopups[EUIPopups["Setting"] = 2] = "Setting";
        EUIPopups[EUIPopups["Tutorial"] = 3] = "Tutorial";
        EUIPopups[EUIPopups["UserProfile"] = 4] = "UserProfile";
        EUIPopups[EUIPopups["Wheel"] = 5] = "Wheel";
        EUIPopups[EUIPopups["Popup"] = 998] = "Popup";
        EUIPopups[EUIPopups["Loading"] = 999] = "Loading";
      })(EUIPopups || (EUIPopups = exports('EUIPopups', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EUserOptions.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EUserOptions', void 0);

      cclegacy._RF.push({}, "4995aH3UtVJp73h8CmL6iak", "EUserOptions", undefined);

      var EUserOptions;

      (function (EUserOptions) {
        EUserOptions[EUserOptions["Fold"] = 0] = "Fold";
        EUserOptions[EUserOptions["Call"] = 1] = "Call";
        EUserOptions[EUserOptions["Check"] = 2] = "Check";
        EUserOptions[EUserOptions["Raise"] = 3] = "Raise";
        EUserOptions[EUserOptions["ShowHand"] = 4] = "ShowHand";
        EUserOptions[EUserOptions["AllIn"] = 5] = "AllIn";
      })(EUserOptions || (EUserOptions = exports('EUserOptions', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EWheel.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EWheelStatus', void 0);

      cclegacy._RF.push({}, "e0888lfAcxGwqzaZsxDrvP9", "EWheel", undefined);

      var EWheelStatus;

      (function (EWheelStatus) {
        EWheelStatus[EWheelStatus["Idle"] = 0] = "Idle";
        EWheelStatus[EWheelStatus["Rotate"] = 1] = "Rotate";
        EWheelStatus[EWheelStatus["Spin"] = 2] = "Spin";
      })(EWheelStatus || (EWheelStatus = exports('EWheelStatus', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tweener.ts', './ETween.ts', './BaseAnimation.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Enum, NodeEventType, Tweener, EFadeType, BaseAnimation;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Enum = module.Enum;
      NodeEventType = module.NodeEventType;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      EFadeType = module.EFadeType;
    }, function (module) {
      BaseAnimation = module.BaseAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "abccbrhwG9H+r9XvFlSSrhY", "Fade", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Fade = exports('Fade', (_dec = ccclass('Fade'), _dec2 = property({
        type: Sprite,
        visible: true,
        readonly: true
      }), _dec3 = property({
        range: [0, 255, 1],
        slide: true,
        visible: true
      }), _dec4 = property({
        range: [0, 255, 1],
        slide: true,
        visible: true
      }), _dec5 = property({
        type: Enum(EFadeType),
        visible: function visible() {
          return !this.PlayWhenHover;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAnimation) {
        _inheritsLoose(Fade, _BaseAnimation);

        function Fade() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAnimation.call.apply(_BaseAnimation, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_sprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_alphaStart", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_alphaEnd", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fadeType", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Fade.prototype;

        _proto.onLoad = function onLoad() {
          this._sprite = this.getComponent(Sprite);

          if (!this._sprite) {
            console.warn("[Fade] No Sprite component found on " + this.node.name);
          }

          this.node.on(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onDestroy = function onDestroy() {
          this.node.off(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.off(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onEnable = function onEnable() {
          if (this.PlayOnEnable) {
            this.play();
          }
        };

        _proto.onHoverEnter = function onHoverEnter(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Enter");

          this.fadeIn();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Exit");

          this.fadeOut();
        } //#region Interface Tween

        /** Public method to trigger fade animation manually */
        ;

        _proto.play = function play() {
          if (!this._sprite) return;

          switch (this._fadeType) {
            case EFadeType.FadeIn:
              this.fadeIn();
              break;

            case EFadeType.FadeOut:
              this.fadeOut();
              break;

            case EFadeType.FadeInOut:
              this.fadeInOut();
              break;
          }
        };

        _proto.stop = function stop() {
          Tweener.stop(this._sprite);
        } // // this is valid when > cocos 3.8
        // public pause() {
        // }
        // public resume() {
        // }
        ;

        _proto.stopAll = function stopAll() {
          Tweener.stopAll(this._sprite);
        } //#endregion
        ;

        _proto.fadeIn = function fadeIn() {
          Tweener.Transparency(this._sprite, this._alphaStart, this._alphaEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.fadeOut = function fadeOut() {
          Tweener.Transparency(this._sprite, this._alphaEnd, this._alphaStart, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.fadeInOut = function fadeInOut() {
          // Fade in, then fade out once complete
          Tweener.TransparencyInOut(this._sprite, this._alphaEnd, this._alphaStart, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        return Fade;
      }(BaseAnimation), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_alphaStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_alphaEnd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fadeType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EFadeType.FadeIn;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FloatingObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tweener.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIRenderer, v3, Component, Tweener, ETweenEasing;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIRenderer = module.UIRenderer;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ETweenEasing = module.ETweenEasing;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "3218dCjF4BJl7zOUF/eZy5p", "FloatingObject", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FloatingObject = exports('FloatingObject', (_dec = ccclass('FloatingObject'), _dec2 = property({
        type: UIRenderer,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FloatingObject, _Component);

        function FloatingObject() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_uiObject", _descriptor, _assertThisInitialized(_this));

          _this._floatDuration = 0;
          _this._fadeDuration = 0;
          _this._distance = 1;
          return _this;
        }

        var _proto = FloatingObject.prototype;

        _proto.onEnable = function onEnable() {
          this._floatDuration = 0;
          this._fadeDuration = 0;
          this._distance = 1;
          var objectColor = this._uiObject.color;

          this._uiObject.color.set(objectColor.r, objectColor.g, objectColor.b, 255);
        };

        _proto.setDistance = function setDistance(distance) {
          this._distance = distance;
          return this;
        };

        _proto.setFloatDuration = function setFloatDuration(duration) {
          this._floatDuration = duration;
          return this;
        };

        _proto.setFadeDuration = function setFadeDuration(duration) {
          this._fadeDuration = duration;
          return this;
        };

        _proto.doPlay = function doPlay(onComplete) {
          var _this2 = this;

          var currentPosition = this.node.worldPosition.clone();
          var destinationPosition = currentPosition.clone().add(v3(0, this._distance, 0));
          Tweener.GlobalTranslateTo(this.node, currentPosition, destinationPosition, this._floatDuration, ETweenEasing.Linear, false, 0, function () {
            Tweener.Transparency(_this2._uiObject, 255, 0, _this2._fadeDuration, ETweenEasing.Linear, false, 0, onComplete);
          });
        };

        _proto.getUIObject = function getUIObject(type) {
          if (this._uiObject instanceof type) {
            return this._uiObject;
          }

          return null;
        };

        return FloatingObject;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_uiObject", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameplayHandler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1307ab3OYBCxY6MwDfgGphD", "GameplayHandler", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameplayHandler = exports('GameplayHandler', (_dec = ccclass('GameplayHandler'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameplayHandler, _Component);

        function GameplayHandler() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameplayManager = null;
          return _this;
        }

        var _proto = GameplayHandler.prototype;

        _proto.init = function init() {};

        _proto.setGameplayManager = function setGameplayManager(minigameManager) {
          this.gameplayManager = minigameManager;
        };

        _proto.resetState = function resetState() {// Override in subclasses if needed
        };

        return GameplayHandler;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IAudioManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "501b6/hBE1PXpiFYn2T7Wve", "IAudioManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBetable.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f43edAxCvFAwZDa4mORg6Jy", "IBetable", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ICameraManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "afbd2lWH+tKcZptDr8UZ59d", "ICameraManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ICardReceiver.ts", ['cc'], function () {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d73dVC52dE7p2zI+zJ8+2x", "ICardReceiver", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameplayManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a37d6G+HI5IXIOS6FpF3oUD", "IGameplayManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IInitable.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c284e7xAxtJZ4dTejrKV8S2", "IInitable", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILeaderboardModel.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4eb216s4mZNPrep/YORW2eM", "ILeaderboardModel", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IMinigameAudio.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f8ec3SwUI1B/ZteJSjONqnG", "IMinigameAudio", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IMinigameManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e72enCpAFB74+qVVH8UFIL", "IMinigameManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/INetworkManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0df65lXV09KB5zWe90C+xD1", "INetworkManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPokerUIManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a99ccsXCX5BUKYO4OWasURn", "IPokerUIManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPoolManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c384tzmc1MyZ68j5LWMvG5", "IPoolManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IResetable.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5e472bSUchBsYpPdbba5rjU", "IResetable", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ISetGameplayManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e7bcbrGpThIgbIt9sM0iWX9", "ISetGameplayManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITween.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62c75JJnqhGvbctcyyF5Gda", "ITween", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IUIManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd723qKPgpPuIErCXR+Ixjs", "IUIManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IUserManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d92f2pjoP9KJbR/W7Q2+2vt", "IUserManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IUserProfile.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "baa1f2KyHRC9Ib2JHnoTveY", "IUserProfile", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "60667fuZbRCGo7WlGWSG54n", "JsonUtils", undefined);
      /**
       * Tiện ích đọc / ghi / parse JSON an toàn
       */


      var JsonUtils = exports('JsonUtils', /*#__PURE__*/function () {
        function JsonUtils() {}
        /**
         * Parse chuỗi JSON an toàn, không ném lỗi nếu dữ liệu hỏng
         * @param text chuỗi JSON
         * @param defaultValue giá trị trả về nếu parse lỗi
         * @returns object hoặc defaultValue
         */


        JsonUtils.parse = function parse(text, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = null;
          }

          if (!text) return defaultValue;

          try {
            return JSON.parse(text);
          } catch (err) {
            console.warn("\u26A0\uFE0F [JsonUtils] JSON parse error: " + err);
            return defaultValue;
          }
        }
        /**
         * Chuyển object thành chuỗi JSON an toàn
         * @param data object bất kỳ
         * @returns chuỗi JSON hoặc null nếu lỗi
         */
        ;

        JsonUtils.stringify = function stringify(data) {
          try {
            return JSON.stringify(data);
          } catch (err) {
            console.warn("\u26A0\uFE0F [JsonUtils] JSON stringify error: " + err);
            return null;
          }
        };

        return JsonUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadTableInforBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './TableManager.ts', './TableUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, TableManager, TableUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      TableUI = module.TableUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "17d69rd0o1Mo5+lxc/yaQHk", "LoadTableInforBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadTableInforBehaviour = exports('LoadTableInforBehaviour', (_dec = ccclass('LoadTableInforBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(LoadTableInforBehaviour, _BaseBehaviour);

        function LoadTableInforBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = LoadTableInforBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var pokerUIManager = this.gameplayManager.getUI();
          var tableManager = this.gameplayManager.getMiniManager(TableManager);
          pokerUIManager.get(TableUI).table = tableManager.Table;
          this.endBehaviour();
        };

        return LoadTableInforBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadUserInforBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserInforUI.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, UserInforUI, UserManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1629dlw7DxIr5y5IPFEvSjS", "LoadUserInforBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadUserInforBehaviour = exports('LoadUserInforBehaviour', (_dec = ccclass('LoadUserInforBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(LoadUserInforBehaviour, _BaseBehaviour);

        function LoadUserInforBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = LoadUserInforBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var userManager = this.gameplayManager.getMiniManager(UserManager);
          var pokerUIManager = this.gameplayManager.getUI();
          var userInforUI = pokerUIManager.get(UserInforUI);
          var userList = userManager.activeUsers;
          var panelList = userInforUI.getPanels(userManager.activeUsers.length);

          for (var i = 0; i < userManager.activeUsers.length; i++) {
            var user = userList[i];
            var panel = panelList[i];
            panel.user = user; //panel.setEvents();
          }

          this.endBehaviour();
        };

        return LoadUserInforBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Api.ts', './Card.ts', './CardInfor.ts', './CardPrefab.ts', './CardView.ts', './EPhases.ts', './EUserOptions.ts', './Define.ts', './ChipEffect.ts', './ChipGroup.ts', './FloatingObject.ts', './EDealer.ts', './ERole.ts', './ESound.ts', './ETween.ts', './EUIInfor.ts', './EWheel.ts', './IAudioManager.ts', './IBetable.ts', './ICameraManager.ts', './ICardReceiver.ts', './IGameplayManager.ts', './IInitable.ts', './IMinigameAudio.ts', './IMinigameManager.ts', './INetworkManager.ts', './IPokerUIManager.ts', './IPoolManager.ts', './IResetable.ts', './ISetGameplayManager.ts', './ITween.ts', './IUIManager.ts', './IUserManager.ts', './IUserProfile.ts', './BaseLoader.ts', './CardAssetLoader.ts', './CardLibrary.ts', './ChipAssetLoader.ts', './ChipLibrary.ts', './MainGameManager.ts', './MiniGame.ts', './MinigameManager.ts', './BetManager.ts', './DeckManager.ts', './GameplayHandler.ts', './PhaseManager.ts', './PokerGameplayManager.ts', './PokerManager.ts', './PokerUIManager.ts', './TableManager.ts', './RoleAssigner.ts', './BigBlind.ts', './Dealer.ts', './SmallBlind.ts', './UserRole.ts', './TurnHandler.ts', './UserManager.ts', './RoomManager.ts', './AudioManager.ts', './AudioPlaying.ts', './CameraManager.ts', './PoolManager.ts', './RotateObject.ts', './ILeaderboardModel.ts', './NetworkManager.ts', './array_buff.ts', './BasePhase.ts', './AssignBlindsBehaviour.ts', './AssignDealerBehaviour.ts', './BaseBehaviour.ts', './BetBehaviour.ts', './BlindBetBehaviour.ts', './CheckFoldBehaviour.ts', './CheckHandRankBehaviour.ts', './CheckPotBehaviour.ts', './CreateDeckBehaviour.ts', './DealCardOnTableBehaviour.ts', './DealCardToUserBehaviour.ts', './LoadTableInforBehaviour.ts', './LoadUserInforBehaviour.ts', './OpenTableInferfaceBehaviour.ts', './OpenUserInterfaceBehaviour.ts', './SetStartTurnBehaviour.ts', './SetTableBetBehaviour.ts', './ShowhandBehaviour.ts', './ShuffleBehaviour.ts', './CheckUserAllInBehaviour.ts', './ConditionBehaviour.ts', './SkipBehaviour.ts', './WaitForSecondsBehaviour.ts', './WinPotBehaviour.ts', './PoolAsset.ts', './ServiceInstaller.ts', './ServiceLocator.ts', './Pot.ts', './Table.ts', './TableUI.ts', './Timer.ts', './BaseAnimation.ts', './Drag.ts', './Fade.ts', './Rotating.ts', './Scaling.ts', './Translate.ts', './BaseUI.ts', './UIManager.ts', './UIDealer.ts', './UIPlayerCard.ts', './UIWheel.ts', './BasePopup.ts', './UIGamemenu.ts', './UILeaderboard.ts', './UILoading.ts', './UIPopup.ts', './UISetting.ts', './UITutorial.ts', './UIUserProfile.ts', './BaseScreen.ts', './UIBackScreen.ts', './UIMainmenu.ts', './UISplashScreen.ts', './PokerUI.ts', './UserHUD.ts', './UserInforPanel.ts', './UserInforUI.ts', './UserNotiOption.ts', './UserOptionsPanel.ts', './UserRaisePanel.ts', './PokerUser.ts', './UserCurrency.ts', './UserData.ts', './UserProfile.ts', './AsyncUtils.ts', './ButtonUtils.ts', './CheckHandRank.ts', './DowloadHandler.ts', './EnumUtils.ts', './JsonUtils.ts', './MathUtils.ts', './PokerSimpleAI.ts', './PositionUtils.ts', './Singleton.ts', './ToggleUtils.ts', './Tweener.ts', './VirtualScrollView.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncUtils.ts', './EUIInfor.ts', './BaseLoader.ts', './ESound.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, AsyncUtils, EUIScreens, BaseLoader, EMusicId, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      EUIScreens = module.EUIScreens;
    }, function (module) {
      BaseLoader = module.BaseLoader;
    }, function (module) {
      EMusicId = module.EMusicId;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "7c11dHIaphEBpTyv6OVtY6T", "MainGameManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainGameManager = exports('MainGameManager', (_dec = ccclass('MainGameManager'), _dec2 = property({
        type: [BaseLoader],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainGameManager, _Component);

        function MainGameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_loaders", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MainGameManager.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var audio, pool, userProfile, uiManager;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForNextFrame();

                  case 2:
                    audio = ServiceLocator.get(Define.Service.AudioManager);
                    pool = ServiceLocator.get(Define.Service.PoolManager);
                    userProfile = ServiceLocator.get(Define.Service.UserProfile);
                    uiManager = ServiceLocator.get(Define.Service.UIManager);
                    userProfile.loadUserData();
                    audio.setPool(pool);
                    audio.init();

                    this._loaders.forEach(function (l) {
                      return l.loadData();
                    });

                    _context.next = 12;
                    return AsyncUtils.waitForNextFrame();

                  case 12:
                    audio.playMusic(EMusicId.BGM_Lobby, true);
                    uiManager.showScreen(EUIScreens.SplashScreen);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }();

        return MainGameManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_loaders", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MathUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eed26qBgj1CHL1EKGY8dXZC", "MathUtils", undefined);

      var MathUtils = exports('MathUtils', /*#__PURE__*/function () {
        function MathUtils() {}
        /**
         * Trả về số nguyên từ 0 -> n
         */


        MathUtils.randomInt = function randomInt(n) {
          return Math.floor(Math.random() * n);
        }
        /**
         * Trả về số thực từ 0 -> n
         */
        ;

        MathUtils.randomFloat = function randomFloat(n) {
          return Math.random() * n;
        }
        /**
         * (Bonus) Trả về số nguyên trong khoảng [min, max]
         * Ví dụ: randomRangeInt(5, 10) -> 5, 6, 7, 8, 9, 10
         */
        ;

        MathUtils.randomRangeInt = function randomRangeInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        return MathUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "3f872sDl1ZFkpiFWYcYuUE6", "MiniGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MiniGame = exports('MiniGame', (_dec = ccclass('MiniGame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniGame, _Component);

        function MiniGame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._audioMinigameSet = new Set();
          _this._audio = null;
          return _this;
        }

        var _proto = MiniGame.prototype;

        _proto.onDisable = function onDisable() {
          var _this2 = this;

          this._audioMinigameSet.forEach(function (a) {
            return _this2._audio.stopSFX(a);
          });

          ServiceLocator.unregister(Define.Service.MinigameAudio);
        };

        _proto.initGame = function initGame() {
          ServiceLocator.register(Define.Service.MinigameAudio, this);
          this._audio = ServiceLocator.get(Define.Service.AudioManager);
        };

        _proto.isReadyToStart = function isReadyToStart() {
          return true;
        };

        _proto.playRandomSFX = function playRandomSFX(id, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }

          this._audio.playRandomSFX(id, isLoop);

          this._audioMinigameSet.add(id);
        };

        _proto.playSFX = function playSFX(id, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }

          this._audio.playSFX(id, isLoop);

          this._audioMinigameSet.add(id);
        };

        return MiniGame;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinigameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniGame.ts', './AsyncUtils.ts', './EUIInfor.ts', './Define.ts', './UIBackScreen.ts', './ESound.ts', './ServiceLocator.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Prefab, instantiate, Component, MiniGame, AsyncUtils, EUIPopups, EUIScreens, Define, UIBackScreen, EMusicId, ServiceLocator;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      EUIPopups = module.EUIPopups;
      EUIScreens = module.EUIScreens;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      UIBackScreen = module.UIBackScreen;
    }, function (module) {
      EMusicId = module.EMusicId;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      exports('EMiniGameType', void 0);

      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3;

      cclegacy._RF.push({}, "e93e1m+GWBGOKwZrpD0i+W3", "MinigameManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EMiniGameType;

      (function (EMiniGameType) {
        EMiniGameType[EMiniGameType["Poker"] = 0] = "Poker";
        EMiniGameType[EMiniGameType["PokerWithDealer"] = 1] = "PokerWithDealer";
      })(EMiniGameType || (EMiniGameType = exports('EMiniGameType', {})));

      var MiniGameInfor = exports('MiniGameInfor', (_dec = ccclass('MiniGameInfor'), _dec2 = property({
        type: Enum(EMiniGameType),
        visible: true
      }), _dec3 = property({
        type: Prefab,
        visible: true
      }), _dec(_class = (_class2 = function MiniGameInfor() {
        _initializerDefineProperty(this, "MiniGameType", _descriptor, this);

        _initializerDefineProperty(this, "MiniGame", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MiniGameType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MiniGame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var MinigameManager = exports('MinigameManager', (_dec4 = ccclass('MinigameManager'), _dec5 = property({
        type: [MiniGameInfor],
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MinigameManager, _Component);

        function MinigameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "minigameInfors", _descriptor3, _assertThisInitialized(_this));

          _this._audioManager = void 0;
          _this._uiManager = void 0;
          _this._currentMiniGame = null;
          return _this;
        }

        var _proto = MinigameManager.prototype;

        _proto.start = function start() {
          this._audioManager = ServiceLocator.get(Define.Service.AudioManager);
          this._uiManager = ServiceLocator.get(Define.Service.UIManager);
        };

        _proto.joinRoom = function joinRoom(minigameType) {
          //this._mockServer.joinRoom('1', UserProfile.Instance.userData);
          this.createGame(minigameType);
        };

        _proto.createGame = function createGame(minigameType) {
          var newNode = instantiate(this.getMiniGame(minigameType));
          newNode.setParent(this.node);
          var comps = newNode.getComponents(Component);

          for (var _iterator = _createForOfIteratorHelperLoose(comps), _step; !(_step = _iterator()).done;) {
            var comp = _step.value;

            if (comp instanceof MiniGame) {
              this._currentMiniGame = comp;
              break;
            }
          }

          if (!this._currentMiniGame) {
            console.error("Prefab is not type Minigame");
            return;
          } //this._currentMiniGame.setNetWork(this._mockServer);
          //this._currentMiniGame.initGame();
          // if(this.currentMiniGame.tryToJoinGame(userData)) {
          //     this.setupGame();
          // }


          this.setupGame();
        };

        _proto.setupGame = /*#__PURE__*/function () {
          var _setupGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._currentMiniGame.initGame();

                    this._uiManager.showPopup(EUIPopups.Loading);

                    this._uiManager.reUpdateUI();

                    _context.next = 5;
                    return AsyncUtils.waitForSeconds(Define.TimeLoadingToMiniGame);

                  case 5:
                    this._uiManager.hidePopup(EUIPopups.Loading);

                    this._audioManager.stopMusic();

                    this._uiManager.showScreenWithReturn(EUIScreens.BackScreen, UIBackScreen).setCallback(function () {
                      _this2._audioManager.playMusic(EMusicId.BGM_Lobby);

                      _this2._uiManager.showScreen(EUIScreens.MainMenu);
                    });

                    this._currentMiniGame.startGame();

                    this._uiManager.reUpdateUI();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function setupGame() {
            return _setupGame.apply(this, arguments);
          }

          return setupGame;
        }();

        _proto.removeGame = function removeGame() {
          this._currentMiniGame.node.destroy();
        };

        _proto.getMiniGame = function getMiniGame(minigameType) {
          var minigameInfor = this.minigameInfors.find(function (m) {
            return m.MiniGameType === minigameType;
          });

          if (!minigameInfor) {
            console.error("Minigame Type is not found");
            return null;
          }

          return minigameInfor.MiniGame;
        };

        _createClass(MinigameManager, [{
          key: "currentMiniGame",
          get: function get() {
            return this._currentMiniGame;
          }
        }]);

        return MinigameManager;
      }(Component), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "minigameInfors", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      exports('WSState', void 0);

      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "27be25o0jVGc4Lzh7iIemny", "NetworkManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // import { ServiceLocator } from './Utility/ServiceLocator';
      // import { BalanceManager } from './BalanceManager';

      var Code = exports('Code', function Code() {});
      Code.LOGIN = 1;
      Code.JOIN_ROOM = 3;
      Code.ROOM_PLUGIN = 5;
      Code.ZONE_PLUGIN = 6;
      var WSState;

      (function (WSState) {
        WSState[WSState["DISCONNECTED"] = 0] = "DISCONNECTED";
        WSState[WSState["CONNECTING"] = 1] = "CONNECTING";
        WSState[WSState["CONNECTED"] = 2] = "CONNECTED";
      })(WSState || (WSState = exports('WSState', {})));

      var NetworkManager = exports('NetworkManager', (_dec = ccclass('NetworkManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetworkManager, _Component);

        function NetworkManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "serverURL", _descriptor, _assertThisInitialized(_this));

          _this._socket = null;
          _this._state = WSState.DISCONNECTED;
          _this._listeners = new Map();
          _this._zone = "PokerZone";
          _this._plugin = "PokerPlugin";
          _this._username = "gamer01";
          _this._password = "gamer01";
          _this._roomId = 0;
          _this._roomPassword = "";
          return _this;
        }

        var _proto = NetworkManager.prototype;

        _proto.onLoad = function onLoad() {
          this.connect();
          this.initialize();
        } // subcribes socket event
        ;

        _proto.connect = function connect() {
          var _this2 = this;

          console.log("Connect");
          this._socket = new WebSocket(this.serverURL);

          this._socket.onopen = function () {
            console.log("✅ WS Connected");
            _this2._state = WSState.CONNECTED;

            _this2.emit("open");
          };

          this._socket.onclose = function () {
            console.warn("❌ WS Closed");
            _this2._state = WSState.DISCONNECTED;

            _this2.emit("close");
          };

          this._socket.onerror = function (e) {
            console.error("❌ WS Error", e);

            _this2.emit("error", e);
          };

          this._socket.onmessage = function (msg) {
            _this2.handleMessage(msg.data);
          };
        };

        _proto.handleMessage = function handleMessage(raw) {
          var data;

          try {
            data = JSON.parse(raw);
          } catch (_unused) {
            return;
          }

          console.log("⬇ Server:", data);
          var opcode = data[0];

          switch (opcode) {
            case Code.LOGIN:
              this.emit("login", {
                success: data[1],
                errorCode: data[2],
                username: data[3],
                zone: data[4],
                balance: data[5]
              }); //ServiceLocator.get<BalanceManager>('BalanceManager').setBalance(data[5]);

              break;

            case Code.ROOM_PLUGIN:
              var payload = data[1];

              if ((payload == null ? void 0 : payload.action) === "rooms") {
                this.emit("rooms", payload.rooms);
              }

              if ((payload == null ? void 0 : payload.action) === "spin") {
                this.emit("spin", payload);
              }

              break;

            case Code.JOIN_ROOM:
              this.emit("joinRoom", {
                success: data[1],
                errorCode: data[2],
                roomId: data[3]
              });
              break;
          }
        };

        _proto.send = function send(arr) {
          if (!this._socket || this._state !== WSState.CONNECTED) return;
          var packet = JSON.stringify(arr);
          console.log("⬆ Client:", arr);

          this._socket.send(packet);
        };

        _proto.login = function login() {
          this.send([Code.LOGIN, this._zone, this._username, this._password, {
            action: "hello"
          }]);
        };

        _proto.getRooms = function getRooms() {
          this.send([Code.ZONE_PLUGIN, this._zone, this._plugin, {
            action: "rooms"
          }]);
        };

        _proto.joinRoom = function joinRoom(roomId, password) {
          this._roomId = roomId;
          this._roomPassword = password;
          this.send([Code.JOIN_ROOM, this._zone, roomId, password]);
        };

        _proto.spin = function spin(bet) {
          if (!this._roomId) {
            console.warn("❌ No room joined yet");
            return;
          }

          this.send([Code.ROOM_PLUGIN, this._zone, this._roomId, {
            action: "spin",
            bet: bet
          }]);
        };

        _proto.on = function on(event, cb) {
          if (!this._listeners.has(event)) {
            this._listeners.set(event, []);
          }

          this._listeners.get(event).push(cb);
        };

        _proto.emit = function emit(event, data) {
          if (!this._listeners.has(event)) return;

          this._listeners.get(event).forEach(function (cb) {
            return cb(data);
          });
        } // subcribe NetworkManager listener
        ;

        _proto.initialize = function initialize() {
          var _this3 = this;

          this.on("open", function () {
            console.log("🧪 Step 1: LOGIN");

            _this3.login();
          });
          this.on("login", function () {
            console.log("🧪 Step 2: GET ROOMS");

            _this3.getRooms();
          });
          this.on("rooms", function (rooms) {
            console.log("🧪 Rooms:", rooms);
            if (!rooms || rooms.length === 0) return;
            var room = rooms[0];
            console.log("🧪 Step 3: JOIN ROOM", room.id);

            _this3.joinRoom(room.id, room.password);
          });
          this.on("joinRoom", function (data) {
            if (!data.success) {
              console.warn("❌ Join failed");
              return;
            } // console.log("🧪 Step 4: SPIN");
            // this.spin(100);

          }); // this.on("spin", (data) => {
          //     console.log("✅ SPIN RESULT:");
          //     console.log("Grid:", data.result?.grid);
          //     console.log("WinLines:", data.result?.winLines);
          //     console.log("WinAmount:", data.winAmount);
          //     console.log("Balance:", data.balance);
          // });
        };

        return NetworkManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverURL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ws://192.168.1.26/websocket";
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenTableInferfaceBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './TableUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, TableUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      TableUI = module.TableUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "81f7eYZEyVD/bpiFOFGxjAi", "OpenTableInferfaceBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var OpenTableInferfaceBehaviour = exports('OpenTableInferfaceBehaviour', (_dec = ccclass('OpenTableInferfaceBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(OpenTableInferfaceBehaviour, _BaseBehaviour);

        function OpenTableInferfaceBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = OpenTableInferfaceBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var pokerUIManager = this.gameplayManager.getUI();
          pokerUIManager.get(TableUI).show();
          this.endBehaviour();
        };

        return OpenTableInferfaceBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenUserInterfaceBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, UserInforUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "547913T9u5OxbJ6Utu33gJo", "OpenUserInterfaceBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var OpenUserInterfaceBehaviour = exports('OpenUserInterfaceBehaviour', (_dec = ccclass('OpenUserInterfaceBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(OpenUserInterfaceBehaviour, _BaseBehaviour);

        function OpenUserInterfaceBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = OpenUserInterfaceBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var pokerUIManager = this.gameplayManager.getUI();
          pokerUIManager.get(UserInforUI).show();
          this.endBehaviour();
        };

        return OpenUserInterfaceBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PhaseManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePhase.ts', './EPhases.ts', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, BasePhase, Phases, GameplayHandler;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }, function (module) {
      BasePhase = module.BasePhase;
    }, function (module) {
      Phases = module.Phases;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "f5effSR7QpAwok42vIytZbC", "PhaseManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PhaseManager = exports('PhaseManager', (_dec = ccclass('PhaseManager'), _dec2 = property({
        type: BasePhase,
        visible: true
      }), _dec3 = property({
        type: BasePhase,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameplayHandler) {
        _inheritsLoose(PhaseManager, _GameplayHandler);

        function PhaseManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameplayHandler.call.apply(_GameplayHandler, [this].concat(args)) || this;
          _this.events = new EventTarget();
          _this.ON_END_ALL_PHASE = 'onEndAllPhase';

          _initializerDefineProperty(_this, "_initPhase", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_phases", _descriptor2, _assertThisInitialized(_this));

          _this._currentPhase = null;
          _this._currentPhaseIndex = 0;
          return _this;
        }

        var _proto = PhaseManager.prototype;

        _proto.getPhase = function getPhase(phaseType) {
          return this._phases.find(function (p) {
            return p.PhaseType === phaseType;
          });
        };

        _proto.init = function init() {
          var _this2 = this;

          this._initPhase.setGameplayManager(this.gameplayManager);

          this._phases.forEach(function (element) {
            element.setGameplayManager(_this2.gameplayManager); //console.log(`Phase init ${element.name} =====================`)
          });
        };

        _proto.resetState = function resetState() {
          this._currentPhaseIndex = 0;

          this._phases.forEach(function (element) {
            element.resetState();
          });
        };

        _proto.initGame = function initGame() {//this._initPhase.startPhase();
        };

        _proto.startGame = function startGame() {
          //start with setup phase
          this.setupGame();
        };

        _proto.nextPhase = function nextPhase() {
          this._currentPhase.events.off(this._currentPhase.ON_END_PHASE, this.nextPhase, this);

          if (this._currentPhaseIndex >= this._phases.length - 1) {
            this.endGame();
            return;
          } //move to next phase


          this._currentPhase = this._phases[++this._currentPhaseIndex];

          this._currentPhase.events.on(this._currentPhase.ON_END_PHASE, this.nextPhase, this);

          console.log("Phase Changed to: " + Phases[this._currentPhase.PhaseType]);

          this._currentPhase.startPhase();
        } //#region Setup Phases
        // First Phase - Setup Phase 
        ;

        _proto.setupGame = function setupGame() {
          //find phase that correct type
          var setupPhase = this.getPhase(Phases.Setup); // check if setup phase not found

          if (setupPhase === null || setupPhase === undefined) {
            console.error("Setup Phase is not found");
            return;
          }

          this._currentPhase = setupPhase;
          setupPhase.events.on(setupPhase.ON_END_PHASE, this.nextPhase, this);
          console.log('Game Started');
          setupPhase.startPhase();
        };

        _proto.endGame = function endGame() {
          var endgamePhase = this.getPhase(Phases.Endgame); // check if end game phase not found

          if (endgamePhase === null || endgamePhase === undefined) {
            console.error("endgame phase is not found");
            return;
          }

          this.events.emit(this.ON_END_ALL_PHASE);
          console.log('Game Ended');
        } //#endregion
        ;

        _proto.endGameImmediately = function endGameImmediately() {
          var endgamePhase = this.getPhase(Phases.Endgame);
          this._currentPhaseIndex = this._phases.length - 1;
          this.events.emit(this.ON_END_ALL_PHASE);
          console.log('Game Ended');
        };

        return PhaseManager;
      }(GameplayHandler), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_initPhase", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_phases", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerGameplayManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BetManager.ts', './PhaseManager.ts', './TableManager.ts', './GameplayHandler.ts', './UserManager.ts', './AsyncUtils.ts', './TableUI.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, BetManager, PhaseManager, TableManager, GameplayHandler, UserManager, AsyncUtils, TableUI, UserInforUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      PhaseManager = module.PhaseManager;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "d2297rSUklL8Ydfum5SNYqD", "PokerGameplayManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerGameplayManager = exports('PokerGameplayManager', (_dec = ccclass('PokerGameplayManager'), _dec2 = property({
        type: GameplayHandler,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerGameplayManager, _Component);

        function PokerGameplayManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_handlers", _descriptor, _assertThisInitialized(_this));

          _this._userManager = void 0;
          _this._betManager = void 0;
          _this._phaseManager = void 0;
          _this._tableManager = void 0;
          _this._pokerUI = void 0;
          _this._initialized = false;
          return _this;
        }

        var _proto = PokerGameplayManager.prototype;

        _proto.getMiniManager = function getMiniManager(managerClass) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._handlers), _step; !(_step = _iterator()).done;) {
            var manager = _step.value;

            if (manager instanceof managerClass) {
              return manager;
            }
          }

          return null;
        };

        _proto.setUI = function setUI(uiManager) {
          this._pokerUI = uiManager;
        };

        _proto.getUI = function getUI() {
          return this._pokerUI;
        };

        _proto.isReadyToStart = function isReadyToStart() {
          return false;
        };

        _proto.initGame = function initGame() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._handlers), _step2; !(_step2 = _iterator2()).done;) {
            var manager = _step2.value;
            manager.setGameplayManager(this);
            manager.init();
          }

          this._userManager = this.getMiniManager(UserManager);
          this._betManager = this.getMiniManager(BetManager);
          this._phaseManager = this.getMiniManager(PhaseManager);
          this._tableManager = this.getMiniManager(TableManager);

          this._betManager.initBet(2, 100);

          this._userManager.numberUserActives = 5;

          this._phaseManager.initGame();

          this._initialized = true;
        };

        _proto.startGame = function startGame() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._handlers), _step3; !(_step3 = _iterator3()).done;) {
            var manager = _step3.value;
            manager.resetState();
          }

          this._phaseManager.events.on(this._phaseManager.ON_END_ALL_PHASE, this.endGame, this);

          if (this._tableManager) {
            this._tableManager.startGame();
          }

          if (this._userManager) {
            this._userManager.startGame();
          }

          if (this._phaseManager) {
            this._phaseManager.startGame();
          }
        };

        _proto.endGame = function endGame() {
          if (this._tableManager) {
            this._tableManager.endGame();
          }

          if (this._userManager) {
            this._userManager.endGame();
          }

          this.startNewRound();
        };

        _proto.getUsersMoney = function getUsersMoney() {
          var moneys = [];

          this._userManager.Users.forEach(function (u) {
            return moneys.push(u.userCurrency.currency);
          });

          return moneys;
        };

        _proto.startNewRound = /*#__PURE__*/function () {
          var _startNewRound = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tableUI;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForSeconds(3);

                  case 2:
                    this.OnCheatAddCurrency();

                    this._pokerUI.resetState();

                    tableUI = this._pokerUI.get(TableUI);
                    tableUI.onStartTimer(3);
                    _context.next = 8;
                    return AsyncUtils.waitForSeconds(3);

                  case 8:
                    this.startGame();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startNewRound() {
            return _startNewRound.apply(this, arguments);
          }

          return startNewRound;
        }() // on cheat flow get curreny 
        ;

        _proto.OnCheatAddCurrency = function OnCheatAddCurrency() {
          this._userManager.Users.forEach(function (u) {
            // If the current currency is 0 or less
            if (u.userCurrency.currency <= 0) {
              // Check if userCurrency.currency is a number that needs to be updated directly
              // OR if it's an object with an 'add' method.
              // OPTION A: If 'currency' is a plain number property (most common):
              u.userCurrency.add(1000);
            }
          });

          var userUI = this._pokerUI.get(UserInforUI);

          var moneys = this.getUsersMoney();

          for (var i = 0; i < moneys.length; i++) {
            userUI.getPanel(i).onUpdateChip(moneys[i]);
          }
        };

        return PokerGameplayManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_handlers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniGame.ts', './PokerUIManager.ts', './PokerGameplayManager.ts', './DowloadHandler.ts', './EUIInfor.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, MiniGame, PokerUIManager, PokerGameplayManager, DowloadHandler, EUIPopups, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      PokerUIManager = module.PokerUIManager;
    }, function (module) {
      PokerGameplayManager = module.PokerGameplayManager;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      EUIPopups = module.EUIPopups;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "12a48EpU7hMw4BEZ27Bzh3t", "PokerManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerManager = exports('PokerManager', (_dec = ccclass('PokerManager'), _dec2 = property({
        type: PokerUIManager,
        visible: true
      }), _dec3 = property({
        type: PokerGameplayManager,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(PokerManager, _MiniGame);

        function PokerManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_pokerUI", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pokerGameplay", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PokerManager.prototype;

        _proto.initGame = function initGame() {
          _MiniGame.prototype.initGame.call(this);

          console.warn('On first init game when created');

          this._pokerGameplay.setUI(this._pokerUI);

          this._pokerGameplay.initGame();

          this._pokerUI.init();

          this.loadUsersMoney();
          this.onLoadLeaderboard();
          this.onLoadRoomID();
        };

        _proto.startGame = function startGame() {
          console.warn('First start game');

          this._pokerUI.resetState();

          this._pokerGameplay.startGame();
        };

        _proto.endGame = function endGame() {};

        _proto.tryToJoinGame = function tryToJoinGame(userData) {
          return true;
        };

        _proto.joinGame = function joinGame(userData) {
          throw new Error('Method not implemented.');
        };

        _proto.loadUsersMoney = function loadUsersMoney() {
          var moneys = this._pokerGameplay.getUsersMoney();

          this._pokerUI.loadUserCurrency(moneys);
        };

        _proto.onLoadRoomID = function onLoadRoomID() {
          var roomId = '';
          var desiredLength = 10;

          for (var i = 0; i < desiredLength; i++) {
            // Generates a random integer from 0 up to, but not including, 10 (i.e., 0-9)
            var digit = Math.floor(Math.random() * 10);
            roomId += digit.toString();
          }

          this._pokerUI.loadRoomID(roomId);
        };

        _proto.fetchLeaderboard = /*#__PURE__*/function () {
          var _fetchLeaderboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var url;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = "https://res.cloudinary.com/doatgdqwk/raw/upload/v1764058835/Test_yuc2t8.json";
                    _context.next = 3;
                    return DowloadHandler.DownloadJSONByUrl(url);

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function fetchLeaderboard() {
            return _fetchLeaderboard.apply(this, arguments);
          }

          return fetchLeaderboard;
        }();

        _proto.onLoadLeaderboard = /*#__PURE__*/function () {
          var _onLoadLeaderboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ServiceLocator.get(Define.Service.UIManager).showPopup(EUIPopups.Loading);
                    _context2.prev = 1;
                    _context2.next = 4;
                    return this.fetchLeaderboard();

                  case 4:
                    data = _context2.sent;

                    if (data) {
                      this.cheatLoadDataUser(data);
                    }

                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](1);
                    console.error("[UILeaderboard] Failed to load leaderboard:", _context2.t0);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 8]]);
          }));

          function onLoadLeaderboard() {
            return _onLoadLeaderboard.apply(this, arguments);
          }

          return onLoadLeaderboard;
        }();

        _proto.cheatLoadDataUser = function cheatLoadDataUser(data) {
          var _this2 = this;

          this._pokerUI.loadUser();

          data.players.forEach(function (player) {
            _this2._pokerUI.loadPlayer(player);
          });
        };

        return PokerManager;
      }(MiniGame), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_pokerUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_pokerGameplay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerSimpleAI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CheckHandRank.ts', './EUserOptions.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, CheckHandRank, EUserOptions;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "3c74f81I8lP1LynUPKgh3nE", "PokerSimpleAI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerSimpleAI = exports('PokerSimpleAI', (_dec = ccclass('PokerSimpleAI'), _dec2 = property({
        tooltip: "Aggression factor (0.0 to 1.0). Higher means more bluffs."
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerSimpleAI, _Component);

        function PokerSimpleAI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "aggression", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PokerSimpleAI.prototype;
        /**
         * Main entry point for the NPC to make a decision.
         * Call this from your GameManager when it's the NPC's turn.
         */

        _proto.getDecision = function getDecision(hand, tableCard, currentBetToCall, myChips) {
          var strength = CheckHandRank.evaluateHandStrength(hand, tableCard);
          var randomFactor = Math.random();
          console.log("[PokerAI] Hand Strength: " + strength + ", Cost to Call: " + currentBetToCall + ", Chips: " + myChips);
          var action = EUserOptions.Fold;
          var amount = 0; // --- DECISION LOGIC TREE ---
          // 1. MONSTER HAND (Strength > 60)
          // e.g., High Sets, Straights, Flushes

          if (strength > 60) {
            action = EUserOptions.Raise; // Raise logic: Match bet + 25% of current chips or 50, whichever is smaller/safer

            var raiseAmt = Math.floor(Math.min(myChips * 0.25, 100));
            amount = currentBetToCall + raiseAmt;
          } // 2. GOOD HAND (Strength > 30)
          // e.g., Top Pair, High Pocket Pair
          else if (strength > 30) {
              // If it's too expensive, might fold even with good hand (conservative)
              if (currentBetToCall > myChips * 0.4 && randomFactor > 0.8) {
                action = EUserOptions.Fold;
              } else {
                // Mix between calling and raising
                if (currentBetToCall > 0) {
                  action = EUserOptions.Call; // Occasional raise for value

                  if (randomFactor < 0.3) {
                    action = EUserOptions.Raise;
                    amount = currentBetToCall + 20;
                  }
                } else {
                  action = EUserOptions.Raise; // Bet for value if checked to

                  amount = 20;
                }
              }
            } // 3. MEDIOCRE HAND (Strength > 15)
            // e.g., Middle pair, Low Pocket Pair
            else if (strength > 15) {
                if (currentBetToCall < myChips * 0.1) {
                  action = EUserOptions.Call; // Cheap to see next card
                } else if (currentBetToCall === 0) {
                  action = EUserOptions.Check;
                } else {
                  action = EUserOptions.Fold;
                }
              } // 4. TRASH HAND
              else {
                  if (currentBetToCall === 0) {
                    action = EUserOptions.Check;
                  } else if (randomFactor < this.aggression) {
                    // BLUFF OPPORTUNITY
                    console.log("[PokerAI] Attempting Bluff");
                    action = EUserOptions.Raise;
                    amount = currentBetToCall + 50;
                  } else {
                    action = EUserOptions.Fold;
                  }
                } // --- SANITIZE OUTPUT ---


          if (action === EUserOptions.Call && currentBetToCall === 0) {
            action = EUserOptions.Check;
          } // Cannot raise more than we have


          if ((action === EUserOptions.Raise || action === EUserOptions.Call) && (amount > myChips || currentBetToCall > myChips)) {
            action = EUserOptions.AllIn;
            amount = myChips;
          }

          return {
            action: action,
            amount: amount
          };
        };

        return PokerSimpleAI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "aggression", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b3ae6Ahx7NIarGC/go7zvn9", "PokerUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerUI = exports('PokerUI', (_dec = ccclass('PokerUI'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerUI, _Component);

        function PokerUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));

          _this.uiManager = null;
          _this._audio = null;
          _this._poolManager = null;
          return _this;
        }

        var _proto = PokerUI.prototype;

        _proto.setUIManager = function setUIManager(uiManager) {
          this.uiManager = uiManager;
        };

        _proto.init = function init() {};

        _proto.resetState = function resetState() {} //#region node Methods
        ;

        _proto.show = function show() {
          this.panel.active = true;
          this.onShow();
        }
        /** Called when UI is hidden */
        ;

        _proto.hide = function hide() {
          this.onHide();
          this.panel.active = false;
        }
        /** Optional override for when showing */
        ;

        _proto.onShow = function onShow() {}
        /** Optional override for when hiding */
        ;

        _proto.onHide = function onHide() {}
        /** Optional cleanup or animation finished */
        ;

        _proto.onDestroyUI = function onDestroyUI() {} //#endregion        
        ;

        _createClass(PokerUI, [{
          key: "audio",
          get: function get() {
            if (!this._audio) {
              this._audio = ServiceLocator.get(Define.Service.MinigameAudio);
            }

            return this._audio;
          }
        }, {
          key: "poolManager",
          get: function get() {
            if (!this._poolManager) {
              this._poolManager = ServiceLocator.get(Define.Service.PoolManager);
            }

            return this._poolManager;
          }
        }]);

        return PokerUI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerUIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserInforUI.ts', './PokerUI.ts', './TableUI.ts', './AsyncUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Canvas, Component, UserInforUI, PokerUI, TableUI, AsyncUtils, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Canvas = module.Canvas;
      Component = module.Component;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      PokerUI = module.PokerUI;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "4733avlpp1L8aY+fJSS5R23", "PokerUIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerUIManager = exports('PokerUIManager', (_dec = ccclass('PokerUIManager'), _dec2 = property({
        type: PokerUI,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerUIManager, _Component);

        function PokerUIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_baseUIs", _descriptor, _assertThisInitialized(_this));

          _this._userProfile = null;
          _this.count = 1;
          return _this;
        }

        var _proto = PokerUIManager.prototype;

        _proto.init = function init() {
          var _this2 = this;

          this._userProfile = ServiceLocator.get(Define.Service.UserProfile);
          var cameraManager = ServiceLocator.get(Define.Service.CameraManager);
          this.getComponent(Canvas).cameraComponent = cameraManager.uiCamera;

          this._baseUIs.forEach(function (ui) {
            ui.init();
            ui.setUIManager(_this2);
          });
        };

        _proto.resetState = function resetState() {
          this._baseUIs.forEach(function (ui) {
            return ui.resetState();
          });
        };

        _proto.get = function get(type) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._baseUIs), _step; !(_step = _iterator()).done;) {
            var ui = _step.value;

            if (ui instanceof type) {
              return ui;
            }
          }

          console.warn("[PokerUIManager] UI not found: " + type.name);
          return null;
        };

        _proto.onLoad = function onLoad() {
          this._baseUIs.forEach(function (ui) {
            ui.hide();
          });
        };

        _proto.loadUserCurrency = function loadUserCurrency(moneys) {
          var userInforUI = this.get(UserInforUI);

          for (var i = 0; i < moneys.length; i++) {
            userInforUI.getPanel(i).onUpdateChip(moneys[i]);
          }
        };

        _proto.loadRoomID = function loadRoomID(roomID) {
          var tableUI = this.get(TableUI);
          tableUI.onSetUIRoomInfor(roomID);
        };

        _proto.loadPlayer = /*#__PURE__*/function () {
          var _loadPlayer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var userInforUI, panel;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    userInforUI = this.get(UserInforUI);
                    panel = userInforUI.getPanel(this.count);

                    if (panel) {
                      panel.onSetUserDataUI(data.playerName, data.playerAvatarUrl);
                    }

                    this.count++;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadPlayer(_x) {
            return _loadPlayer.apply(this, arguments);
          }

          return loadPlayer;
        }();

        _proto.loadUser = /*#__PURE__*/function () {
          var _loadUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;

            var userInforUI;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this3._userProfile != null;
                    });

                  case 2:
                    userInforUI = this.get(UserInforUI);
                    userInforUI.getPanel(0).onSetUserDataUI(this._userProfile.userData.userName, this._userProfile.userData.avatarUrl);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function loadUser() {
            return _loadUser.apply(this, arguments);
          }

          return loadUser;
        }();

        return PokerUIManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_baseUIs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerUser.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUserOptions.ts', './UserCurrency.ts', './PokerSimpleAI.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, Component, EUserOptions, UserCurrency, PokerSimpleAI, AsyncUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      UserCurrency = module.UserCurrency;
    }, function (module) {
      PokerSimpleAI = module.PokerSimpleAI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "bacc0MYkiBHV5eDu5kJCmG5", "PokerUser", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerUser = exports('PokerUser', (_dec = ccclass('PokerUser'), _dec2 = property({
        type: UserCurrency,
        visible: true
      }), _dec3 = property({
        type: PokerSimpleAI,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerUser, _Component);

        function PokerUser() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userCurrency", _descriptor, _assertThisInitialized(_this));

          _this.events = new EventTarget();
          _this.ON_START_GAME = 'onStartGame';
          _this.ON_END_GAME = 'onEndGame';
          _this.ON_START_TURN = 'onStartTurn';
          _this.ON_END_TURN = 'onEndTurn';
          _this.ON_RECEIVE_CARD = 'onReceiveCard';
          _this.ON_CHOOSING_OPTION = 'onChoosingOption';
          _this.ON_WIN = 'onWin';
          _this._currentRole = null;
          _this._currentTableBet = 0;
          _this._currentBet = 0;
          _this._totalEarn = 0;
          _this._isFold = false;
          _this._isAllIn = false;
          _this._userPokerID = '';
          _this.cards = [];

          _initializerDefineProperty(_this, "_pokerAI", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PokerUser.prototype;

        _proto.clearCards = function clearCards() {
          this.cards = [];
        };

        _proto.receiveCard = function receiveCard(card) {
          this.cards.push(card);
          this.events.emit(this.ON_RECEIVE_CARD, card);
          console.log("User " + this.node.name + " received card: " + card.rank + " of " + card.suit);
        };

        _proto.addRole = function addRole(roleClass) {
          this._currentRole = this.node.addComponent(roleClass);
        };

        _proto.removeRole = function removeRole() {
          if (this._currentRole === null) return;
          this.node.removeComponent(this._currentRole);
          this._currentRole = null;
        };

        _proto.isSkip = function isSkip() {
          return this._isFold || this._isAllIn;
        };

        _proto.setTableBet = function setTableBet(currentTableBet) {
          this._currentTableBet = currentTableBet;
        };

        _proto.hasCallOptions = function hasCallOptions(currentTableBet) {
          return currentTableBet > this._currentBet;
        };

        _proto.startGame = function startGame() {
          this._currentBet = 0;
          this._isAllIn = !(this._userCurrency.currency > 0);
          this.events.emit(this.ON_START_GAME);
        };

        _proto.endGame = function endGame() {
          this._totalEarn = 0;
          this.events.emit(this.ON_END_GAME);
        };

        _proto.startTurn = function startTurn() {
          this.events.emit(this.ON_START_TURN);
        };

        _proto.endTurn = function endTurn() {
          this.events.emit(this.ON_END_TURN);
        };

        _proto.doBet = function doBet(value) {
          this._currentBet += value;
          return this._userCurrency.substract(value);
        };

        _proto.fold = function fold() {
          console.log(this.node.name + " choose Fold");
          this.IsFold = true;
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.Fold);
        };

        _proto.call = function call() {
          console.log(this.node.name + " choose Call");
          var betValue = this.amountNeedToBet;
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.Call, betValue);
          this._isAllIn = this.doBet(betValue);
          return betValue;
        };

        _proto.check = function check() {
          console.log(this.node.name + " choose Check");
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.Check);
        };

        _proto.raise = function raise(raiseValue) {
          console.log(this.node.name + " choose Raise");
          var totalBet = raiseValue + this._currentTableBet;
          var betValue = totalBet - this._currentBet;
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.Raise, betValue, raiseValue);
          this._isAllIn = this.doBet(betValue);
          return betValue;
        };

        _proto.allIn = function allIn() {
          console.log(this.node.name + " choose All In with " + this._userCurrency.currency);
          var betValue = this._userCurrency.currency;
          var raiseValue = this._userCurrency.currency - this.amountNeedToBet;
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.AllIn, betValue, raiseValue);
          this._isAllIn = this.doBet(betValue);
          return [betValue, raiseValue];
        };

        _proto.showHand = function showHand() {
          console.log(this.node.name + " choose show");
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.ShowHand);
        };

        _proto.getWinBet = function getWinBet() {
          if (this._totalEarn <= 0) return;

          this._userCurrency.add(this._totalEarn);

          console.log(this.node.name + " wins, total earn: " + this.TotalEarn + " and now has " + this._userCurrency.currency);
          this.events.emit(this.ON_WIN);
        } //#region on Cheat AI
        // Poker AI On Cheat Test
        ;

        _proto.onAIStartTurn = function onAIStartTurn(tableHand, callback) {
          this.events.emit(this.ON_START_TURN);

          if (this._pokerAI != null) {
            this.onWaitNPCDecision(tableHand, callback);
          }
        };

        _proto.onWaitNPCDecision = /*#__PURE__*/function () {
          var _onWaitNPCDecision = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tableHand, callback) {
            var minWait, maxWait, randomTime, decision;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // 1. Simulate AI thinking time
                    // Define your range
                    minWait = 0.5; // Minimum wait time

                    maxWait = 3; // Maximum wait time
                    // Calculate random time: (0..1 * range) + offset

                    randomTime = Math.random() * (maxWait - minWait) + minWait;
                    _context.next = 5;
                    return AsyncUtils.waitForSeconds(randomTime);

                  case 5:
                    // 2. Calculate the decision
                    decision = this._pokerAI.getDecision(this.cards, tableHand, this.amountNeedToBet, this._userCurrency.currency - this._currentBet); // 3. Pass the result to the Game Controller via the callback.
                    // We pass the action AND the amount (needed if the action is Raise or AllIn)

                    if (callback) {
                      callback(decision.action, decision.amount);
                    }

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onWaitNPCDecision(_x, _x2) {
            return _onWaitNPCDecision.apply(this, arguments);
          }

          return onWaitNPCDecision;
        }() //#endregion
        ;

        _createClass(PokerUser, [{
          key: "IsFold",
          get: //#region Getters Setters
          function get() {
            return this._isFold;
          },
          set: function set(value) {
            this.node.active = !value;
            this._isFold = value;
          }
        }, {
          key: "getRaiseAvailable",
          get: function get() {
            return this._userCurrency.currency - this.amountNeedToBet;
          }
        }, {
          key: "IsAllIn",
          get: function get() {
            return this._isAllIn;
          },
          set: function set(value) {
            this._isAllIn = value;
          }
        }, {
          key: "CurrentBet",
          get: function get() {
            return this._currentBet;
          }
        }, {
          key: "TotalEarn",
          get: function get() {
            return this._totalEarn;
          },
          set: function set(value) {
            this._totalEarn = value;
          }
        }, {
          key: "amountNeedToBet",
          get: function get() {
            return this._currentTableBet - this._currentBet;
          }
        }, {
          key: "canRaise",
          get: function get() {
            return this.userCurrency.currency !== this.amountNeedToBet;
          }
        }, {
          key: "UserPokerID",
          get: function get() {
            return this.UserPokerID;
          },
          set: function set(value) {
            this._userPokerID = value;
          } //#endregion

        }, {
          key: "userCurrency",
          get: function get() {
            return this._userCurrency;
          }
        }, {
          key: "CurrentTableBet",
          get: function get() {
            return this._currentTableBet;
          }
        }, {
          key: "PokerAI",
          get: function get() {
            return this._pokerAI;
          }
        }]);

        return PokerUser;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userCurrency", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_pokerAI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolAsset.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Enum, Prefab;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
    }],
    execute: function () {
      exports('EPoolType', void 0);

      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3;

      cclegacy._RF.push({}, "f8fbc0NMgRPsbHDPLmZczfn", "PoolAsset", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EPoolType;

      (function (EPoolType) {
        EPoolType[EPoolType["FloatingText"] = 0] = "FloatingText";
        EPoolType[EPoolType["CardEffect"] = 1] = "CardEffect";
        EPoolType[EPoolType["AudioPlaying"] = 2] = "AudioPlaying";
        EPoolType[EPoolType["Chip"] = 3] = "Chip";
        EPoolType[EPoolType["ChipGroup"] = 4] = "ChipGroup";
      })(EPoolType || (EPoolType = exports('EPoolType', {})));

      var PoolData = exports('PoolData', (_dec = ccclass('PoolData'), _dec2 = property({
        type: Enum(EPoolType)
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = function PoolData() {
        _initializerDefineProperty(this, "PoolType", _descriptor, this);

        _initializerDefineProperty(this, "PrefabSpawn", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PoolType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PrefabSpawn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var PoolAsset = exports('PoolAsset', (_dec4 = ccclass('PoolAsset'), _dec5 = property({
        type: [PoolData]
      }), _dec4(_class4 = (_class5 = function PoolAsset() {
        _initializerDefineProperty(this, "Datas", _descriptor3, this);
      }, _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "Datas", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PoolAsset.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Component, PoolAsset;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PoolAsset = module.PoolAsset;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "cb84egdEjdH16wZ7Wz9pZ85", "PoolManager", undefined);

      var property = _decorator.property,
          ccclass = _decorator.ccclass;
      var PoolManager = exports('PoolManager', (_dec = ccclass('PoolManager'), _dec2 = property({
        type: PoolAsset,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PoolManager, _Component);

        function PoolManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_poolAsset", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pool", _descriptor2, _assertThisInitialized(_this));

          _this._poolMap = new Map();
          return _this;
        }

        var _proto = PoolManager.prototype;

        _proto.spawnNodeByType = function spawnNodeByType(poolType, parent) {
          var prefab = this._poolAsset.Datas.find(function (d) {
            return d.PoolType === poolType;
          }).PrefabSpawn;

          if (!prefab) {
            console.error('Prefab not found');
            return null;
          }

          return this.spawnNode(prefab, parent);
        };

        _proto.spawnNode = function spawnNode(prefab, parent) {
          var name = prefab.name;

          var pool = this._poolMap.get(name);

          var node;

          if (pool && pool.length > 0) {
            node = pool.pop();
          } else {
            node = instantiate(prefab);
          }

          if (parent) {
            node.parent = parent;
          }

          node.active = true;
          return node;
        };

        _proto.despawnNode = function despawnNode(node) {
          if (!node || !node.isValid) {
            return;
          }

          var name = node.name;

          if (!this._poolMap.has(name)) {
            this._poolMap.set(name, []);
          }

          node.active = false;
          node.parent = this._pool;

          this._poolMap.get(name).push(node);
        };

        _proto.clearAll = function clearAll() {
          this._poolMap.clear();
        };

        return PoolManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_poolAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_pool", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PositionUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f7129TCIQxBT5h9xxlGUIUh", "PositionUtils", undefined);

      var PositionUtils = exports('PositionUtils', /*#__PURE__*/function () {
        function PositionUtils() {}
        /**
         * Lấy danh sách vị trí xếp thành hình tròn xung quanh một điểm.
         * @param center Vị trí tâm
         * @param count Số lượng điểm cần lấy
         * @param radius Bán kính vòng tròn
         * @returns Mảng các Vec3
         */


        PositionUtils.getPositionsCircle = function getPositionsCircle(center, count, radius) {
          var results = [];
          if (count <= 0) return results; // Góc giữa các điểm (tính bằng radian)

          var angleStep = 2 * Math.PI / count;

          for (var i = 0; i < count; i++) {
            var angle = i * angleStep; // Công thức lượng giác: x = r * cos(a), y = r * sin(a)

            var x = center.x + radius * Math.cos(angle);
            var y = center.y + radius * Math.sin(angle); // Giữ nguyên Z của tâm

            results.push(new Vec3(x, y, center.z));
          }

          return results;
        }
        /**
         * Lấy danh sách vị trí ngẫu nhiên xung quanh một điểm (kiểu rải vụn/nổ)
         * @param center Vị trí tâm
         * @param count Số lượng điểm
         * @param minRadius Bán kính tối thiểu (để không bị dính vào tâm)
         * @param maxRadius Bán kính tối đa
         */
        ;

        PositionUtils.getPositionsRandom = function getPositionsRandom(center, count, minRadius, maxRadius) {
          var results = [];

          for (var i = 0; i < count; i++) {
            // Random góc bất kỳ
            var angle = Math.random() * 2 * Math.PI; // Random khoảng cách từ tâm

            var distance = minRadius + Math.random() * (maxRadius - minRadius);
            var x = center.x + distance * Math.cos(angle);
            var y = center.y + distance * Math.sin(angle);
            results.push(new Vec3(x, y, center.z));
          }

          return results;
        };

        return PositionUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Pot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "ffcedQH3QtPrLvhQ4k34uXv", "Pot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Pot = exports('Pot', (_dec = ccclass('Pot'), _dec(_class = /*#__PURE__*/function () {
        function Pot(amount, users) {
          if (amount === void 0) {
            amount = 0;
          }

          if (users === void 0) {
            users = [];
          }

          this._potAmount = 0;
          this._users = [];
          this._potAmount = amount;
          this._users = users;
        }

        _createClass(Pot, [{
          key: "PotAmount",
          get: function get() {
            return this._potAmount;
          },
          set: function set(amount) {
            this._potAmount = amount;
          }
        }, {
          key: "Users",
          get: function get() {
            return this._users;
          },
          set: function set(users) {
            this._users = users;
          }
        }]);

        return Pot;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleAssigner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BigBlind.ts', './Dealer.ts', './SmallBlind.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, BigBlind, Dealer, SmallBlind;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BigBlind = module.BigBlind;
    }, function (module) {
      Dealer = module.Dealer;
    }, function (module) {
      SmallBlind = module.SmallBlind;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd3a3T9ylpIZIzP38Tu61hD", "RoleAssigner", undefined);

      var RoleAssigner = exports('RoleAssigner', /*#__PURE__*/function () {
        function RoleAssigner(userManager) {
          this._dealerIndex = -1;
          this.userManager = userManager;
          this.init();
        }

        var _proto = RoleAssigner.prototype;

        _proto.init = function init() {
          this._dealerIndex = -1;
        };

        _proto.getDealerIndex = function getDealerIndex() {
          return this._dealerIndex;
        };

        _proto.assignDealer = function assignDealer() {
          var users = this.userManager.activeUsers;
          if (!users.length) return;
          this._dealerIndex = (this._dealerIndex + 1) % users.length;

          users[this._dealerIndex].addRole(Dealer);
        };

        _proto.assignBlinds = function assignBlinds() {
          var users = this.userManager.activeUsers;
          if (users.length < 3) return;
          var sIndex = this.smallBlindIndex;
          var bIndex = this.bigBlindIndex;
          users[sIndex].addRole(SmallBlind);
          users[bIndex].addRole(BigBlind);
          console.warn("Assigned small blind: " + sIndex + ", big blind: " + bIndex);
        };

        _createClass(RoleAssigner, [{
          key: "smallBlindIndex",
          get: function get() {
            var users = this.userManager.activeUsers;
            if (!users.length) return -1;
            return (this._dealerIndex + 1) % users.length;
          }
        }, {
          key: "bigBlindIndex",
          get: function get() {
            var users = this.userManager.activeUsers;
            if (!users.length) return -1;
            return (this._dealerIndex + 2) % users.length;
          }
        }]);

        return RoleAssigner;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c630fiRR7ZCBrRTKCkDVn16", "RoomManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RoomManager = exports('RoomManager', (_dec = ccclass('RoomManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomManager, _Component);

        function RoomManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._users = [];
          return _this;
        }

        return RoomManager;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, quat, Quat, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      quat = module.quat;
      Quat = module.Quat;
      Component = module.Component;
    }],
    execute: function () {
      exports('EAxis', void 0);

      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b66a44l5xRCHr5ch9M7pRaF", "RotateObject", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EAxis;

      (function (EAxis) {
        EAxis[EAxis["X"] = 0] = "X";
        EAxis[EAxis["Y"] = 1] = "Y";
        EAxis[EAxis["Z"] = 2] = "Z";
      })(EAxis || (EAxis = exports('EAxis', {})));

      var RotateObject = exports('RotateObject', (_dec = ccclass('RotateObject'), _dec2 = property({
        type: Enum(EAxis),
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateObject, _Component);

        function RotateObject() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_rotateAxis", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_rotateSpeed", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isReverse", _descriptor3, _assertThisInitialized(_this));

          _this._tempQuat = quat();
          _this._isRotate = false;
          return _this;
        }

        var _proto = RotateObject.prototype;

        _proto.setRotate = function setRotate(isRotate) {
          this._isRotate = isRotate;
        };

        _proto.update = function update(dt) {
          if (!this._isRotate) return;
          var rotationAmount = this._rotateSpeed * dt * (this._isReverse ? -1 : 1);

          switch (this._rotateAxis) {
            case EAxis.X:
              Quat.fromEuler(this._tempQuat, rotationAmount, 0, 0);
              break;

            case EAxis.Y:
              Quat.fromEuler(this._tempQuat, 0, rotationAmount, 0);
              break;

            case EAxis.Z:
              Quat.fromEuler(this._tempQuat, 0, 0, rotationAmount);
              break;
          }

          this.node.rotate(this._tempQuat);
        };

        return RotateObject;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rotateAxis", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rotateSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_isReverse", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rotating.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAnimation.ts', './Tweener.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, NodeEventType, Vec3, Quat, BaseAnimation, Tweener, ERotateType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      NodeEventType = module.NodeEventType;
      Vec3 = module.Vec3;
      Quat = module.Quat;
    }, function (module) {
      BaseAnimation = module.BaseAnimation;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ERotateType = module.ERotateType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "5f30a9xzmtGobta3XkkHcUs", "Rotating", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Rotating = exports('Rotating', (_dec = ccclass('Rotating'), _dec2 = property({
        type: Enum(ERotateType),
        visible: true
      }), _dec3 = property({
        visible: function visible() {
          return this._rotateType === ERotateType.RotateEulerBetween || this._rotateType === ERotateType.RotateEulerTo;
        }
      }), _dec4 = property({
        visible: function visible() {
          return this._rotateType === ERotateType.RotateEulerBetween || this._rotateType === ERotateType.RotateEulerTo;
        }
      }), _dec5 = property({
        visible: function visible() {
          return this._rotateType === ERotateType.RotateQuatBetween || this._rotateType === ERotateType.RotateQuatTo;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this._rotateType === ERotateType.RotateQuatBetween || this._rotateType === ERotateType.RotateQuatTo;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAnimation) {
        _inheritsLoose(Rotating, _BaseAnimation);

        function Rotating() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAnimation.call.apply(_BaseAnimation, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_rotateType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_eulerStart", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_eulerEnd", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_quatStart", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_quatEnd", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Rotating.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onDestroy = function onDestroy() {
          this.node.off(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.off(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onEnable = function onEnable() {
          if (this.PlayOnEnable) this.play();
        };

        _proto.onHoverEnter = function onHoverEnter(e) {
          if (this.PlayWhenHover) this.play();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (this.PlayWhenHover) this.stopAll();
        } //#region  ITween Interface
        ;

        _proto.play = function play() {
          switch (this._rotateType) {
            case ERotateType.RotateEulerTo:
              this.RotateEulerTo();
              break;

            case ERotateType.RotateEulerBetween:
              this.RotateEulerBetween();
              break;

            case ERotateType.RotateQuatTo:
              this.RotateQuatTo();
              break;

            case ERotateType.RotateQuatBetween:
              this.RotateQuatBetween();
              break;
          }
        };

        _proto.stop = function stop() {
          Tweener.stop(this.node);
        };

        _proto.stopAll = function stopAll() {
          Tweener.stopAll(this.node);
        } //#endregion
        //#region Methods
        ;

        _proto.RotateEulerTo = function RotateEulerTo() {
          Tweener.LocalRotateEuler(this.node, this._eulerStart, this._eulerEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.RotateEulerBetween = function RotateEulerBetween() {
          Tweener.LocalRotateEulerBetween(this.node, this._eulerStart, this._eulerEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.RotateQuatTo = function RotateQuatTo() {
          Tweener.LocalRotateQuat(this.node, this._quatStart, this._quatEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.RotateQuatBetween = function RotateQuatBetween() {
          Tweener.LocalRotateQuatBetween(this.node, this._quatStart, this._quatEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        } //#endregion
        ;

        return Rotating;
      }(BaseAnimation), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rotateType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ERotateType.RotateEulerBetween;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_eulerStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_eulerEnd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_quatStart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Quat();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_quatEnd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Quat();
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Scaling.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tweener.ts', './BaseAnimation.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, NodeEventType, Vec3, Tweener, BaseAnimation, EScaleType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      NodeEventType = module.NodeEventType;
      Vec3 = module.Vec3;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      BaseAnimation = module.BaseAnimation;
    }, function (module) {
      EScaleType = module.EScaleType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "4abcakFUyBJcb1jnP9NJ4gW", "Scaling", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Scaling = exports('Scaling', (_dec = ccclass('Scaling'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        type: Enum(EScaleType),
        visible: function visible() {
          return !this.PlayWhenHover;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAnimation) {
        _inheritsLoose(Scaling, _BaseAnimation);

        function Scaling() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAnimation.call.apply(_BaseAnimation, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_scaleStart", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_scaleEnd", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_scalingType", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Scaling.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onDestroy = function onDestroy() {
          this.node.off(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.off(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onEnable = function onEnable() {
          if (this.PlayOnEnable) {
            this.play();
          }
        };

        _proto.onHoverEnter = function onHoverEnter(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Enter");

          this.scaleUp();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Exit");

          this.scaleDown();
        } //#region Interface Tween

        /** Public method to trigger fade animation manually */
        ;

        _proto.play = function play() {
          switch (this._scalingType) {
            case EScaleType.ScaleUp:
              this.scaleUp();
              break;

            case EScaleType.ScaleDown:
              this.scaleDown();
              break;

            case EScaleType.ScaleUpDown:
              this.scaleUpDown();
              break;
          }
        };

        _proto.stop = function stop() {
          Tweener.stop(this.node);
        } // // this is valid when > cocos 3.8
        // public pause() {
        // }
        // public resume() {
        // }
        ;

        _proto.stopAll = function stopAll() {
          Tweener.stopAll(this.node);
        } //#endregion
        ;

        _proto.scaleUp = function scaleUp() {
          Tweener.LocalScale(this.node, this._scaleStart, this._scaleEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.scaleDown = function scaleDown() {
          Tweener.LocalScale(this.node, this._scaleEnd, this._scaleStart, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        _proto.scaleUpDown = function scaleUpDown() {
          // Scale up first, then scale down
          Tweener.LocalScaleCycle(this.node, this._scaleStart, this._scaleEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
        };

        return Scaling;
      }(BaseAnimation), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_scaleStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_scaleEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_scalingType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EScaleType.ScaleUp;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceInstaller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts'], function () {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ServiceLocator;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "cdc50uSoc9OUqnxH9BEftga", "ServiceInstaller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ServiceInstaller = (_dec = ccclass('ServiceInstaller'), _dec2 = property([Component]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ServiceInstaller, _Component);

        function ServiceInstaller() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "services", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ServiceInstaller.prototype;

        _proto.onLoad = function onLoad() {
          this.services.forEach(function (service) {
            if (!service) return;
            var key = service.serviceId;

            if (!key) {
              key = service.constructor.name;
              console.log(key);
            }

            ServiceLocator.register(key, service);
          });
        };

        _proto.onDestroy = function onDestroy() {
          this.services.forEach(function (service) {
            if (!service) return;
            var key = service.serviceId || service.constructor.name;
            ServiceLocator.unregister(key);
          });
        };

        return ServiceInstaller;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "services", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceLocator.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, warn, log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      warn = module.warn;
      log = module.log;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83a2aP2E3RBB4WtNTWeyNZ7", "ServiceLocator", undefined);

      var ServiceLocator = exports('ServiceLocator', /*#__PURE__*/function () {
        function ServiceLocator() {}
        /**
         * Đăng ký Service
         * @param key Tên định danh (String)
         * @param service Instance của class/component thực thi
         */


        ServiceLocator.register = function register(key, service) {
          if (this._services.has(key)) {
            warn("[ServiceLocator] Key '" + key + "' \u0111\xE3 t\u1ED3n t\u1EA1i. \u0110ang ghi \u0111\xE8...");
          }

          this._services.set(key, service);

          log("[ServiceLocator] \u0110\xE3 \u0111\u0103ng k\xFD: " + key);
        }
        /**
         * Lấy Service và tự động ép kiểu sang Interface T
         * @param key Tên định danh
         */
        ;

        ServiceLocator.get = function get(key) {
          if (!this._services.has(key)) {
            warn("[ServiceLocator] Kh\xF4ng t\xECm th\u1EA5y service v\u1EDBi key: '" + key + "'");
            return null;
          }

          return this._services.get(key);
        }
        /**
         * Hủy đăng ký 1 service cụ thể
         */
        ;

        ServiceLocator.unregister = function unregister(key) {
          if (this._services.has(key)) {
            this._services["delete"](key);

            log("[ServiceLocator] \u0110\xE3 h\u1EE7y: " + key);
          }
        }
        /**
         * Xóa sạch (Dùng khi reset game)
         */
        ;

        ServiceLocator.clear = function clear() {
          this._services.clear();

          log("[ServiceLocator] \u0110\xE3 x\xF3a to\xE0n b\u1ED9 services.");
        };

        return ServiceLocator;
      }());
      ServiceLocator._services = new Map();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SetStartTurnBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, BaseBehaviour, UserManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      UserManager = module.UserManager;
    }],
    execute: function () {
      exports('EStartFrom', void 0);

      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "948fejLpYtJJ7nFai6jSXnc", "SetStartTurnBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EStartFrom;

      (function (EStartFrom) {
        EStartFrom[EStartFrom["SmallBlind"] = 0] = "SmallBlind";
        EStartFrom[EStartFrom["UserNextBigBlind"] = 1] = "UserNextBigBlind";
        EStartFrom[EStartFrom["Showhand"] = 2] = "Showhand";
      })(EStartFrom || (EStartFrom = exports('EStartFrom', {})));

      var SetStartTurnBehaviour = exports('SetStartTurnBehaviour', (_dec = ccclass('SetUserStartTurnBehaviour'), _dec2 = property({
        type: Enum(EStartFrom),
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(SetStartTurnBehaviour, _BaseBehaviour);

        function SetStartTurnBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userStartFrom", _descriptor, _assertThisInitialized(_this));

          _this._userManager = null;
          return _this;
        }

        var _proto = SetStartTurnBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          this._userManager = this.gameplayManager.getMiniManager(UserManager);
          var beginIndex;

          this._userManager.turnHandler.clearTurn();

          switch (this._userStartFrom) {
            case EStartFrom.SmallBlind:
              beginIndex = this._userManager.smallBlindIndex;

              this._userManager.turnHandler.setTurnByIndex(beginIndex);

              break;

            case EStartFrom.UserNextBigBlind:
              beginIndex = this._userManager.getNextIndex(this._userManager.bigBlindIndex);

              this._userManager.turnHandler.setTurnByIndex(beginIndex);

              break;

            case EStartFrom.Showhand:
              beginIndex = this._userManager.smallBlindIndex;

              this._userManager.turnHandler.setTurnShowHand(beginIndex);

              break;
          }

          this.endBehaviour();
        };

        return SetStartTurnBehaviour;
      }(BaseBehaviour), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userStartFrom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EStartFrom.SmallBlind;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SetTableBetBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, BetManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      BetManager = module.BetManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6f4b1E377lIkZMemeT+WSbO", "SetTableBetBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SetTableBetBehaviour = exports('SetTableBetBehaviour', (_dec = ccclass('SetTableBetBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(SetTableBetBehaviour, _BaseBehaviour);

        function SetTableBetBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = SetTableBetBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          var betManager = this.gameplayManager.getMiniManager(BetManager);
          betManager.setRaiseBet(betManager.minimumBet);
          this.endBehaviour();
        };

        return SetTableBetBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShowhandBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './EUserOptions.ts', './CheckHandRank.ts', './TableManager.ts', './UserHUD.ts', './CardInfor.ts', './UserManager.ts', './UserInforUI.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, EUserOptions, CheckHandRank, TableManager, UserHUD, HandRank, UserManager, UserInforUI, AsyncUtils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      UserHUD = module.UserHUD;
    }, function (module) {
      HandRank = module.HandRank;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "35573OkwkdMYa2FK47qGMyA", "ShowhandBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ShowhandBehaviour = exports('ShowhandBehaviour', (_dec = ccclass('ShowhandBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(ShowhandBehaviour, _BaseBehaviour);

        function ShowhandBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._userInforUI = void 0;
          _this._userHUDUI = void 0;
          _this._userManager = void 0;
          _this._turnHandler = void 0;
          _this._currentUser = void 0;
          _this._currentPanel = void 0;
          return _this;
        }

        var _proto = ShowhandBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          this._userManager = this.gameplayManager.getMiniManager(UserManager);
          this._turnHandler = this._userManager.turnHandler;
          this._userHUDUI = this.gameplayManager.getUI().get(UserHUD);
          this._userInforUI = this.gameplayManager.getUI().get(UserInforUI);

          this._userHUDUI.Events.on(this._userHUDUI.ON_CHOOSING_OPTION, this.onHudOptionSend, this);

          this.setupUserTurn();
        };

        _proto.endBehaviour = function endBehaviour() {
          _BaseBehaviour.prototype.endBehaviour.call(this);

          this._userHUDUI.Events.off(this._userHUDUI.ON_CHOOSING_OPTION, this.onHudOptionSend, this);
        };

        _proto.handleNextUser = function handleNextUser() {
          if (!this._turnHandler.canMoveToNextTurn()) {
            console.log("End");

            this._userHUDUI.setShowHandOptions(false);

            this.endBehaviour();
            return;
          }

          this.setupUserTurn();
        };

        _proto.setupUserTurn = function setupUserTurn() {
          var _this2 = this;

          this._currentUser = this._turnHandler.getUserFromQueue(); // if all in condition
          // else if On cheating with AI
          // else if user have turn then setup turn
          // else end behaviour to move to next phase

          if (this._turnHandler.checkAllInConditionForShowhand()) {
            this._currentPanel = this.getUserPanelByUser();

            this._currentUser.startTurn();

            this.onHudOptionSend(EUserOptions.ShowHand);
          } else if (this._currentUser.PokerAI != null) {
            this._currentPanel = this.getUserPanelByUser();

            this._currentUser.startTurn();

            this._currentPanel.doCountDown(10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });

            this.onDelayAIShow();
          } else if (this._currentUser) {
            this._currentPanel = this.getUserPanelByUser();

            this._currentUser.startTurn();

            this._currentPanel.doCountDown(10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });

            this._userHUDUI.setShowHandOptions(true).show();
          } else {
            console.log("No more users in queue");
            this.endBehaviour();
          }
        };

        _proto.onHudOptionSend = function onHudOptionSend(eUserOptions) {
          console.log("eUserOptions: " + EUserOptions[eUserOptions]);

          switch (eUserOptions) {
            case EUserOptions.Fold:
              this._currentUser.fold();

              break;

            case EUserOptions.ShowHand:
              var _CheckHandRank$checkH = CheckHandRank.checkHandRank(this._currentUser.cards, this.gameplayManager.getMiniManager(TableManager).getCardsOnTable()),
                  userHand = _CheckHandRank$checkH[0],
                  combination = _CheckHandRank$checkH[1];

              console.log(this._currentUser.node.name + " is showhand with \n                    cards: " + HandRank[userHand.rank] + " - " + userHand.tiebreaker);

              this._currentPanel.onShowCard();

              break;
          }

          this._currentPanel.showNoti(eUserOptions);

          this._currentUser.endTurn();

          this._currentPanel.stopCountDown();

          this._userHUDUI.hide();

          this.handleNextUser();
        };

        _proto.getUserPanelByUser = function getUserPanelByUser() {
          return this._userInforUI.getPanel(this._userManager.getIndexByUser(this._currentUser));
        };

        _proto.onDelayAIShow = /*#__PURE__*/function () {
          var _onDelayAIShow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var minWait, maxWait, randomTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // 1. Simulate AI thinking time
                    // Define your range
                    minWait = 0.5; // Minimum wait time

                    maxWait = 1.5; // Maximum wait time
                    // Calculate random time: (0..1 * range) + offset

                    randomTime = Math.random() * (maxWait - minWait) + minWait;
                    _context.next = 5;
                    return AsyncUtils.waitForSeconds(randomTime);

                  case 5:
                    this.onHudOptionSend(EUserOptions.ShowHand);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onDelayAIShow() {
            return _onDelayAIShow.apply(this, arguments);
          }

          return onDelayAIShow;
        }();

        return ShowhandBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShuffleBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, DeckManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      DeckManager = module.DeckManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2d5e4ZOiwFMf6l71JIGLjoF", "ShuffleBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ShuffleBehaviour = exports('ShuffleBehaviour', (_dec = ccclass('ShuffleBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(ShuffleBehaviour, _BaseBehaviour);

        function ShuffleBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = ShuffleBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          var deckManager = this.gameplayManager.getMiniManager(DeckManager);
          deckManager.shuffleDeck();
          this.endBehaviour();
        };

        return ShuffleBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "8948frGoyJEI7BZx7LnUydT", "Singleton", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Singleton = exports('Singleton', (_dec = ccclass('Singleton'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Singleton, _Component);

        function Singleton() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Singleton.prototype;
        /** Called when script is first loaded */

        _proto.onLoad = function onLoad() {
          var ctor = this.constructor;

          if (ctor._instance) {
            console.warn(this.constructor.name + " already has an instance! Destroying duplicate.");
            this.destroy();
            return;
          }

          ctor._instance = this;
        }
        /** Called when component is destroyed */
        ;

        _proto.onDestroy = function onDestroy() {
          var ctor = this.constructor;

          if (ctor._instance === this) {
            ctor._instance = null;
          }
        };

        _createClass(Singleton, null, [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              console.warn(this.name + " instance not found! Make sure it is added to the scene.");
            }

            return this._instance;
          }
          /** Check if instance exists */

        }, {
          key: "HasInstance",
          get: function get() {
            return this._instance != null;
          }
        }]);

        return Singleton;
      }(Component), _class2._instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkipBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './ConditionBehaviour.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseBehaviour, ConditionBehaviour;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      ConditionBehaviour = module.ConditionBehaviour;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "64550PNW/dLHLklQYl9vZ3Y", "SkipBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SkipBehaviour = exports('SkipBehaviour', (_dec = ccclass('SkipBehaviour'), _dec2 = property({
        type: ConditionBehaviour,
        visible: true
      }), _dec3 = property({
        type: BaseBehaviour,
        visible: true
      }), _dec4 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(SkipBehaviour, _BaseBehaviour);

        function SkipBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_condition", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_extraBehaviour", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_stepSkipCount", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SkipBehaviour.prototype;

        _proto.startBehaviour = function startBehaviour() {
          _BaseBehaviour.prototype.startBehaviour.call(this);

          this._condition.setGameplayManager(this.gameplayManager);

          this._condition.startBehaviour();

          if (this._condition.IsConditionMet) {
            this.phase.skipStep(this._stepSkipCount);

            if (this._extraBehaviour) {
              this._extraBehaviour.setGameplayManager(this.gameplayManager);

              this._extraBehaviour.events.on(this._extraBehaviour.ON_END_BEHAVIOUR, this.endBehaviour, this);

              this._extraBehaviour.startBehaviour();

              return;
            }
          }

          this.endBehaviour();
        };

        return SkipBehaviour;
      }(BaseBehaviour), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_condition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_extraBehaviour", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_stepSkipCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SmallBlind.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserRole.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, UserRole;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UserRole = module.UserRole;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4fb74LOB+JN8Z+p2fezcyhU", "SmallBlind", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SmallBlind = exports('SmallBlind', (_dec = ccclass('SmailBlind'), _dec(_class = /*#__PURE__*/function (_UserRole) {
        _inheritsLoose(SmallBlind, _UserRole);

        function SmallBlind() {
          return _UserRole.apply(this, arguments) || this;
        }

        return SmallBlind;
      }(UserRole)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Table.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "556fbgDFqBLQpBFQApZ08w3", "Table", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Table = exports('Table', (_dec = ccclass('Table'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Table, _Component);

        function Table() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._minUsersOnTable = 2;
          _this._maxUsersOnTable = 6;
          _this._maxCardsOnTable = 5;
          _this._roomId = void 0;
          _this.cards = [];
          _this.ON_START_GAME = 'onStartGame';
          _this.ON_END_GAME = 'onEndGame';
          _this.ON_RECEIVE_CARD = 'onReceiveCard';
          _this.events = new EventTarget();
          return _this;
        }

        var _proto = Table.prototype; //#endregion
        // reset table state

        _proto.clearTableCards = function clearTableCards() {
          this.cards = [];
          /* this._tableCards.forEach(cardNode => {
              cardNode.destroy();
          });
          this._tableCards = []; */
        } // Table Receive Card
        ;

        _proto.receiveCard = function receiveCard(card) {
          if (this.cards.length >= this._maxCardsOnTable) {
            console.error("Table cannot receive more cards.");
            return;
          }

          this.cards.push(card);
          this.events.emit(this.ON_RECEIVE_CARD, card);
          console.log("Table received card: " + card.rank + " of " + card.suit);
        };

        _proto.startGame = function startGame() {
          this.events.emit(this.ON_START_GAME);
        };

        _proto.endGame = function endGame() {
          this.events.emit(this.ON_END_GAME);
        };

        _createClass(Table, [{
          key: "minUsersOnTable",
          get: //#region GETTERS
          function get() {
            return this._minUsersOnTable;
          }
        }, {
          key: "maxUsersOnTable",
          get: function get() {
            return this._maxUsersOnTable;
          }
        }, {
          key: "CardsOnTable",
          get: function get() {
            return this.cards;
          }
        }, {
          key: "RoomID",
          get: function get() {
            return this._roomId;
          },
          set: function set(value) {
            this._roomId = value;
          }
        }]);

        return Table;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Table.ts', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Table, GameplayHandler;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Table = module.Table;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "51d29Dq4OZNao/rg3+Spap9", "TableManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TableManager = exports('TableManager', (_dec = ccclass('TableManager'), _dec2 = property({
        type: Table,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameplayHandler) {
        _inheritsLoose(TableManager, _GameplayHandler);

        function TableManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameplayHandler.call.apply(_GameplayHandler, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_tableComponent", _descriptor, _assertThisInitialized(_this));

          _this._isInit = false;
          return _this;
        }

        var _proto = TableManager.prototype;

        _proto.init = function init() {
          this._isInit = true;
        };

        _proto.resetState = function resetState() {
          this._tableComponent.clearTableCards();
        };

        _proto.startGame = function startGame() {
          this._tableComponent.startGame();
        };

        _proto.endGame = function endGame() {
          this._tableComponent.endGame();
        };

        _proto.getCardsOnTable = function getCardsOnTable() {
          if (!this._isInit) {
            this.init();
          }

          return this._tableComponent.CardsOnTable;
        };

        _createClass(TableManager, [{
          key: "Table",
          get: function get() {
            return this._tableComponent;
          }
        }]);

        return TableManager;
      }(GameplayHandler), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_tableComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardView.ts', './PokerUI.ts', './PoolAsset.ts', './Tweener.ts', './ETween.ts', './ESound.ts', './ChipLibrary.ts', './ChipGroup.ts', './UIDealer.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, CardView, PokerUI, EPoolType, Tweener, ETweenEasing, ESFXId, ChipLibrary, ChipGroup, UIDealer;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      CardView = module.CardView;
    }, function (module) {
      PokerUI = module.PokerUI;
    }, function (module) {
      EPoolType = module.EPoolType;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ETweenEasing = module.ETweenEasing;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      ChipLibrary = module.ChipLibrary;
    }, function (module) {
      ChipGroup = module.ChipGroup;
    }, function (module) {
      UIDealer = module.UIDealer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "ef5f4jkVWBHFrLvhRwtihWV", "TableUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TableUI = exports('TableUI', (_dec = ccclass('TableUI'), _dec2 = property({
        type: CardView,
        visible: true
      }), _dec3 = property({
        type: Label,
        visible: true
      }), _dec4 = property({
        type: Label,
        visible: true
      }), _dec5 = property({
        type: Label,
        visible: true
      }), _dec6 = property({
        type: Node,
        visible: true
      }), _dec7 = property({
        type: Node,
        visible: true
      }), _dec8 = property({
        type: UIDealer,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(TableUI, _PokerUI);

        function TableUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_cardViews", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_roomID", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_totalPot", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timerStartGame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardHolder", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_deck", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_dealer", _descriptor7, _assertThisInitialized(_this));

          _this._currentCardIndex = 0;
          _this._remainingTime = 0;
          _this._startCooldown = void 0;
          return _this;
        }

        var _proto = TableUI.prototype;

        _proto.resetState = function resetState() {
          this._currentCardIndex = 0;

          this._cardViews.forEach(function (c) {
            return c.resetState();
          });
        };

        _proto.onStartGame = function onStartGame() {};

        _proto.onEndGame = function onEndGame() {
          this.resetState();
        };

        _proto.onReceiveCard = function onReceiveCard(card, cardIndex) {
          var cardView = this._cardViews[cardIndex];
          cardView.node.active = true;
          cardView.loadCard(card.suit, card.rank);
          cardView.doFlip(true);
        };

        _proto.onUpdateTotalPot = function onUpdateTotalPot(totalBet) {
          this._totalPot.string = totalBet.toString();
        };

        _proto.onSetUIRoomInfor = function onSetUIRoomInfor(roomID) {
          this._roomID.string = roomID; //this._table.RoomID = roomID;
        };

        _proto.onStartTimer = function onStartTimer(time) {
          this._cardHolder.active = false;
          this._timerStartGame.node.active = true;
          this._remainingTime = time;
          this._startCooldown = true;
        };

        _proto.update = function update(dt) {
          if (!this._startCooldown) return;
          this._remainingTime -= dt;

          if (this._remainingTime <= 0) {
            this._startCooldown = false;
            this._remainingTime = 0;
            this._cardHolder.active = true;
            this._timerStartGame.node.active = false;
          }

          this._timerStartGame.string = Math.floor(this._remainingTime).toString();
        };

        _proto.setCardEffect = function setCardEffect(cards) {
          this._cardViews.forEach(function (cv) {
            cv.checkCardEffect(cards);
          });
        };

        _proto.dealCardToDesination = function dealCardToDesination(destination, moveDuration, onCompleted) {
          var _this2 = this;

          this.audio.playRandomSFX(ESFXId.SFX_DealCard);
          var cardNode = this.poolManager.spawnNodeByType(EPoolType.CardEffect, this.node);
          Tweener.GlobalTranslateTo(cardNode, this._deck.worldPosition, destination, moveDuration, ETweenEasing.Linear, false, 0, function () {
            _this2.poolManager.despawnNode(cardNode);

            if (onCompleted) onCompleted();
          });
        };

        _proto.dealCommonCard = function dealCommonCard(card, moveDuration, onCompleted) {
          var _this3 = this;

          this.audio.playRandomSFX(ESFXId.SFX_DealCard);
          var cardNode = this._cardViews[this._currentCardIndex].node;
          var currentIndex = this._currentCardIndex++;
          this.dealCardToDesination(cardNode.worldPosition, moveDuration, function () {
            _this3.onReceiveCard(card, currentIndex);

            if (onCompleted) onCompleted();
          });
        };

        _proto.doChipEffect = /*#__PURE__*/function () {
          var _doChipEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chipValue, start, end, moveDuration, onCompleted) {
            var _this4 = this;

            var chipResult, _loop, i;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(chipValue <= 0)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    chipResult = ChipLibrary.getChips(chipValue);

                    _loop = function _loop(i) {
                      var chipNode = _this4.poolManager.spawnNodeByType(EPoolType.ChipGroup, _this4.node);

                      var chipGroup = chipNode.getComponent(ChipGroup);
                      chipGroup.spawnChip(chipResult[i].count, chipResult[i].sprite);
                      Tweener.GlobalTranslateTo(chipNode, start, end, moveDuration, ETweenEasing.Linear, false, 0, function () {
                        chipGroup.despawnChip();

                        _this4.poolManager.despawnNode(chipNode);

                        if (onCompleted) onCompleted();
                      });
                    };

                    for (i = 0; i < chipResult.length; i++) {
                      _loop(i);
                    }

                    Tweener.DelayForAction(this.node, moveDuration, function () {
                      return _this4.audio.playSFX(ESFXId.SFX_Chip);
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function doChipEffect(_x, _x2, _x3, _x4, _x5) {
            return _doChipEffect.apply(this, arguments);
          }

          return doChipEffect;
        }();

        _proto.onSetAnimDealer = function onSetAnimDealer(animDealerType) {
          this._dealer.onPlayAnimation(animDealerType);
        };

        _createClass(TableUI, [{
          key: "totalPotNode",
          get: function get() {
            return this._totalPot.node;
          }
        }]);

        return TableUI;
      }(PokerUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_cardViews", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_roomID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_totalPot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_timerStartGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_cardHolder", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_deck", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_dealer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Timer.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94217iRANRP8LedduIywQb+", "Timer", undefined);

      var Timer = exports('Timer', /*#__PURE__*/function () {
        function Timer(seconds, onFinish, onUpdateTime) {
          if (seconds === void 0) {
            seconds = 3;
          }

          this.countdownTime = 3;
          this.remainingTime = 0;
          this.active = false;
          this.onFinish = null;
          this.onUpdateTime = null;
          this.countdownTime = seconds;
          this.onFinish = onFinish || null;
          this.onUpdateTime = onUpdateTime || null;
          this.resetCountdown();
        }

        var _proto = Timer.prototype;

        _proto.startCountdown = function startCountdown() {
          this.resetCountdown();
          this.active = true;
        };

        _proto.resetCountdown = function resetCountdown() {
          this.remainingTime = this.countdownTime;
        };

        _proto.stopCountdown = function stopCountdown() {
          this.active = false;
        };

        _proto.update = function update(dt) {
          if (!this.active) return;
          this.remainingTime -= dt;
          if (this.onUpdateTime) this.onUpdateTime(this.remainingTime);

          if (this.remainingTime <= 0) {
            this.active = false;
            this.remainingTime = 0;

            if (this.onFinish) {
              this.onFinish();
            }
          }
        };

        _proto.getRemainingTime = function getRemainingTime() {
          return this.remainingTime;
        };

        _proto.isActive = function isActive() {
          return this.active;
        };

        _proto.setCallback = function setCallback(onFinish) {
          this.onFinish = onFinish;
        };

        return Timer;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToggleUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Toggle;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Toggle = module.Toggle;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0f03dss4k5I8KiAJAghB8kP", "ToggleUtils", undefined);

      var ToggleUtils = exports('ToggleUtils', /*#__PURE__*/function () {
        function ToggleUtils() {} //#region Click

        /**
            * Gắn event CLICK vào toggle
            * @param toggle Toggle component
            * @param handler Hàm callback khi click
            * @param target Ngữ cảnh (this)
            */


        ToggleUtils.bindClick = function bindClick(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions]  không hợp lệ.');
            return;
          }

          toggle.node.on(Toggle.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Gắn event CLICK chỉ chạy 1 lần
         */
        ;

        ToggleUtils.bindOnceClick = function bindOnceClick(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions] Toggle không hợp lệ.');
            return;
          }

          toggle.node.once(Toggle.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Gỡ event CLICK khỏi toggle
         */
        ;

        ToggleUtils.unbindClick = function unbindClick(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions] Toggle không hợp lệ.');
            return;
          }

          toggle.node.off(Toggle.EventType.CLICK, handler, target != null ? target : null);
        } //#endregion
        //#region Toggle

        /**
        * Gắn event Toggle vào toggle
        * @param toggle Toggle component
        * @param handler Hàm callback khi click
        * @param target Ngữ cảnh (this)
        */
        ;

        ToggleUtils.bindToggle = function bindToggle(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions]  không hợp lệ.');
            return;
          }

          toggle.node.on(Toggle.EventType.TOGGLE, handler, target != null ? target : null);
        }
        /**
         * Gắn event Toggle chỉ chạy 1 lần
         */
        ;

        ToggleUtils.bindOnceToggle = function bindOnceToggle(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions] Toggle không hợp lệ.');
            return;
          }

          toggle.node.once(Toggle.EventType.TOGGLE, handler, target != null ? target : null);
        }
        /**
         * Gỡ event TOGGLE khỏi toggle
         */
        ;

        ToggleUtils.unbindToggle = function unbindToggle(toggle, handler, target) {
          if (!toggle) {
            console.warn('[ToggleExtensions] Toggle không hợp lệ.');
            return;
          }

          toggle.node.off(Toggle.EventType.TOGGLE, handler, target != null ? target : null);
        } //#endregion

        /**
         * Bật/tắt trạng thái tương tác
         */
        ;

        ToggleUtils.setInteractable = function setInteractable(toggle, value) {
          if (!toggle) {
            console.warn('[ToggleExtensions] Toggle không hợp lệ.');
            return;
          }

          toggle.interactable = value;
        };

        return ToggleUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Translate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAnimation.ts', './ETween.ts', './Tweener.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Enum, NodeEventType, Vec3, BaseAnimation, ETranslateType, Tweener;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Enum = module.Enum;
      NodeEventType = module.NodeEventType;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseAnimation = module.BaseAnimation;
    }, function (module) {
      ETranslateType = module.ETranslateType;
    }, function (module) {
      Tweener = module.Tweener;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "b32bbfjOI1IZr46J1Xg9q6g", "Translate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Translate = exports('Translate', (_dec = ccclass('Translate'), _dec2 = property({
        visible: function visible() {
          return this._translateType === ETranslateType.TranslateBetweenPosition;
        }
      }), _dec3 = property({
        visible: function visible() {
          return this._translateType === ETranslateType.TranslateBetweenPosition || this._translateType === ETranslateType.TranslateToPosition;
        }
      }), _dec4 = property({
        type: Node,
        visible: function visible() {
          return this._translateType === ETranslateType.TranslateBetweenTarget || this._translateType === ETranslateType.TranslateToTarget;
        }
      }), _dec5 = property({
        type: Enum(ETranslateType),
        visible: true
      }), _dec6 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAnimation) {
        _inheritsLoose(Translate, _BaseAnimation);

        function Translate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAnimation.call.apply(_BaseAnimation, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_posStart", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_posEnd", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_target", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_translateType", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isGlobal", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Translate.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onDestroy = function onDestroy() {
          this.node.off(NodeEventType.MOUSE_ENTER, this.onHoverEnter, this);
          this.node.off(NodeEventType.MOUSE_LEAVE, this.onHoverExit, this);
        };

        _proto.onEnable = function onEnable() {
          if (this.PlayOnEnable) {
            this.play();
          }
        };

        _proto.onHoverEnter = function onHoverEnter(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Enter");

          this.play();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //console.log("On Hover Exit");

          this.stopAll();
        } //#region Interface Tween

        /** Public method to trigger fade animation manually */
        ;

        _proto.play = function play() {
          switch (this._translateType) {
            case ETranslateType.TranslateToPosition:
              this.TranslateToPosition();
              break;

            case ETranslateType.TranslateToTarget:
              this.TranslateToTarget();
              break;

            case ETranslateType.TranslateBetweenPosition:
              this.TranslateBetweenPosition();
              break;

            case ETranslateType.TranslateBetweenTarget:
              this.TranslateBetweenTarget();
              break;
          }
        };

        _proto.stop = function stop() {
          Tweener.stop(this.node);
        } // // this is valid when > cocos 3.8
        // public pause() {
        // }
        // public resume() {
        // }
        ;

        _proto.stopAll = function stopAll() {
          Tweener.stopAll(this.node);
        } //#endregion
        ;

        _proto.TranslateToPosition = function TranslateToPosition() {
          if (!this._isGlobal) {
            Tweener.LocalTranslateTo(this.node, this.node.getPosition(), this._posEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
          } else {
            Tweener.GlobalTranslateTo(this.node, this.node.getPosition(), this._posEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
          }
        };

        _proto.TranslateToTarget = function TranslateToTarget() {
          if (!this._target) return;
          var start = this.node.getPosition();
          var end = this._isGlobal ? this._target.worldPosition : this._target.getPosition();

          if (!this._isGlobal) {
            Tweener.LocalTranslateTo(this.node, start, end, this.Duration, this.Easing, this.Loop, this.Repeat);
          } else {
            Tweener.GlobalTranslateTo(this.node, this.node.worldPosition.clone(), end.clone(), this.Duration, this.Easing, this.Loop, this.Repeat);
          }
        };

        _proto.TranslateBetweenPosition = function TranslateBetweenPosition() {
          if (!this._isGlobal) {
            Tweener.LocalTranslateBetween(this.node, this._posStart, this._posEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
          } else {
            Tweener.GlobalTranslateBetween(this.node, this._posStart, this._posEnd, this.Duration, this.Easing, this.Loop, this.Repeat);
          }
        };

        _proto.TranslateBetweenTarget = function TranslateBetweenTarget() {
          if (!this._target) return;
          var start = this._isGlobal ? this.node.worldPosition.clone() : this.node.getPosition();
          var end = this._isGlobal ? this._target.worldPosition.clone() : this._target.getPosition();

          if (!this._isGlobal) {
            Tweener.LocalTranslateBetween(this.node, start, end, this.Duration, this.Easing, this.Loop, this.Repeat);
          } else {
            Tweener.GlobalTranslateBetween(this.node, start, end, this.Duration, this.Easing, this.Loop, this.Repeat);
          }
        };

        return Translate;
      }(BaseAnimation), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_posStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_posEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_translateType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ETranslateType.TranslateToPosition;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_isGlobal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnHandler.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a06e25/xZpE+Y+y+18b6Lx/", "TurnHandler", undefined);

      var TurnHandler = exports('TurnHandler', /*#__PURE__*/function () {
        function TurnHandler(userManager) {
          this.turnQueue = [];
          this.userManager = userManager;
        }

        var _proto = TurnHandler.prototype;

        _proto.init = function init() {};

        _proto.clearTurn = function clearTurn() {
          this.turnQueue = [];
        };

        _proto.setTurnByIndex = function setTurnByIndex(startUserIndex, skipIndex) {
          if (skipIndex === void 0) {
            skipIndex = null;
          }

          var users = this.userManager.activeUsers;

          if (!users.length) {
            console.warn('No active users to set turn order');
            return;
          }

          this.turnQueue = [];
          var added = new Set();
          var nextIndex = startUserIndex; // 1. Get Game State

          var isAlmostPlayerAllIn = this.checkAllInConditionForNormal();

          for (var i = 0; i < users.length; i++) {
            var user = users[nextIndex]; // Basic validity checks: Must exist, not folded, not already All-In

            var canPlay = user && !user.IsFold && !user.IsAllIn;

            if (canPlay && nextIndex !== skipIndex && !added.has(nextIndex)) {
              // --- CORE LOGIC CHANGE ---
              // Condition 1: Normal Game (Not almost all in) -> Always add
              // Condition 2: Almost All In -> Only add if they owe money (Call)
              var needsToAct = !isAlmostPlayerAllIn || user.CurrentBet < user.CurrentTableBet;

              if (needsToAct) {
                this.turnQueue.push(nextIndex);
                added.add(nextIndex);
              }
            }

            nextIndex = (nextIndex + 1) % users.length;
          }
        };

        _proto.setTurnShowHand = function setTurnShowHand(startUserIndex) {
          var users = this.userManager.activeUsers;

          if (!users.length) {
            console.warn('No active users to set turn order for show hand');
            return;
          }

          this.turnQueue = [];
          var nextIndex = startUserIndex; //const isAlmostPlayerAllIn = this.checkAllInConditionForShowhand();

          for (var i = 0; i < users.length; i++) {
            var user = users[nextIndex];

            if (user && !user.IsFold) {
              this.turnQueue.push(nextIndex);
            }

            nextIndex = (nextIndex + 1) % users.length;
          }
        };

        _proto.resetRaiseTurnByIndex = function resetRaiseTurnByIndex(raiserIndex) {
          var users = this.userManager.activeUsers;
          if (!users.length) return;
          var nextIndex = (raiserIndex + 1) % users.length;
          this.setTurnByIndex(nextIndex, raiserIndex);
        };

        _proto.resetRaiseTurnByUser = function resetRaiseTurnByUser(user) {
          var index = this.userManager.getIndexByUser(user);
          this.resetRaiseTurnByIndex(index);
        };

        _proto.onUserAllIn = function onUserAllIn(user) {
          user.allIn();
        };

        _proto.getUserFromQueue = function getUserFromQueue() {
          var currentIndex = this.turnQueue.shift();

          if (currentIndex === undefined) {
            console.warn('Turn queue empty when trying to get user from queue');
            return; //throw new Error('Turn queue is empty');
          }

          return this.userManager.activeUsers[currentIndex];
        };

        _proto.canMoveToNextTurn = function canMoveToNextTurn() {
          return this.turnQueue.length > 0 && this.userManager.countInHandUser() > 1;
        };

        _proto.checkAllInConditionForNormal = function checkAllInConditionForNormal() {
          var users = this.userManager.activeUsers; // 1. Count players actively playing (not folded)

          var usersOnBoard = users.filter(function (user) {
            return !user.IsFold;
          }).length; // 2. Count players who are actually All-In

          var allinCount = users.filter(function (user) {
            return user.IsAllIn;
          }).length;
          return usersOnBoard - allinCount <= 1;
        };

        _proto.checkAllInConditionForShowhand = function checkAllInConditionForShowhand() {
          var users = this.userManager.activeUsers;
          var allinCount = users.filter(function (user) {
            return user.IsAllIn;
          }).length;
          var usersOnBoard = users.filter(function (users) {
            return !users.IsFold;
          });
          return allinCount >= usersOnBoard.length - 1;
        };

        _proto.printTurn = function printTurn() {
          console.log('Turn queue:', this.turnQueue.join(','));
        };

        return TurnHandler;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tweener.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ETween.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, tween, Tween, Vec3, Quat, Color, Component, ETweenEasing;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      ETweenEasing = module.ETweenEasing;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2b906GkKCtCNoh/Ao3+tS2p", "Tweener", undefined);

      var ccclass = _decorator.ccclass;
      var Tweener = exports('Tweener', (_dec = ccclass('Tweener'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Tweener, _Component);

        function Tweener() {
          return _Component.apply(this, arguments) || this;
        } //#region Manage Tween


        Tweener.stop = function stop(target) {
          tween(target).stop();
          console.log("[Tweener.stop] Stopped tween for target:", target);
        };

        Tweener.stopAll = function stopAll(target) {
          if (!target) {
            console.warn('[Tweener.stopAll] Target is undefined or null.');
            return;
          }

          console.log("[Tweener.stopAll] Stopped all tweens for target:", target);
          Tween.stopAllByTarget(target);
        } // // Only valid cocos above 3.8
        // public pause<T>(target?: T): void {
        //     if (!target) {
        //         console.log('')
        //         return;
        //     }
        //     tween(target).pause();
        // }
        // public resume<T>(target?: T): void {
        //     if (!target) {
        //         console.log('')
        //         return;
        //     }
        //     tween(target).resume();
        // }
        //#region Animation method

        /** Local translate (position) */
        ;

        Tweener.LocalTranslateTo = function LocalTranslateTo(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setPosition(start);
          var tw = tween(node).to(duration, {
            position: end
          }, {
            easing: this.getEasingType(easingType)
          });

          if (loop || repeat > 0) {
            tw.to(0, {
              position: start
            }, {
              easing: this.getEasingType(easingType)
            });

            if (repeat > 0) {
              tw.to(duration, {
                position: end
              }, {
                easing: this.getEasingType(easingType)
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return tw;
        };

        Tweener.LocalTranslateBetween = function LocalTranslateBetween(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setPosition(start);
          var tw = tween(node).to(duration, {
            position: end
          }, {
            easing: this.getEasingType(easingType)
          });

          if (loop || repeat > 0) {
            tw.to(duration, {
              position: start
            }, {
              easing: this.getEasingType(easingType)
            });

            if (repeat > 0) {
              tw.to(duration, {
                position: end
              }, {
                easing: this.getEasingType(easingType)
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Global translate (world position) */
        ;

        Tweener.GlobalTranslateTo = function GlobalTranslateTo(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.worldPosition = start.clone();
          var tw = tween(node).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var pos = new Vec3();
              Vec3.lerp(pos, start, end, ratio);
              target.worldPosition = pos;
            }
          }); // Loop or repeat behavior

          if (loop || repeat > 0) {
            tw.to(0, {}, {
              onUpdate: function onUpdate(target) {
                return target.worldPosition = start.clone();
              }
            });

            if (repeat > 0) {
              tw.to(duration, {}, {
                easing: this.getEasingType(easingType),
                onUpdate: function onUpdate(target, ratio) {
                  var pos = new Vec3();
                  Vec3.lerp(pos, start, end, ratio);
                  target.worldPosition = pos;
                }
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.GlobalTranslateBetween = function GlobalTranslateBetween(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.worldPosition = start.clone();
          var tw = tween(node) // start → end
          .to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var pos = new Vec3();
              Vec3.lerp(pos, start, end, ratio);
              target.worldPosition = pos;
            }
          }); // Loop & repeat

          if (loop || repeat > 0) {
            tw.to(duration, {}, {
              easing: this.getEasingType(easingType),
              onUpdate: function onUpdate(target, ratio) {
                var pos = new Vec3();
                Vec3.lerp(pos, end, start, ratio);
                target.worldPosition = pos;
              }
            });

            if (repeat > 0) {
              tw.to(duration, {}, {
                easing: this.getEasingType(easingType),
                onUpdate: function onUpdate(target, ratio) {
                  var pos = new Vec3();
                  Vec3.lerp(pos, start, end, ratio);
                  target.worldPosition = pos;
                }
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local rotation (Euler angles) */
        ;

        Tweener.LocalRotateEuler = function LocalRotateEuler(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setRotationFromEuler(start.x, start.y, start.z);
          var tw = tween(node).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var rot = new Vec3();
              Vec3.lerp(rot, start, end, ratio);
              target.setRotationFromEuler(rot.x, rot.y, rot.z);
            }
          }); //let looptw = tween(node).then(tw);

          if (loop) tw.repeatForever();else if (repeat > 0) tw.repeat(repeat);
          if (callback) tw.call(callback);
          tw.start();
          return tw;
        };

        Tweener.LocalRotateEulerBetween = function LocalRotateEulerBetween(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setRotationFromEuler(start.x, start.y, start.z);
          var tw = tween(node).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var rot = new Vec3();
              Vec3.lerp(rot, start, end, ratio);
              target.setRotationFromEuler(rot.x, rot.y, rot.z);
            }
          }).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var rot = new Vec3();
              Vec3.lerp(rot, end, start, ratio);
              target.setRotationFromEuler(rot.x, rot.y, rot.z);
            }
          });

          if (repeat > 0) {
            tw.to(duration, {}, {
              easing: this.getEasingType(easingType),
              onUpdate: function onUpdate(target, ratio) {
                var rot = new Vec3();
                Vec3.lerp(rot, start, end, ratio);
                target.setRotationFromEuler(rot.x, rot.y, rot.z);
              }
            });
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local rotation (Quaternion) */
        ;

        Tweener.LocalRotateQuat = function LocalRotateQuat(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setRotation(start);
          var tw = tween(node).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var q = new Quat();
              Quat.slerp(q, start, end, ratio);
              target.setRotation(q);
            }
          });
          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.LocalRotateQuatBetween = function LocalRotateQuatBetween(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setRotation(start);
          var tw = tween(node).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var q = new Quat();
              Quat.slerp(q, start, end, ratio);
              target.setRotation(q);
            }
          }).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var q = new Quat();
              Quat.slerp(q, end, start, ratio);
              target.setRotation(q);
            }
          });

          if (repeat > 0) {
            tw.to(duration, {}, {
              easing: this.getEasingType(easingType),
              onUpdate: function onUpdate(target, ratio) {
                var q = new Quat();
                Quat.slerp(q, start, end, ratio);
                target.setRotation(q);
              }
            });
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local scale */
        ;

        Tweener.LocalScale = function LocalScale(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setScale(start);
          var tw = tween(node).to(duration, {
            scale: end
          }, {
            easing: this.getEasingType(easingType)
          });

          if (loop || repeat > 0) {
            tw.to(0, {
              scale: start
            }, {
              easing: this.getEasingType(easingType)
            });

            if (repeat > 0) {
              tw.to(duration, {
                scale: end
              }, {
                easing: this.getEasingType(easingType)
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) tw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.LocalScaleCycle = function LocalScaleCycle(node, start, end, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          node.setScale(start);
          var tw = tween(node).to(duration, {
            scale: end
          }, {
            easing: this.getEasingType(easingType)
          });

          if (loop || repeat > 0) {
            tw.to(duration, {
              scale: start
            }, {
              easing: this.getEasingType(easingType)
            });

            if (repeat > 0) {
              tw.to(duration, {
                scale: end
              }, {
                easing: this.getEasingType(easingType)
              });
            }
          }

          var looptw = tween(node).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) tw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Transparency (fade in/out) */
        ;

        Tweener.Transparency = function Transparency(uiRenderer, startAlpha, endAlpha, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          var color = uiRenderer.color.clone();
          uiRenderer.color = new Color(color.r, color.g, color.b, startAlpha);
          var data = {
            alpha: startAlpha
          };
          var fadeTween = tween(data).to(duration, {
            alpha: endAlpha
          }, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target) {
              if (!uiRenderer || !uiRenderer.color) return;
              var c = uiRenderer.color.clone();
              uiRenderer.color = new Color(c.r, c.g, c.b, target.alpha);
            }
          });

          if (loop || repeat > 0) {
            fadeTween.to(0, {
              alpha: startAlpha
            }, {
              easing: this.getEasingType(easingType),
              onUpdate: function onUpdate(target) {
                if (!uiRenderer || !uiRenderer.color) return;
                var c = uiRenderer.color.clone();
                uiRenderer.color = new Color(c.r, c.g, c.b, target.alpha);
              }
            });

            if (repeat > 0) {
              fadeTween.to(duration, {
                alpha: endAlpha
              }, {
                easing: this.getEasingType(easingType),
                onUpdate: function onUpdate(target) {
                  if (!uiRenderer || !uiRenderer.color) return;
                  var c = uiRenderer.color.clone();
                  uiRenderer.color = new Color(c.r, c.g, c.b, target.alpha);
                }
              });
            }
          } // make a sequence for repeat/loop support


          var tw = tween(data).then(fadeTween);

          if (loop) {
            tw = tw.repeatForever();
          } else if (repeat > 0) {
            tw = tw.repeat(repeat);
          }

          if (callback) tw = tw.call(callback);
          tw.start();
          return tw;
        };

        Tweener.TransparencyInOut = function TransparencyInOut(uiRenderer, startAlpha, endAlpha, duration, easingType, loop, repeat, callback) {
          if (easingType === void 0) {
            easingType = ETweenEasing.Linear;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (repeat === void 0) {
            repeat = 0;
          }

          var color = uiRenderer.color.clone();
          uiRenderer.color = new Color(color.r, color.g, color.b, startAlpha);
          var data = {
            alpha: startAlpha
          };
          var fadeTween = tween(data).to(duration, {
            alpha: endAlpha
          }, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target) {
              if (!uiRenderer || !uiRenderer.color) return;
              var c = uiRenderer.color.clone();
              uiRenderer.color = new Color(c.r, c.g, c.b, target.alpha);
            }
          }).to(duration, {
            alpha: startAlpha
          }, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target) {
              if (!uiRenderer || !uiRenderer.color) return;
              var c = uiRenderer.color.clone();
              uiRenderer.color = new Color(c.r, c.g, c.b, target.alpha);
            }
          }); // make a sequence for repeat/loop support

          var tw = tween(data).then(fadeTween);
          if (callback) tw = tw.call(callback);

          if (loop) {
            tw = tw.repeatForever();
          } else if (repeat > 0) {
            tw = tw.repeat(repeat);
          }

          tw.start();
          return tw;
        }
        /** Delay then perform callback */
        ;

        Tweener.DelayForAction = function DelayForAction(node, delay, callback) {
          var tw = tween(node).delay(delay).call(callback);
          tw.start();
          return tw;
        } // tween from a number to a number
        ;

        Tweener.TweenNumber = function TweenNumber(startValue, endValue, duration, onUpdateCallback, onCompleteCallback) {
          var proxy = {
            value: startValue
          };
          var tweenInstance = tween(proxy).to(duration, {
            value: endValue
          }, {
            onUpdate: function onUpdate(target) {
              if (onUpdateCallback) onUpdateCallback(target.value);
            },
            onComplete: function onComplete() {
              if (onCompleteCallback) onCompleteCallback();
            }
          }).start();
          return tweenInstance;
        } //#endregion
        ;

        Tweener.getEasingType = function getEasingType(eTweenEasing) {
          switch (eTweenEasing) {
            case ETweenEasing.Linear:
              return 'linear';

            case ETweenEasing.Smooth:
              return 'smooth';

            case ETweenEasing.Fade:
              return 'fade';

            case ETweenEasing.Constant:
              return 'constant';

            case ETweenEasing.QuadIn:
              return 'quadIn';

            case ETweenEasing.QuadOut:
              return 'quadOut';

            case ETweenEasing.QuadInOut:
              return 'quadInOut';

            case ETweenEasing.QuadOutIn:
              return 'quadOutIn';

            case ETweenEasing.CubicIn:
              return 'cubicIn';

            case ETweenEasing.CubicOut:
              return 'cubicOut';

            case ETweenEasing.CubicInOut:
              return 'cubicInOut';

            case ETweenEasing.CubicOutIn:
              return 'cubicOutIn';

            case ETweenEasing.QuartIn:
              return 'quartIn';

            case ETweenEasing.QuartOut:
              return 'quartOut';

            case ETweenEasing.QuartInOut:
              return 'quartInOut';

            case ETweenEasing.QuartOutIn:
              return 'quartOutIn';

            case ETweenEasing.QuintIn:
              return 'quintIn';

            case ETweenEasing.QuintOut:
              return 'quintOut';

            case ETweenEasing.QuintInOut:
              return 'quintInOut';

            case ETweenEasing.QuintOutIn:
              return 'quintOutIn';

            case ETweenEasing.SineIn:
              return 'sineIn';

            case ETweenEasing.SineOut:
              return 'sineOut';

            case ETweenEasing.SineInOut:
              return 'sineInOut';

            case ETweenEasing.SineOutIn:
              return 'sineOutIn';

            case ETweenEasing.ExpoIn:
              return 'expoIn';

            case ETweenEasing.ExpoOut:
              return 'expoOut';

            case ETweenEasing.ExpoInOut:
              return 'expoInOut';

            case ETweenEasing.ExpoOutIn:
              return 'expoOutIn';

            case ETweenEasing.CircIn:
              return 'circIn';

            case ETweenEasing.CircOut:
              return 'circOut';

            case ETweenEasing.CircInOut:
              return 'circInOut';

            case ETweenEasing.CircOutIn:
              return 'circOutIn';

            case ETweenEasing.ElasticIn:
              return 'elasticIn';

            case ETweenEasing.ElasticOut:
              return 'elasticOut';

            case ETweenEasing.ElasticInOut:
              return 'elasticInOut';

            case ETweenEasing.ElasticOutIn:
              return 'elasticOutIn';

            case ETweenEasing.BackIn:
              return 'backIn';

            case ETweenEasing.BackOut:
              return 'backOut';

            case ETweenEasing.BackInOut:
              return 'backInOut';

            case ETweenEasing.BackOutIn:
              return 'backOutIn';

            case ETweenEasing.BounceIn:
              return 'bounceIn';

            case ETweenEasing.BounceOut:
              return 'bounceOut';

            case ETweenEasing.BounceInOut:
              return 'bounceInOut';

            case ETweenEasing.BounceOutIn:
              return 'bounceOutIn';

            default:
              return 'linear';
          }
        };

        return Tweener;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIBackScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, BaseUI, ButtonUtils, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "4c6bffGWH9M7p/MGFqrK8JG", "UIBackScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIBackScreen = exports('UIBackScreen', (_dec = ccclass('UIBackScreen'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIBackScreen, _BaseUI);

        function UIBackScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnBack", _descriptor, _assertThisInitialized(_this));

          _this.onMoveBack = null;
          _this._minigameManager = null;
          return _this;
        }

        var _proto = UIBackScreen.prototype;

        _proto.init = function init() {
          this._minigameManager = ServiceLocator.get(Define.Service.MinigameManager);
        };

        _proto.onEnable = function onEnable() {
          ButtonUtils.bind(this._btnBack, this.onClickBack, this);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnBack, this.onClickBack, this);
        };

        _proto.setCallback = function setCallback(handler) {
          this.onMoveBack = handler;
          return this;
        };

        _proto.onClickBack = function onClickBack() {
          this.hide();
          if (this.onMoveBack === null) return;
          this.onMoveBack();
          this.onMoveBack = null;

          this._minigameManager.removeGame();
        };

        return UIBackScreen;
      }(BaseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDealer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EDealer.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Component, EDealerAnimType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      EDealerAnimType = module.EDealerAnimType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "69c9eTKEEtGeItq1K6GEeCF", "UIDealer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIDealer = exports('UIDealer', (_dec = ccclass('UIDealer'), _dec2 = property({
        type: sp.Skeleton,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDealer, _Component);

        function UIDealer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_skeletonDealer", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UIDealer.prototype;

        _proto.onPlayAnimation = function onPlayAnimation(animType) {
          switch (animType) {
            case EDealerAnimType.Idle:
              this.playAnimIdle();
              break;

            case EDealerAnimType.CallBet:
              this.playAnimCallBet();
              break;

            default:
              this.playAnimIdle();
              break;
          }
        };

        _proto.playAnimIdle = function playAnimIdle() {
          if (this._skeletonDealer === null) {
            console.error("skeleton is not found");
            return;
          }

          this._skeletonDealer.setAnimation(0, 'dealer_idel', true);
        };

        _proto.playAnimCallBet = function playAnimCallBet() {
          if (this._skeletonDealer === null) {
            console.error("skeleton is not found");
            return;
          }

          this._skeletonDealer.setAnimation(0, 'animation', true);

          this._skeletonDealer.setCompleteListener(function (entry) {
            console.log("Finished animation: " + (entry.animation ? entry.animation.name : ''));

            if (entry.animation.name === 'win_intro') {
              console.log("Intro done, starting loop...");
            }
          });
        };

        _proto.stopAnimation = function stopAnimation() {
          if (!this._skeletonDealer) return;

          this._skeletonDealer.clearTracks(); // Stops everything

        };

        return UIDealer;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeletonDealer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIGamemenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Drag.ts', './ButtonUtils.ts', './BaseUI.ts', './ESound.ts', './EUIInfor.ts', './DowloadHandler.ts', './AsyncUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, Button, SpriteFrame, Drag, ButtonUtils, BaseUI, ESFXId, EUIPopups, DowloadHandler, AsyncUtils, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      Drag = module.Drag;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      EUIPopups = module.EUIPopups;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "24660c1ujVBJ7Thy+79xbDc", "UIGamemenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIGamemenu = exports('UIGamemenu', (_dec = ccclass('UIGamemenu'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property({
        visible: true,
        displayName: '== Button Settings ==',
        readonly: true
      }), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIGamemenu, _BaseUI);

        function UIGamemenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "userCoin", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "userAvatar", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "header_button", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnSettings", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnTutorial", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnUserProfile", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnLeaderboard", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnWheel", _descriptor9, _assertThisInitialized(_this));

          _this._userProfile = void 0;
          return _this;
        }

        var _proto = UIGamemenu.prototype;

        _proto.init = function init() {
          _BaseUI.prototype.init.call(this);

          this._userProfile = ServiceLocator.get(Define.Service.UserProfile);
        };

        _proto.onSetUI = function onSetUI() {
          console.log("UIMainmenu set UI");
          this.userName.string = this._userProfile.userData.userName;
          this.userCoin.string = this._userProfile.userData.coin.toString();
          this.userAvatar.spriteFrame = this._userProfile.AvatarImg;
        };

        _proto.onShow = function onShow() {
          this.test();
          this.onSetUI();
          this.onResetDragButton();
          ButtonUtils.bind(this.btnSettings, this.onShowSettings, this);
          ButtonUtils.bind(this.btnTutorial, this.onShowTutorial, this);
          ButtonUtils.bind(this.btnUserProfile, this.onShowUserProfile, this);
          ButtonUtils.bind(this.btnLeaderboard, this.onShowLeaderboard, this);
          ButtonUtils.bind(this.btnWheel, this.onShowWheel, this);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this.btnSettings, this.onShowSettings, this);
          ButtonUtils.unbind(this.btnTutorial, this.onShowTutorial, this);
          ButtonUtils.unbind(this.btnUserProfile, this.onShowUserProfile, this);
          ButtonUtils.unbind(this.btnLeaderboard, this.onShowLeaderboard, this);
          ButtonUtils.unbind(this.btnWheel, this.onShowWheel, this);
        };

        _proto.onShowSettings = function onShowSettings() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.uiManager.showPopup(EUIPopups.Setting);
        };

        _proto.onShowTutorial = function onShowTutorial() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.uiManager.showPopup(EUIPopups.Tutorial);
        };

        _proto.onShowUserProfile = function onShowUserProfile() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.uiManager.showPopup(EUIPopups.UserProfile);
        };

        _proto.onShowLeaderboard = function onShowLeaderboard() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.uiManager.showPopup(EUIPopups.Leaderboard);
        };

        _proto.onShowWheel = function onShowWheel() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.uiManager.showPopup(EUIPopups.Wheel);
        };

        _proto.onResetDragButton = function onResetDragButton() {
          this.btnWheel.getComponent(Drag).resetPosition();
        };

        _proto.test = /*#__PURE__*/function () {
          var _test = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var testImg;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this2._userProfile.userData.avatarUrl !== null && _this2._userProfile.userData.avatarUrl !== undefined && _this2._userProfile.userData.avatarUrl !== "";
                    }, 5000);

                  case 2:
                    testImg = null;
                    _context.prev = 3;
                    _context.next = 6;
                    return DowloadHandler.DownloadImageByUrl(this._userProfile.userData.avatarUrl);

                  case 6:
                    testImg = _context.sent;
                    _context.next = 13;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](3);
                    console.log("Download failed:", _context.t0);
                    testImg = null;

                  case 13:
                    if (testImg) {
                      this._userProfile.AvatarImg = SpriteFrame.createWithImage(testImg);
                      this.userAvatar.spriteFrame = SpriteFrame.createWithImage(testImg);
                    } else {
                      //console.log(`On show Popup ================`);
                      this.uiManager.showPopupDynamic("Th\xF4ng b\xE1o", "Kh\xF4ng th\u1EC3 l\u1EA5y \u0111\u01B0\u1EE3c h\xECnh \u1EA3nh avatar", "L\u1EA5y l\u1EA1i", function () {
                        return _this2.test();
                      });
                    }

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[3, 9]]);
          }));

          function test() {
            return _test.apply(this, arguments);
          }

          return test;
        }();

        return UIGamemenu;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userCoin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userAvatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "header_button", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSettings", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnTutorial", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnUserProfile", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnLeaderboard", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnWheel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILeaderboard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIPlayerCard.ts', './BaseUI.ts', './EUIInfor.ts', './DowloadHandler.ts', './ESound.ts', './ButtonUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, ScrollView, Layout, UITransform, UIPlayerCard, BaseUI, EUIPopups, DowloadHandler, ESFXId, ButtonUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Button = module.Button;
      ScrollView = module.ScrollView;
      Layout = module.Layout;
      UITransform = module.UITransform;
    }, function (module) {
      UIPlayerCard = module.UIPlayerCard;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      EUIPopups = module.EUIPopups;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "7b019y4/iBNeKrXSAu3iE/Q", "UILeaderboard", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UILeaderboard = exports('UILeaderboard', (_dec = ccclass('UILeaderboard'), _dec2 = property({
        type: Prefab,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec5 = property({
        type: ScrollView
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UILeaderboard, _BaseUI);

        function UILeaderboard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_playerCard", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_scrollView", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UILeaderboard.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
          this.uiManager.showPopup(EUIPopups.Loading);
          this.onLoadLeaderboard();
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onLoadLeaderboard = /*#__PURE__*/function () {
          var _onLoadLeaderboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.uiManager.showPopup(EUIPopups.Loading);
                    _context.prev = 1;
                    _context.next = 4;
                    return this.fetchLeaderboard();

                  case 4:
                    data = _context.sent;
                    this.fillLeaderboard(data);
                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    console.error("[UILeaderboard] Failed to load leaderboard:", _context.t0);

                  case 11:
                    this.uiManager.hidePopup(EUIPopups.Loading);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 8]]);
          }));

          function onLoadLeaderboard() {
            return _onLoadLeaderboard.apply(this, arguments);
          }

          return onLoadLeaderboard;
        }()
        /** Recycle all card items */
        ;

        _proto.clearLeaderboard = function clearLeaderboard() {
          var children = this._cardContainer.children;

          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            this.poolManager.despawnNode(child);
          }

          this._cardContainer.removeAllChildren();
        }
        /** Fill leaderboard using PoolManager */
        ;

        _proto.fillLeaderboard = function fillLeaderboard(leaderboardPlayers) {
          var _this2 = this;

          this.clearLeaderboard();
          leaderboardPlayers.players.forEach(function (player) {
            var item = _this2.poolManager.spawnNode(_this2._playerCard, _this2._cardContainer);

            var cardComp = item.getComponent(UIPlayerCard);
            cardComp.onSetUICard(player);
          });
          this.refreshScrollView();
        }
        /** ScrollView + Layout Force Refresh */
        ;

        _proto.refreshScrollView = function refreshScrollView() {
          var layout = this._cardContainer.getComponent(Layout);

          if (layout) {
            layout.updateLayout();
          } // Force content size update


          var uiTrans = this._cardContainer.getComponent(UITransform);

          if (uiTrans) {
            var size = uiTrans.contentSize;
            uiTrans.setContentSize(size);
          } // Reset scroll to top


          if (this._scrollView) {
            this._scrollView.scrollToTop(0.1, true);
          }
        };

        _proto.fetchLeaderboard = /*#__PURE__*/function () {
          var _fetchLeaderboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var url;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    url = "https://res.cloudinary.com/doatgdqwk/raw/upload/v1763371379/Test_yuc2t8.json";
                    _context2.next = 3;
                    return DowloadHandler.DownloadJSONByUrl(url);

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function fetchLeaderboard() {
            return _fetchLeaderboard.apply(this, arguments);
          }

          return fetchLeaderboard;
        }();

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UILeaderboard;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_playerCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_cardContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_scrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './RotateObject.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseUI, RotateObject;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      RotateObject = module.RotateObject;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "8137eUN7c5Gb5W02DsyU4Ve", "UILoading", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UILoading = exports('UILoading', (_dec = ccclass('UILoading'), _dec2 = property({
        type: RotateObject,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UILoading, _BaseUI);

        function UILoading() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_loadingObj", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UILoading.prototype;

        _proto.update = function update(deltaTime) {
          // Rotating the loading object follow deltaTime
          if (this._loadingObj && this._loadingObj.node.active) {
            this._loadingObj.setRotate(true);
          } else {
            this._loadingObj.setRotate(false);
          }
        };

        return UILoading;
      }(BaseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_loadingObj", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMainmenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './BaseUI.ts', './ESound.ts', './EUIInfor.ts', './ServiceLocator.ts', './Define.ts', './MinigameManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, ButtonUtils, BaseUI, ESFXId, EUIPopups, ServiceLocator, Define, EMiniGameType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      EUIPopups = module.EUIPopups;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      EMiniGameType = module.EMiniGameType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "dbbfbm/IZJHzp+aqvpq8ciL", "UIMainmenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIMainmenu = exports('UIMainmenu', (_dec = ccclass('UIMainmenu'), _dec2 = property({
        visible: true,
        displayName: '== Button Settings ==',
        readonly: true
      }), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIMainmenu, _BaseUI);

        function UIMainmenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "header_button", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnStartGame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType1", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType2", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType3", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType4", _descriptor6, _assertThisInitialized(_this));

          _this._minigameManager = void 0;
          return _this;
        }

        var _proto = UIMainmenu.prototype;

        _proto.init = function init() {
          _BaseUI.prototype.init.call(this);

          this._minigameManager = ServiceLocator.get(Define.Service.MinigameManager);
        };

        _proto.onShow = function onShow() {
          this.UIManager.showPopup(EUIPopups.GameMenu);
          ButtonUtils.bind(this.btnStartGame, this.onStartGame, this);
          ButtonUtils.bind(this.btnType1, this.onStartGame, this);
          ButtonUtils.bind(this.btnType2, this.onStartGame, this);
          ButtonUtils.bind(this.btnType3, this.onStartGame, this);
          ButtonUtils.bind(this.btnType4, this.onStartGame, this);
        };

        _proto.onHide = function onHide() {
          this.UIManager.hidePopup(EUIPopups.GameMenu);
          ButtonUtils.unbind(this.btnStartGame, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType1, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType2, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType3, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType4, this.onStartGame, this);
        };

        _proto.onStartGame = function onStartGame() {
          console.log("Start Game button clicked");
          this.audioManager.playSFX(ESFXId.SFX_Click);

          this._minigameManager.joinRoom(EMiniGameType.Poker);

          this.hide();
        };

        return UIMainmenu;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "header_button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnStartGame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnType1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnType2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnType3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnType4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './EUIInfor.ts', './BaseScreen.ts', './BasePopup.ts', './AsyncUtils.ts', './UIPopup.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Canvas, instantiate, Component, BaseUI, EUIScreens, EUIPopups, BaseScreen, BasePopup, AsyncUtils, UIPopup;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      EUIScreens = module.EUIScreens;
      EUIPopups = module.EUIPopups;
    }, function (module) {
      BaseScreen = module.BaseScreen;
    }, function (module) {
      BasePopup = module.BasePopup;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UIPopup = module.UIPopup;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "9fa23fpNsxPt517qTHqi837", "UIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIManager = exports('UIManager', (_dec = ccclass('UIManager'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: [BaseScreen],
        visible: true
      }), _dec5 = property({
        type: [BasePopup],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_screenContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_popupContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiScreen", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiPopup", _descriptor4, _assertThisInitialized(_this));

          _this._screensMap = new Map();
          _this._popupsMap = new Map();
          return _this;
        }

        var _proto = UIManager.prototype;

        _proto.reUpdateUI = function reUpdateUI() {
          var canvas = this.getComponent(Canvas);
          canvas.enabled = false;
          canvas.enabled = true;
        } //#region Screen Methods
        ;

        _proto.preLoadScreen = /*#__PURE__*/function () {
          var _preLoadScreen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(screen) {
            var node, success;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    node = this.initScreen(screen);
                    _context.next = 4;
                    return AsyncUtils.waitForCondition(function () {
                      return node !== null;
                    }, 5000);

                  case 4:
                    success = _context.sent;

                    if (!success) {
                      _context.next = 11;
                      break;
                    }

                    console.log(EUIScreens[screen] + " preloaded successfully.");
                    this.hideScreen(screen);
                    return _context.abrupt("return", true);

                  case 11:
                    console.warn("Preload timeout: " + EUIScreens[screen] + " could not be initialized.");
                    return _context.abrupt("return", false);

                  case 13:
                    _context.next = 19;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](0);
                    console.error("Error preloading " + EUIScreens[screen] + ":", _context.t0);
                    return _context.abrupt("return", false);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 15]]);
          }));

          function preLoadScreen(_x) {
            return _preLoadScreen.apply(this, arguments);
          }

          return preLoadScreen;
        }() // Initialize and cache a UI screen
        ;

        _proto.initScreen = function initScreen(uiType) {
          // Check if already cached
          if (this._screensMap.has(uiType)) {
            console.log(EUIScreens[uiType] + " already initialized.");
            return this._screensMap.get(uiType);
          } // Find prefab


          var screenPrefab = this._uiScreen.find(function (screen) {
            return screen.getScreenType() === uiType;
          }).getScreenPrefab();

          if (!screenPrefab) {
            console.warn("Prefab for " + uiType + " not found in _uiPrefabs.");
            return null;
          } // Instantiate and parent it


          var newScreen = instantiate(screenPrefab);

          this._screenContainer.addChild(newScreen); // Cache it


          this._screensMap.set(uiType, newScreen);

          console.log(EUIScreens[uiType] + " initialized and cached.");
          var ui = newScreen.getComponent(BaseUI);

          if (ui) {
            ui.setUIManager(this);
            ui.init();
          }

          return newScreen;
        } // Retrieve a cached screen 
        ;

        _proto.getScreen = function getScreen(screen) {
          return this._screensMap.get(screen) || null;
        } // Show screen (activate existing or init if needed)
        ;

        _proto.showScreen = function showScreen(screen) {
          console.log("Show screen:", screen);
          var node = this.getScreen(screen);

          if (!node) {
            node = this.initScreen(screen);

            if (!node) {
              console.error("Failed to initialize screen: " + screen);
              return;
            } else {
              this.hideAllScreens();
              var ui = node.getComponent(BaseUI); //console.log("Hiding all other screens before showing: ===============", ui.name);

              if (ui) {
                ui.show();
              }
            }
          } else {
            this.hideAllScreens();

            var _ui = node.getComponent(BaseUI);

            if (_ui) {
              _ui.show();
            }
          }
        };

        _proto.showScreenWithReturn = function showScreenWithReturn(screen, componentType) {
          this.showScreen(screen);
          var node = this.getScreen(screen);

          if (!node) {
            return null;
          }

          var ui = node.getComponent(componentType);
          return ui;
        } // Hide screen
        ;

        _proto.hideScreen = function hideScreen(screen) {
          // Hide screen if exists
          console.log("Hiding screen:", screen);
          var node = this.getScreen(screen);
          var ui = node.getComponent(BaseUI);

          if (ui) {
            ui.hide();
          }
        } //check if screen is visible
        ;

        _proto.isScreenVisible = function isScreenVisible(screen) {
          var node = this.getScreen(screen);

          if (node) {
            return node.active;
          }

          return false;
        } // Hide all screens
        ;

        _proto.hideAllScreens = function hideAllScreens() {
          this._screensMap.forEach(function (node) {
            var ui = node.getComponent(BaseUI);

            if (ui) {
              ui.hide();
            }
          });
        } //#endregion
        //#region Popup Methods
        ;

        _proto.preloadPopup = /*#__PURE__*/function () {
          var _preloadPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(popup) {
            var node, success;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    node = this.InitPopup(popup);
                    _context2.next = 4;
                    return AsyncUtils.waitForCondition(function () {
                      return node !== null;
                    }, 5000);

                  case 4:
                    success = _context2.sent;

                    if (!success) {
                      _context2.next = 11;
                      break;
                    }

                    console.log(EUIPopups[popup] + " preloaded successfully.");
                    this.hidePopup(popup);
                    return _context2.abrupt("return", true);

                  case 11:
                    console.warn("Preload timeout: " + EUIPopups[popup] + " could not be initialized.");
                    return _context2.abrupt("return", false);

                  case 13:
                    _context2.next = 19;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](0);
                    console.error("Error preloading " + EUIPopups[popup] + ":", _context2.t0);
                    return _context2.abrupt("return", false);

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 15]]);
          }));

          function preloadPopup(_x2) {
            return _preloadPopup.apply(this, arguments);
          }

          return preloadPopup;
        }();

        _proto.InitPopup = function InitPopup(uiType) {
          // Check if already cached
          if (this._popupsMap.has(uiType)) {
            console.log(EUIPopups[uiType] + " already initialized.");
            return this._popupsMap.get(uiType);
          } // Find prefab


          var popupPrefab = this._uiPopup.find(function (popup) {
            return popup.getPopupType() === uiType;
          }).getPopupPrefab();

          if (!popupPrefab) {
            console.warn("Prefab for " + uiType + " not found in _uiPrefabs.");
            return null;
          } // Instantiate and parent it


          var newPopup = instantiate(popupPrefab);

          this._popupContainer.addChild(newPopup); // Cache it


          this._popupsMap.set(uiType, newPopup);

          console.log(EUIPopups[uiType] + " initialized and cached.");
          var ui = newPopup.getComponent(BaseUI);

          if (ui) {
            ui.setUIManager(this);
            ui.init();
          }

          this.setPriorityPopup();
          return newPopup;
        };

        _proto.getPopup = function getPopup(popup) {
          return this._popupsMap.get(popup) || null;
        };

        _proto.showPopup = function showPopup(popup) {
          console.log("Show popup:", popup);
          var node = this.getPopup(popup);

          if (!node) {
            node = this.InitPopup(popup);

            if (!node) {
              console.error("Failed to initialize popup: " + popup);
              return;
            } else {
              var ui = node.getComponent(BaseUI);

              if (ui) {
                ui.show();
              }
            }
          } else {
            var _ui2 = node.getComponent(BaseUI);

            if (_ui2) {
              _ui2.show();
            }
          }
        };

        _proto.showPopupWithReturn = function showPopupWithReturn(popup, componentType) {
          this.showPopup(popup);
          var node = this.getPopup(popup);

          if (!node) {
            return null;
          }

          var ui = node.getComponent(componentType);
          return ui;
        };

        _proto.hidePopup = function hidePopup(popup) {
          console.log("Hiding popup:", popup);
          var node = this.getPopup(popup);
          var ui = node.getComponent(BaseUI);

          if (ui) {
            ui.hide();
          }
        };

        _proto.showPopupDynamic = function showPopupDynamic(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction) {
          var node = this.getPopup(EUIPopups.Popup);

          if (!node) {
            node = this.InitPopup(EUIPopups.Popup);

            if (!node) {
              console.error("Failed to initialize popup: " + EUIPopups.Popup);
              return;
            } else {
              node.getComponent(UIPopup).InitPopupDynamic(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction);
              node.getComponent(BaseUI).show();
            }
          } else {
            node.getComponent(UIPopup).InitPopupDynamic(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction);
            node.getComponent(BaseUI).show();
          }
        };

        _proto.showPopupDynamicHaveCloseButton = function showPopupDynamicHaveCloseButton(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction) {
          var node = this.getPopup(EUIPopups.Popup);

          if (!node) {
            node = this.InitPopup(EUIPopups.Popup);

            if (!node) {
              console.error("Failed to initialize popup: " + EUIPopups.Popup);
              return;
            } else {
              node.getComponent(UIPopup).InitPopupHaveCloseButton(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction);
              node.getComponent(BaseUI).show();
            }
          } else {
            node.getComponent(UIPopup).InitPopupHaveCloseButton(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction);
            node.getComponent(BaseUI).show();
          }
        };

        _proto.setPriorityPopup = function setPriorityPopup() {
          var _this2 = this; // Convert map entries to array


          var popupsArray = Array.from(this._popupsMap.keys());
          console.log("Setting popup priorities. Current popups:", popupsArray); // Sort based on enum order

          popupsArray.sort(function (a, b) {
            return a - b;
          }); // or reverse for higher priority first

          popupsArray.forEach(function (popupKey) {
            var popupNode = _this2._popupsMap.get(popupKey);

            if (popupNode) popupNode.setSiblingIndex(_this2._popupContainer.children.length - 1);
          });
        } //#endregion
        ;

        return UIManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_screenContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_popupContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_uiScreen", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_uiPopup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPlayerCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DowloadHandler.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, Component, SpriteFrame, DowloadHandler;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "b5fcbOFbRNCGbksfjLwMUw5", "UIPlayerCard", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIPlayerCard = exports('UIPlayerCard', (_dec = ccclass('UIPlayerCard'), _dec2 = property({
        type: Label,
        visible: true
      }), _dec3 = property({
        type: Sprite,
        visible: true
      }), _dec4 = property({
        type: Label,
        visible: true
      }), _dec5 = property({
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIPlayerCard, _Component);

        function UIPlayerCard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_playerRank", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playerAvatar", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playerName", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playerScore", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UIPlayerCard.prototype;
        /**
         * Set all UI values for the player card.
         */

        _proto.onSetUICard = /*#__PURE__*/function () {
          var _onSetUICard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(playerInfo) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Set rank based on rank from servẻ
                    this._playerRank.string = "" + playerInfo.playerRank.toString(); // Set player name

                    this._playerName.string = playerInfo.playerName; // Set score

                    this._playerScore.string = playerInfo.playerPoint.toString(); // Load avatar image

                    if (playerInfo.playerAvatarUrl) {
                      this.GetPlayerImg(playerInfo.playerAvatarUrl);
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onSetUICard(_x) {
            return _onSetUICard.apply(this, arguments);
          }

          return onSetUICard;
        }()
        /**
         * Download an image from URL and apply it to the avatar sprite.
         */
        ;

        _proto.GetPlayerImg = /*#__PURE__*/function () {
          var _GetPlayerImg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(playerUrl) {
            var image, spriteFrame;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return DowloadHandler.DownloadImageByUrl(playerUrl);

                  case 3:
                    image = _context2.sent;

                    if (image) {
                      _context2.next = 7;
                      break;
                    }

                    console.warn("[UIPlayerCard] Failed to download avatar");
                    return _context2.abrupt("return");

                  case 7:
                    spriteFrame = SpriteFrame.createWithImage(image);
                    this._playerAvatar.spriteFrame = spriteFrame;
                    _context2.next = 14;
                    break;

                  case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](0);
                    console.error("[UIPlayerCard] Error loading avatar:", _context2.t0);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 11]]);
          }));

          function GetPlayerImg(_x2) {
            return _GetPlayerImg.apply(this, arguments);
          }

          return GetPlayerImg;
        }();

        return UIPlayerCard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_playerRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_playerAvatar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_playerName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_playerScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './BaseUI.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, ButtonUtils, BaseUI, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "3b848lDos5D24C+MKpXFidE", "UIPopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIPopup = exports('UIPopup', (_dec = ccclass('UIPopup'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIPopup, _BaseUI);

        function UIPopup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "leftButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightButton", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeButton", _descriptor5, _assertThisInitialized(_this));

          _this.leftBtnAction = void 0;
          _this.rightBtnAction = void 0;
          return _this;
        }

        var _proto = UIPopup.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this.leftButton, this.onInvokeLeftAction, this);
          ButtonUtils.bind(this.rightButton, this.onInvokeRightAction, this);
          ButtonUtils.bind(this.closeButton, this.onClosePopup, this);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this.leftButton, this.onInvokeLeftAction, this);
          ButtonUtils.unbind(this.rightButton, this.onInvokeRightAction, this);
          ButtonUtils.unbind(this.closeButton, this.onClosePopup, this);
        } // Initialize popup with parameters
        ;

        _proto.InitPopupDynamic = function InitPopupDynamic(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction) {
          this.title.string = title;
          this.content.string = content; // Assign and Handle right button

          var rightLabel = this.rightButton.getComponentInChildren(Label);

          if (rightBtnAction) {
            this.rightButton.node.active = true;
            rightLabel.string = rightBtnTxt != null ? rightBtnTxt : "Accept";
            this.rightBtnAction = rightBtnAction;
          } else {
            this.rightButton.node.active = false;
          } // Assign and Handle left button


          var leftLabel = this.leftButton.getComponentInChildren(Label);

          if (leftBtnAction) {
            this.leftButton.node.active = true;
            leftLabel.string = leftBtnTxt != null ? leftBtnTxt : "Cancel";
            this.leftBtnAction = leftBtnAction;
          } else {
            this.leftButton.node.active = false;
          }

          this.handleVisualButton();
        };

        _proto.InitPopupHaveCloseButton = function InitPopupHaveCloseButton(title, content, rightBtnTxt, rightBtnAction, leftBtnTxt, leftBtnAction) {
          this.title.string = title;
          this.content.string = content; // Assign and Handle right button

          var rightLabel = this.rightButton.getComponentInChildren(Label);

          if (rightBtnAction) {
            this.rightButton.node.active = true;
            rightLabel.string = rightBtnTxt != null ? rightBtnTxt : "Accept";
            this.rightBtnAction = rightBtnAction;
          } else {
            this.rightButton.node.active = false;
          } // Assign and Handle left button


          var leftLabel = this.leftButton.getComponentInChildren(Label);

          if (leftBtnAction) {
            this.leftButton.node.active = true;
            leftLabel.string = leftBtnTxt != null ? leftBtnTxt : "Cancel";
            this.leftBtnAction = leftBtnAction;
          } else {
            this.leftButton.node.active = false;
          }

          this.handleVisualButton();
        } //Handle visual button if needed
        ;

        _proto.handleVisualButton = function handleVisualButton(haveCloseBtn) {
          if (this.leftButton.node.active && this.rightButton.node.active) ;else if (this.rightButton.node.active) ;
          this.closeButton.node.active = haveCloseBtn ? true : false;
        };

        _proto.onInvokeLeftAction = function onInvokeLeftAction() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.leftBtnAction.call(this);
          this.hide();
        };

        _proto.onInvokeRightAction = function onInvokeRightAction() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.rightBtnAction.call(this);
          this.hide();
        };

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UIPopup;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "leftButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rightButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UISetting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './ToggleUtils.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Toggle, BaseUI, ButtonUtils, ToggleUtils, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Toggle = module.Toggle;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ToggleUtils = module.ToggleUtils;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "62014Nx7yVNGI0+ZQNHdBNo", "UISetting", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UISetting = exports('UISetting', (_dec = ccclass('UISetting'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec3 = property({
        type: Toggle,
        visible: true
      }), _dec4 = property({
        type: Toggle,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UISetting, _BaseUI);

        function UISetting() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnClose", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_musicToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sfxToggle", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UISetting.prototype;

        _proto.onShow = function onShow() {
          // Attach event listeners when panel shows
          ToggleUtils.bindToggle(this._musicToggle, this.onMusicToggleChanged, this);
          ToggleUtils.bindToggle(this._sfxToggle, this.onSFXToggleChanged, this);
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onHide = function onHide() {
          // Detach listeners to prevent duplicates or leaks  
          ToggleUtils.unbindToggle(this._musicToggle, this.onMusicToggleChanged, this);
          ToggleUtils.unbindToggle(this._sfxToggle, this.onSFXToggleChanged, this);
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onMusicToggleChanged = function onMusicToggleChanged() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.audioManager.muteMusic(!this._musicToggle.isChecked);
        };

        _proto.onSFXToggleChanged = function onSFXToggleChanged() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.audioManager.muteSFX(!this._sfxToggle.isChecked);
        };

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UISetting;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_musicToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_sfxToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UISplashScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './EUIInfor.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, ProgressBar, BaseUI, EUIScreens, EUIPopups, AsyncUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      EUIScreens = module.EUIScreens;
      EUIPopups = module.EUIPopups;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "1d396nI/oBKuokSXoex7NX5", "UISplashScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UISplashScreen = exports('UISplashScreen', (_dec = ccclass('UISplashScreen'), _dec2 = property({
        type: ProgressBar,
        visible: true
      }), _dec3 = property({
        min: 0,
        slide: true,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UISplashScreen, _BaseUI);

        function UISplashScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_progressBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_speedTestProgress", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UISplashScreen.prototype;

        _proto.setProgress = function setProgress(value) {
          if (this._progressBar) {
            this._progressBar.progress = value;
          }
        };

        _proto.onShow = function onShow() {
          //console.warn('SplashScreen shown, starting preload of MainMenu. ============');
          this.setProgress(0.0);
          this.onPreload();
        };

        _proto.onPreload = /*#__PURE__*/function () {
          var _onPreload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var isLoadPopup, isLoadScreen;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this2.uiManager.preloadPopup(EUIPopups.GameMenu);
                    }, 5000);

                  case 2:
                    isLoadPopup = _context.sent;
                    _context.next = 5;
                    return AsyncUtils.waitForCondition(function () {
                      return _this2.uiManager.preLoadScreen(EUIScreens.MainMenu);
                    }, 5000);

                  case 5:
                    isLoadScreen = _context.sent;
                    _context.next = 8;
                    return AsyncUtils.waitForCondition(function () {
                      return _this2._progressBar.progress > 0.85;
                    });

                  case 8:
                    if (!(isLoadScreen && isLoadPopup)) {
                      _context.next = 15;
                      break;
                    }

                    this.setProgress(1.0);
                    _context.next = 12;
                    return AsyncUtils.waitForSeconds(0.5);

                  case 12:
                    // Small delay to show full progress
                    this.uiManager.showScreen(EUIScreens.MainMenu);
                    _context.next = 16;
                    break;

                  case 15:
                    console.warn('Preload timeout: MainMenu did not finish loading.');

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onPreload() {
            return _onPreload.apply(this, arguments);
          }

          return onPreload;
        }();

        _proto.update = function update(dt) {
          //
          if (this._progressBar && this._progressBar.progress < 1.0) {
            this._progressBar.progress += dt * this._speedTestProgress;
          }
        };

        return UISplashScreen;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_speedTestProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITutorial.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Node, Button, BaseUI, ButtonUtils, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      Button = module.Button;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "f528bF5Gj1IrL3sg//bqL+D", "UITutorial", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UITutorial = exports('UITutorial', (_dec = ccclass('UITutorial'), _dec2 = property({
        type: ToggleContainer,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UITutorial, _BaseUI);

        function UITutorial() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_toggleContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_contentContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UITutorial.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onCheckToggle = function onCheckToggle() {
          if (!this._toggleContainer) return;
          var toggles = this._toggleContainer.toggleItems;

          for (var i = 0; i < toggles.length; i++) {
            var toggle = toggles[i];

            if (toggle.isChecked) {
              console.log("Toggle index:", i, "name:", toggle.node.name); // Example: activate content based on toggle

              this.showContentByIndex(i);
              break;
            }
          }
        };

        _proto.showContentByIndex = function showContentByIndex(index) {
          if (!this._contentContainer) return;
          var children = this._contentContainer.children;
          children.forEach(function (child, i) {
            child.active = i === index;
          });
        };

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UITutorial;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_toggleContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_contentContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIUserProfile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, BaseUI, ButtonUtils, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "199f0Lo+n5KX4VZDe0W5P15", "UIUserProfile", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIUserProfile = exports('UIUserProfile', (_dec = ccclass('UIUserProfile'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIUserProfile, _BaseUI);

        function UIUserProfile() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnClose", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UIUserProfile.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UIUserProfile;
      }(BaseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './EWheel.ts', './ButtonUtils.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, math, BaseUI, EWheelStatus, ButtonUtils, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      math = module.math;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      EWheelStatus = module.EWheelStatus;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

      cclegacy._RF.push({}, "c0c69aZgaNBg7j0ePhSyrcp", "UIWheel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIWheel = exports('UIWheel', (_dec = ccclass('UIWheel'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        visible: true
      }), _dec7 = property({
        visible: true
      }), _dec8 = property({
        visible: true
      }), _dec9 = property({
        readonly: true,
        visible: true
      }), _dec10 = property({
        visible: true,
        tooltip: "offset so it doesn't stop on the line"
      }), _dec11 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UIWheel, _BaseUI);

        function UIWheel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnSpin", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_spin", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_minRound", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_maxRound", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_speedRotate", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_startSpeedSpin", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_numberItem", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_offsetAngle", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isReverse", _descriptor10, _assertThisInitialized(_this));

          _this._speedSpin = 0;
          _this._deceleration = 0;
          _this._isSpinning = false;
          _this._targetRotationForSnap = 0;
          _this._eWheelStatus = EWheelStatus.Idle;
          return _this;
        }

        var _proto = UIWheel.prototype;

        _proto.onShow = function onShow() {
          this._eWheelStatus = EWheelStatus.Rotate;
          ButtonUtils.bind(this._btnSpin, this.onStartSpin, this);
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onHide = function onHide() {
          this._eWheelStatus = EWheelStatus.Idle;
          ButtonUtils.unbind(this._btnSpin, this.onStartSpin, this);
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onStartSpin = function onStartSpin() {
          this._eWheelStatus = EWheelStatus.Spin;
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.startSpin(1);
        };

        _proto.startSpin = function startSpin(targetIndex) {
          if (this._isSpinning) return;
          this._isSpinning = true;
          this._speedSpin = this._startSpeedSpin; // 1. Calculate Standard Constants

          var rounds = math.randomRangeInt(this._minRound, this._maxRound);
          var anglePerItem = 360 / this._numberItem; // 2. Normalize Current Angle to strictly positive 0-360 for calculation
          // This handles cases where the wheel has spun -7000 degrees or +500 degrees previously

          var currentRot = this._spin.angle % 360;
          if (currentRot < 0) currentRot += 360; // 3. Calculate Target Angle (Where the item is on the circle 0-360)
          // Note: This logic assumes Item 0 starts at angle 0.

          var targetItemAngle = targetIndex * anglePerItem; // 4. Calculate Distance to Travel based on Direction

          var angleToRotate = 0;

          if (this._isReverse) {
            // --- REVERSE (Counter-Clockwise) ---
            // We want to go from Current -> Target by INCREASING angle.
            // Gap = Target - Current. 
            // Example: Current 350, Target 10. Gap = 10 - 350 = -340. Add 360 = 20 degrees travel.
            angleToRotate = targetItemAngle - currentRot;
            if (angleToRotate < 0) angleToRotate += 360;
          } else {
            // --- NORMAL (Clockwise) ---
            // We want to go from Current -> Target by DECREASING angle.
            // Gap = Current - Target.
            // Example: Current 10, Target 350. Gap = 10 - 350 = -340. Add 360 = 20 degrees travel (backwards).
            angleToRotate = currentRot - targetItemAngle;
            if (angleToRotate < 0) angleToRotate += 360;
          } // 5. Add Rounds


          var totalAngleToRotate = angleToRotate + rounds * 360; // 6. Apply Random Variation & Padding

          var halfSlice = anglePerItem / 2;
          var safeRange = halfSlice - this._offsetAngle;
          var randomVariation = math.randomRange(-safeRange, safeRange); // Add variation to total distance

          totalAngleToRotate += randomVariation; // 7. Calculate Physics (Deceleration is always negative relative to speed magnitude)
          // a = -(v^2) / (2d)

          this._deceleration = -(this._startSpeedSpin * this._startSpeedSpin) / (2 * totalAngleToRotate); // 8. Calculate Final Snap Angle

          if (this._isReverse) {
            // Moving Positive
            this._targetRotationForSnap = this._spin.angle + totalAngleToRotate;
          } else {
            // Moving Negative
            this._targetRotationForSnap = this._spin.angle - totalAngleToRotate;
          }

          console.log("Reverse: " + this._isReverse + ", Current: " + currentRot.toFixed(2) + ", Target: " + targetIndex + ", Dist: " + totalAngleToRotate.toFixed(2));
        };

        _proto.update = function update(deltaTime) {
          switch (this._eWheelStatus) {
            case EWheelStatus.Idle:
              break;

            case EWheelStatus.Rotate:
              this.onRotate(deltaTime);
              break;

            case EWheelStatus.Spin:
              this.onSpin(deltaTime);
              break;
          }
        };

        _proto.onRotate = function onRotate(deltaTime) {
          if (this._eWheelStatus !== EWheelStatus.Rotate) return;
          var deltaAngle = this._speedRotate * deltaTime; // 2. Rotate based on direction

          if (this._isReverse) {
            this._spin.angle += deltaAngle; // Counter-Clockwise
          } else {
            this._spin.angle -= deltaAngle; // Clockwise
          }
        };

        _proto.onSpin = function onSpin(deltaTime) {
          if (this._eWheelStatus !== EWheelStatus.Spin) return; // 1. Calculate Delta (How much to move this frame)

          var deltaAngle = this._speedSpin * deltaTime; // 2. Rotate based on direction

          if (this._isReverse) {
            this._spin.angle += deltaAngle; // Counter-Clockwise
          } else {
            this._spin.angle -= deltaAngle; // Clockwise
          } // 3. Apply Deceleration
          // Deceleration is negative, so adding it reduces speed


          this._speedSpin += this._deceleration * deltaTime; // 4. Check if stopped

          if (this._speedSpin <= 0) {
            this._speedSpin = 0;
            this._isSpinning = false; // 5. Snap to calculated position
            //this._spin.angle = this._targetRotationForSnap;

            this.onSpinFinished();
          }
        };

        _proto.onSpinFinished = function onSpinFinished() {
          // Normalize angle to prevent massive floating point numbers after many spins
          this._spin.angle = this._spin.angle % 360;
          this._eWheelStatus = EWheelStatus.Rotate;
          console.log("Finished. Angle: " + this._spin.angle.toFixed(2));
        };

        _proto.onClosePopup = function onClosePopup() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
          this.hide();
        };

        return UIWheel;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnSpin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_spin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_minRound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_maxRound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_speedRotate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_startSpeedSpin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_numberItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_offsetAngle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_isReverse", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserCurrency.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "252d8GyXWJASZmksBSNWni/", "UserCurrency", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserCurrency = exports('UserCurrency', (_dec = ccclass('UserCurrency'), _dec2 = property({
        readonly: true,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserCurrency, _Component);

        function UserCurrency() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.events = new EventTarget();
          _this.ON_UPDATE_CURRENCY = 'onUpdateCurrency';

          _initializerDefineProperty(_this, "_currency", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UserCurrency.prototype;

        _proto.setCurrency = function setCurrency(value) {
          this._currency = value;
          this.events.emit(this.ON_UPDATE_CURRENCY, this._currency);
        };

        _proto.add = function add(value) {
          this._currency += value;
          this.events.emit(this.ON_UPDATE_CURRENCY, this._currency);
        };

        _proto.substract = function substract(value) {
          if (value >= this._currency) {
            this._currency = 0;
            this.events.emit(this.ON_UPDATE_CURRENCY, this._currency);
            return true;
          } else {
            this._currency -= value;
            this.events.emit(this.ON_UPDATE_CURRENCY, this._currency);
            return false;
          }
        };

        _createClass(UserCurrency, [{
          key: "currency",
          get: function get() {
            return this._currency;
          }
        }]);

        return UserCurrency;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_currency", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eb79ar+K6hJHrIpKQvxujKc", "UserData", undefined);

      var UserData = exports('UserData', /*#__PURE__*/function () {
        function UserData(builder) {
          this._userID = void 0;
          this._userName = 'testUser';
          this._email = '';
          this._avatarUrl = void 0;
          this._avatarImg = null;
          this._level = 1;
          this._coin = 0;
          this.updateData(builder);
        }

        var _proto = UserData.prototype;

        _proto.updateData = function updateData(builder) {
          this._userID = builder.UserID;
          this._userName = builder.UserName;
          this._email = builder.Email;
          this._avatarUrl = builder.AvatarUrl;
          this._avatarImg = builder.AvatarImg;
          this._level = builder.Level;
          this._coin = builder.Coin;
        };

        _createClass(UserData, [{
          key: "userID",
          get: function get() {
            return this._userID;
          }
        }, {
          key: "userName",
          get: function get() {
            return this._userName;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          }
        }, {
          key: "avatarUrl",
          get: function get() {
            return this._avatarUrl;
          }
        }, {
          key: "avatarImg",
          get: function get() {
            return this._avatarImg;
          }
        }, {
          key: "level",
          get: function get() {
            return this._level;
          }
        }, {
          key: "coin",
          get: function get() {
            return this._coin;
          }
        }]);

        return UserData;
      }());
      var UserDataBuilder = exports('UserDataBuilder', /*#__PURE__*/function () {
        function UserDataBuilder() {
          this.UserID = void 0;
          this.UserName = 'testUser';
          this.Email = '';
          this.AvatarUrl = void 0;
          this.AvatarImg = null;
          this.Level = 1;
          this.Coin = 0;
          this._userData = void 0;
        }

        var _proto2 = UserDataBuilder.prototype;

        _proto2.setUserID = function setUserID(id) {
          this.UserID = id;
          return this;
        };

        _proto2.setName = function setName(name) {
          this.UserName = name;
          return this;
        };

        _proto2.setEmail = function setEmail(email) {
          this.Email = email;
          return this;
        };

        _proto2.setAvatarUrl = function setAvatarUrl(url) {
          this.AvatarUrl = url;
          return this;
        };

        _proto2.setAvatarImage = function setAvatarImage(avatar) {
          this.AvatarImg = avatar;
          return this;
        };

        _proto2.setLevel = function setLevel(level) {
          this.Level = level;
          return this;
        };

        _proto2.setCoin = function setCoin(coin) {
          this.Coin = coin;
          return this;
        };

        _proto2.build = function build() {
          this._userData = new UserData(this);
          return this._userData;
        };

        _proto2.update = function update() {
          if (!this._userData) {
            console.error("UserData is Null");
            return;
          }

          this._userData.updateData(this);
        };

        return UserDataBuilder;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserOptionsPanel.ts', './UserRaisePanel.ts', './PokerUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, UserOptionsPanel, UserRaisePanel, PokerUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }, function (module) {
      UserOptionsPanel = module.UserOptionsPanel;
    }, function (module) {
      UserRaisePanel = module.UserRaisePanel;
    }, function (module) {
      PokerUI = module.PokerUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "209a68VElpNRJfnlf6hrMvQ", "UserHUD", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserHUD = exports('UserHUD', (_dec = ccclass('UserHUD'), _dec2 = property({
        type: UserOptionsPanel,
        visible: true
      }), _dec3 = property({
        type: UserRaisePanel,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(UserHUD, _PokerUI);

        function UserHUD() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;
          _this.Events = new EventTarget();
          _this.ON_CHOOSING_OPTION = 'onChoosingOption';

          _initializerDefineProperty(_this, "_userOptionsPanel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userRaisePanel", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UserHUD.prototype;

        _proto.onLoad = function onLoad() {
          this._userOptionsPanel.initHUD(this);

          this._userRaisePanel.initHUD(this);
        };

        _proto.setAudio = function setAudio(audio) {
          _PokerUI.prototype.setAudio.call(this, audio);

          this._userOptionsPanel.setAudio(audio);

          this._userRaisePanel.setAudio(audio);
        };

        _proto.show = function show() {
          this.setActiveOptionsPanel(true);
          this.setActiveSliderPanel(false);

          this._userOptionsPanel.setEvents();

          _PokerUI.prototype.show.call(this);
        };

        _proto.hide = function hide() {
          this._userOptionsPanel.removeEvents();

          _PokerUI.prototype.hide.call(this);
        };

        _proto.setRaiseRange = function setRaiseRange(minRaise, maxRaise) {
          this._userRaisePanel.setRaiseRange(minRaise, maxRaise);

          return this;
        };

        _proto.setOptions = function setOptions() {
          var _this$_userOptionsPan;

          (_this$_userOptionsPan = this._userOptionsPanel).setOptions.apply(_this$_userOptionsPan, arguments);

          return this;
        };

        _proto.setShowHandOptions = function setShowHandOptions(isShowDown) {
          this._userOptionsPanel.setShowHandOptions(isShowDown);

          return this;
        };

        _proto.setActiveOptionsPanel = function setActiveOptionsPanel(isOpen) {
          if (isOpen) this._userOptionsPanel.show();else this._userOptionsPanel.hide();
        };

        _proto.setActiveSliderPanel = function setActiveSliderPanel(isOpen) {
          if (isOpen) this._userRaisePanel.show();else this._userRaisePanel.hide();
        };

        _proto.sendOptions = function sendOptions(eUserOptions, raiseValue) {
          this.Events.emit(this.ON_CHOOSING_OPTION, eUserOptions, raiseValue);
        };

        return UserHUD;
      }(PokerUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userOptionsPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_userRaisePanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserInforPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardView.ts', './RotateObject.ts', './PoolAsset.ts', './FloatingObject.ts', './UserNotiOption.ts', './PokerUI.ts', './DowloadHandler.ts', './AsyncUtils.ts', './CheckHandRank.ts', './Tweener.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, RichText, Label, Node, tween, v3, CardView, ECardEffect, RotateObject, EPoolType, FloatingObject, UserNotiOption, PokerUI, DowloadHandler, AsyncUtils, CheckHandRank, Tweener, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      RichText = module.RichText;
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      CardView = module.CardView;
      ECardEffect = module.ECardEffect;
    }, function (module) {
      RotateObject = module.RotateObject;
    }, function (module) {
      EPoolType = module.EPoolType;
    }, function (module) {
      FloatingObject = module.FloatingObject;
    }, function (module) {
      UserNotiOption = module.UserNotiOption;
    }, function (module) {
      PokerUI = module.PokerUI;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "2060b5U6pZFWYVo1mSVjLxw", "UserInforPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserInforPanel = exports('UserInforPanel', (_dec = ccclass('UserInforPanel'), _dec2 = property({
        type: CardView,
        visible: true
      }), _dec3 = property({
        type: Sprite,
        visible: true
      }), _dec4 = property({
        type: Sprite,
        visible: true
      }), _dec5 = property({
        type: RichText,
        visible: true
      }), _dec6 = property({
        type: RichText,
        visible: true
      }), _dec7 = property({
        type: Label,
        visible: true
      }), _dec8 = property({
        type: RotateObject,
        visible: true
      }), _dec9 = property({
        type: RotateObject,
        visible: true
      }), _dec10 = property({
        type: Node,
        visible: true
      }), _dec11 = property({
        type: UserNotiOption,
        visible: true
      }), _dec12 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(UserInforPanel, _PokerUI);

        function UserInforPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_cardViews", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sprAvatar", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sprCountDown", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtName", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtChip", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtCurrentBet", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_turnEffect", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_winEffect", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loseEffectGroup", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userNotiOption", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_avatarHolder", _descriptor11, _assertThisInitialized(_this));

          _this._currentBet = 0;
          _this._currentCardIndex = 0;
          _this._user = null;
          _this._countDownTween = void 0;
          _this._userCards = [];
          return _this;
        }

        var _proto = UserInforPanel.prototype; // test

        _proto.showNoti = function showNoti(optionType, autoHide) {
          if (autoHide === void 0) {
            autoHide = true;
          }

          this.audio.playSFX(ESFXId.SFX_Tap);

          this._userNotiOption.showNoti(optionType, autoHide);
        };

        _proto.spawnFloatingText = function spawnFloatingText(value, onComplete) {
          var _this2 = this;

          var node = this.poolManager.spawnNodeByType(EPoolType.FloatingText, this.node);
          var floatingText = node.getComponent(FloatingObject);
          node.worldPosition = this.node.worldPosition;
          floatingText.getUIObject(Label).string = "+" + value;
          floatingText.setDistance(80).setFloatDuration(0.5).setFadeDuration(0.2).doPlay(function () {
            if (onComplete) onComplete();

            _this2.poolManager.despawnNode(node);
          });
        };

        _proto.doCountDown = function doCountDown(duration, onComplete) {
          var _this3 = this;

          this._sprCountDown.node.active = true;
          this._sprCountDown.fillRange = 1;
          this._countDownTween = tween(this._sprCountDown).to(duration, {
            fillRange: 0
          }).call(function () {
            if (onComplete) onComplete();
            _this3._sprCountDown.node.active = false;
          }).start();
        };

        _proto.stopCountDown = function stopCountDown() {
          this._sprCountDown.node.active = false;

          if (this._countDownTween) {
            this._countDownTween.stop();

            this._countDownTween = null;
          }
        };

        _proto.setName = function setName(userName) {
          this._txtName.string = userName;
          return this;
        };

        _proto.setCoin = function setCoin(currentChip) {
          this._txtChip.string = currentChip.toString();
          return this;
        };

        _proto.setAvatar = function setAvatar(spriteFrame) {
          this._sprAvatar.spriteFrame = spriteFrame;
          return this;
        };

        _proto.setCurrentBet = function setCurrentBet(currentBet) {
          this._currentBet += currentBet;
          this._txtCurrentBet.string = this._currentBet.toString();

          if (currentBet > 0) {
            this._txtCurrentBet.node.active = true;
          } else {
            this._txtCurrentBet.node.active = false;
          }

          return this;
        };

        _proto.resetState = function resetState() {
          this._userNotiOption.hideNoti();

          this._currentBet = 0;
          this.setCurrentBet(0);
          this._currentCardIndex = 0;

          this._cardViews.forEach(function (c) {
            return c.resetState();
          });

          this._winEffect.setRotate(false);

          this._winEffect.node.parent.active = false;

          this._turnEffect.setRotate(false);

          this._turnEffect.node.active = false;
          this._userCards = [];

          this._cardViews.forEach(function (card) {
            card.setActiveModel(false);
          });

          this.onUpdateUIWhenFold(false);
          this.setEffectForLoser(false);
        };

        _proto.onDisable = function onDisable() {//this.removeEvents();
        };

        _proto.onUpdateChip = function onUpdateChip(currentChip) {
          this._txtChip.string = currentChip.toString();
          return this;
        };

        _proto.onReceiveCard = function onReceiveCard(card) {
          var cardView = this._cardViews[this._currentCardIndex];
          cardView.node.active = true;
          cardView.loadCard(card.suit, card.rank);

          this._userCards.push(card);

          this._currentCardIndex++;
        };

        _proto.setCardEffectForWinner = function setCardEffectForWinner(cards) {
          this._cardViews.forEach(function (cv) {
            cv.checkCardEffect(cards);
          });
        };

        _proto.setCardEffectForLoser = function setCardEffectForLoser() {
          this._cardViews.forEach(function (cv) {
            cv.setEffect(ECardEffect.Dim);
          });
        };

        _proto.onStartGame = function onStartGame() {
          this.resetState();
        };

        _proto.onEndGame = function onEndGame() {};

        _proto.onStartTurn = function onStartTurn() {// this._turnEffect.node.active = true;
          // this._turnEffect.setRotate(true);
          // this._turnEffect.node.scale = v3(0, 0, 0);
          // tween(this._turnEffect.node)
          //     .to(0.2, { scale: v3(1, 1, 1) })
          //     .start();
        };

        _proto.onEndTurn = function onEndTurn() {// this._turnEffect.node.active = false;
          // this._turnEffect.setRotate(false);
        };

        _proto.onChoosingOption = function onChoosingOption(eUserOptions) {};

        _proto.onWin = function onWin() {
          this._winEffect.node.parent.active = true;

          this._winEffect.setRotate(true);

          this._winEffect.node.scale = v3(0, 0, 0);
          tween(this._winEffect.node).to(0.2, {
            scale: v3(1, 1, 1)
          }).start();
        };

        _proto.onSetUserDataUI = function onSetUserDataUI(name, avatarUrl) {
          //console.log("======== set ");
          this._txtName.string = name;
          this.GetPlayerImg(avatarUrl);

          this._cardViews.forEach(function (card) {
            card.setActiveModel(false);
          });
        };

        _proto.GetPlayerImg = /*#__PURE__*/function () {
          var _GetPlayerImg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(playerUrl) {
            var img;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return DowloadHandler.GetImageByUrl(playerUrl);

                  case 2:
                    img = _context.sent;

                    if (img) {
                      this.setAvatar(img);
                    } else {
                      console.error("cannot get image of user " + playerUrl); //this.GetPlayerImg(playerUrl);
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function GetPlayerImg(_x) {
            return _GetPlayerImg.apply(this, arguments);
          }

          return GetPlayerImg;
        }();

        _proto.onShowCard = /*#__PURE__*/function () {
          var _onShowCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this4 = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this4._cardViews.length === 2;
                    });

                  case 2:
                    this._cardViews.forEach(function (card) {
                      _this4.audio.playSFX(ESFXId.SFX_CardFlip);

                      card.doFlip(true);
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function onShowCard() {
            return _onShowCard.apply(this, arguments);
          }

          return onShowCard;
        }();

        _proto.onSortCardViews = /*#__PURE__*/function () {
          var _onSortCardViews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this5 = this;

            var sortedCards, i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this5._userCards.length >= 2;
                    });

                  case 2:
                    // 1. Sort the data
                    sortedCards = CheckHandRank.sortCards(this._userCards); // 2. Update the internal list

                    this._userCards = sortedCards; // 3. Loop through views and overwrite their data

                    for (i = 0; i < this._cardViews.length; i++) {
                      if (i < sortedCards.length) {
                        this._cardViews[i].loadCard(sortedCards[i].suit, sortedCards[i].rank);
                      }
                    }

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function onSortCardViews() {
            return _onSortCardViews.apply(this, arguments);
          }

          return onSortCardViews;
        }();

        _proto.onUpdateUIWhenFold = function onUpdateUIWhenFold(isFold) {
          this._txtCurrentBet.node.active = !isFold;
          this._cardViews[0].node.parent.active = !isFold;

          if (isFold) {
            Tweener.Transparency(this._avatarHolder.getComponent(Sprite), 255, 155, 0.1);
          } else {
            Tweener.Transparency(this._avatarHolder.getComponent(Sprite), 155, 255, 0.1);
          }
        };

        _proto.setEffectForLoser = function setEffectForLoser(isActive) {
          this._loseEffectGroup.active = isActive;
        };

        _createClass(UserInforPanel, [{
          key: "user",
          set: function set(user) {
            this._user = user;
          }
        }]);

        return UserInforPanel;
      }(PokerUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_cardViews", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sprAvatar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_sprCountDown", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_txtName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_txtChip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_txtCurrentBet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_turnEffect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_winEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_loseEffectGroup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_userNotiOption", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_avatarHolder", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserInforUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserInforPanel.ts', './PokerUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UserInforPanel, PokerUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      UserInforPanel = module.UserInforPanel;
    }, function (module) {
      PokerUI = module.PokerUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "a8199MiyGdApIdwtMKUPi+f", "UserInforUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserInforUI = exports('UserInforUI', (_dec = ccclass('UserInforUI'), _dec2 = property({
        type: [UserInforPanel],
        visible: true
      }), _dec3 = property({
        type: [Node],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(UserInforUI, _PokerUI);

        function UserInforUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userPanels", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_nodePositions", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UserInforUI.prototype; // @property({ type: Prefab, visible: true })
        // private _userPanel: Prefab = null;
        // @property({ type: Prefab, visible: true })
        // private _otherUserPanel: Prefab = null;

        _proto.init = function init() {
          this._userPanels.forEach(function (u) {
            u.init();
          });
        };

        _proto.setAudio = function setAudio(audio) {
          _PokerUI.prototype.setAudio.call(this, audio);

          this._userPanels.forEach(function (u) {
            u.setAudio(audio);
          });
        };

        _proto.resetState = function resetState() {
          this._userPanels.forEach(function (u) {
            return u.resetState();
          });
        } // public onLoadUserInfor(snapshot: RoomSnapshot): void {
        //     snapshot.users.forEach(u => {
        //         let prefabSpawn = null;
        //         if (u.userId == UserProfile.Instance.userData.UserID) {
        //             prefabSpawn = this._userPanel;
        //         }
        //         else {
        //             prefabSpawn = this._otherUserPanel;
        //         }
        //         const newNode: Node = PoolManager.Instance.getNode(prefabSpawn, this.node);
        //         newNode.worldPosition = this._nodePositions[u.position].getWorldPosition();
        //         newNode.getComponent(UserInforPanel).setName(u.username);
        //         newNode.getComponent(UserInforPanel).setCoin(u.coin);
        //     });
        // }
        ;

        _proto.getPanels = function getPanels(panelCount) {
          return this._userPanels.slice(0, panelCount);
        };

        _proto.getPanel = function getPanel(index) {
          return this._userPanels[index];
        };

        _proto.getPanelsLength = function getPanelsLength() {
          return this._userPanels.length;
        };

        _proto.sortCardViewForAllUser = function sortCardViewForAllUser() {
          this._userPanels.forEach(function (panel) {
            panel.onSortCardViews();
          });
        };

        return UserInforUI;
      }(PokerUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userPanels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_nodePositions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoleAssigner.ts', './TurnHandler.ts', './PokerUser.ts', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, RoleAssigner, TurnHandler, PokerUser, GameplayHandler;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      RoleAssigner = module.RoleAssigner;
    }, function (module) {
      TurnHandler = module.TurnHandler;
    }, function (module) {
      PokerUser = module.PokerUser;
    }, function (module) {
      GameplayHandler = module.GameplayHandler;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b11aczeK/hEwb23PMoZAPF7", "UserManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserManager = exports('UserManager', (_dec = ccclass('UserManager'), _dec2 = property({
        type: PokerUser,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameplayHandler) {
        _inheritsLoose(UserManager, _GameplayHandler);

        function UserManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameplayHandler.call.apply(_GameplayHandler, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_users", _descriptor, _assertThisInitialized(_this));

          _this._activeUsers = [];
          _this._roleAssigner = void 0;
          _this._turnHandler = void 0;
          _this._numberUserActives = 0;
          return _this;
        }

        var _proto = UserManager.prototype;

        _proto.init = function init() {
          this._roleAssigner = new RoleAssigner(this);
          this._turnHandler = new TurnHandler(this);
          this.activeUsers.forEach(function (u) {
            return u.userCurrency.setCurrency(1000);
          });
        };

        _proto.startGame = function startGame() {
          this._activeUsers.forEach(function (u) {
            return u.startGame();
          });
        };

        _proto.endGame = function endGame() {
          this._activeUsers.forEach(function (u) {
            return u.endGame();
          });
        };

        _proto.resetState = function resetState() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._users), _step; !(_step = _iterator()).done;) {
            var user = _step.value;
            user.removeRole();
            user.IsFold = false;
          }

          this._turnHandler.clearTurn();
        };

        _proto.getUser = function getUser(value) {
          return this._activeUsers[value];
        };

        _proto.getIndexByUser = function getIndexByUser(user) {
          return this._activeUsers.findIndex(function (u) {
            return u === user;
          });
        } // Count Remaining Users 
        ;

        _proto.countInHandUser = function countInHandUser() {
          var userCount = 0;

          this._activeUsers.forEach(function (u) {
            if (!u.IsFold) {
              userCount++;
            }
          });

          return userCount;
        };

        _proto.getNextIndex = function getNextIndex(value) {
          return (value + 1) % this._activeUsers.length;
        };

        _proto.flipCard = function flipCard(User) {//User.flipCard();
        } // On check that any user is all in
        ;

        _proto.haveUserAllIn = function haveUserAllIn() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._activeUsers), _step2; !(_step2 = _iterator2()).done;) {
            var user = _step2.value;

            if (user.IsAllIn && !user.IsFold) {
              return true;
            }
          }

          return false;
        };

        _createClass(UserManager, [{
          key: "roleAssigner",
          get: function get() {
            return this._roleAssigner;
          }
        }, {
          key: "turnHandler",
          get: function get() {
            return this._turnHandler;
          }
        }, {
          key: "numberUserActives",
          get: function get() {
            return this._numberUserActives;
          },
          set: function set(value) {
            this._numberUserActives = value;
            this._activeUsers = this._users.slice(0, value);
          }
        }, {
          key: "activeUsers",
          get: function get() {
            return this._activeUsers;
          }
        }, {
          key: "smallBlindIndex",
          get: function get() {
            return this.roleAssigner.smallBlindIndex;
          }
        }, {
          key: "bigBlindIndex",
          get: function get() {
            return this.roleAssigner.bigBlindIndex;
          }
        }, {
          key: "Users",
          get: function get() {
            return this._users;
          }
        }]);

        return UserManager;
      }(GameplayHandler), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_users", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserNotiOption.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUserOptions.ts', './Tweener.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Node, Component, Vec3, EUserOptions, Tweener, AsyncUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3;

      cclegacy._RF.push({}, "b50d3qR/zxMiIN1ShKGPv8f", "UserNotiOption", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserNotiData = exports('UserNotiData', (_dec = ccclass('UserNotiData'), _dec2 = property({
        type: Enum(EUserOptions)
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = function UserNotiData() {
        _initializerDefineProperty(this, "OptionType", _descriptor, this);

        _initializerDefineProperty(this, "Node", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "OptionType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UserNotiOption = exports('UserNotiOption', (_dec4 = ccclass('UserNotiOption'), _dec5 = property({
        type: UserNotiData,
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserNotiOption, _Component);

        function UserNotiOption() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userNotiData", _descriptor3, _assertThisInitialized(_this));

          _this._currentNoti = void 0;
          return _this;
        }

        var _proto = UserNotiOption.prototype;

        _proto.showNoti = /*#__PURE__*/function () {
          var _showNoti = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(optionType, autoHide) {
            var notiData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (autoHide === void 0) {
                      autoHide = true;
                    }

                    notiData = this._userNotiData.find(function (u) {
                      return u.OptionType === optionType;
                    });

                    if (notiData) {
                      _context.next = 5;
                      break;
                    }

                    console.error('Noti Data not found');
                    return _context.abrupt("return");

                  case 5:
                    if (this._currentNoti) this._currentNoti.active = false;
                    this._currentNoti = notiData.Node;
                    this._currentNoti.active = true;
                    Tweener.LocalScale(this._currentNoti, Vec3.ONE.clone().multiplyScalar(1.5), Vec3.ONE.clone(), 0.2);

                    if (autoHide) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("return");

                  case 11:
                    _context.next = 13;
                    return AsyncUtils.waitForSeconds(0.7);

                  case 13:
                    // 0.2 for scaling and 0.5 for showing
                    this._currentNoti.active = false;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function showNoti(_x, _x2) {
            return _showNoti.apply(this, arguments);
          }

          return showNoti;
        }();

        _proto.hideNoti = function hideNoti() {
          this._userNotiData.forEach(function (u) {
            return u.Node.active = false;
          });
        };

        return UserNotiOption;
      }(Component), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_userNotiData", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserOptionsPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './EUserOptions.ts', './PokerUI.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Enum, Button, ButtonUtils, EUserOptions, PokerUI, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Button = module.Button;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      PokerUI = module.PokerUI;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      exports('EButtonType', void 0);

      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3;

      cclegacy._RF.push({}, "6dbd5RN2gxCy5k5wdIj4vO2", "UserOptionsPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EButtonType;

      (function (EButtonType) {
        EButtonType[EButtonType["Fold"] = 0] = "Fold";
        EButtonType[EButtonType["Check"] = 1] = "Check";
        EButtonType[EButtonType["Call"] = 2] = "Call";
        EButtonType[EButtonType["Raise"] = 3] = "Raise";
        EButtonType[EButtonType["AllIn"] = 4] = "AllIn";
        EButtonType[EButtonType["Show"] = 5] = "Show";
      })(EButtonType || (EButtonType = exports('EButtonType', {})));

      var OptionButton = exports('OptionButton', (_dec = ccclass('OptionButton'), _dec2 = property({
        type: Enum(EButtonType),
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = function OptionButton() {
        _initializerDefineProperty(this, "ButtonType", _descriptor, this);

        _initializerDefineProperty(this, "BtnOption", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ButtonType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BtnOption", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UserOptionsPanel = exports('UserOptionsPanel', (_dec4 = ccclass('UserOptionsPanel'), _dec5 = property({
        type: OptionButton,
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(UserOptionsPanel, _PokerUI);

        function UserOptionsPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;
          _this._userUI = void 0;

          _initializerDefineProperty(_this, "_optionButtons", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UserOptionsPanel.prototype;

        _proto.initHUD = function initHUD(userUI) {
          this._userUI = userUI;
        };

        _proto.setEvents = function setEvents() {
          ButtonUtils.bind(this.getButton(EButtonType.Fold), this.onClickFold, this);
          ButtonUtils.bind(this.getButton(EButtonType.Check), this.onClickCheck, this);
          ButtonUtils.bind(this.getButton(EButtonType.Call), this.onClickCall, this);
          ButtonUtils.bind(this.getButton(EButtonType.Raise), this.onClickRaise, this);
          ButtonUtils.bind(this.getButton(EButtonType.AllIn), this.onClickAllIn, this);
          ButtonUtils.bind(this.getButton(EButtonType.Show), this.onClickShow, this);
        };

        _proto.removeEvents = function removeEvents() {
          ButtonUtils.unbind(this.getButton(EButtonType.Fold), this.onClickFold, this);
          ButtonUtils.unbind(this.getButton(EButtonType.Check), this.onClickCheck, this);
          ButtonUtils.unbind(this.getButton(EButtonType.Call), this.onClickCall, this);
          ButtonUtils.unbind(this.getButton(EButtonType.Raise), this.onClickRaise, this);
          ButtonUtils.unbind(this.getButton(EButtonType.AllIn), this.onClickAllIn, this);
          ButtonUtils.unbind(this.getButton(EButtonType.Show), this.onClickShow, this);
        };

        _proto.getButton = function getButton(buttonType) {
          var optionButton = this._optionButtons.find(function (b) {
            return b.ButtonType === buttonType;
          });

          if (optionButton) {
            return optionButton.BtnOption;
          }

          return null;
        };

        _proto.setOptions = function setOptions() {
          for (var _len2 = arguments.length, options = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            options[_key2] = arguments[_key2];
          }

          this._optionButtons.forEach(function (oButton) {
            var optionName = EButtonType[oButton.ButtonType];
            oButton.BtnOption.node.active = options.find(function (o) {
              return o === optionName;
            }) !== undefined;
          });
        };

        _proto.onClickFold = function onClickFold() {
          this.audio.playSFX(ESFXId.SFX_Tap);

          this._userUI.sendOptions(EUserOptions.Fold);
        };

        _proto.onClickCheck = function onClickCheck() {
          this.audio.playSFX(ESFXId.SFX_Tap);

          this._userUI.sendOptions(EUserOptions.Check);
        };

        _proto.onClickCall = function onClickCall() {
          this.audio.playSFX(ESFXId.SFX_Tap);

          this._userUI.sendOptions(EUserOptions.Call);
        };

        _proto.onClickRaise = function onClickRaise() {
          this.audio.playSFX(ESFXId.SFX_Tap);
          this.hide();

          this._userUI.setActiveSliderPanel(true);
        };

        _proto.onClickAllIn = function onClickAllIn() {
          this.audio.playSFX(ESFXId.SFX_Tap);
          console.log("All In clicked");

          this._userUI.sendOptions(EUserOptions.AllIn);
        };

        _proto.onClickShow = function onClickShow() {
          this.audio.playSFX(ESFXId.SFX_Tap);
          console.log("show clicked");

          this._userUI.sendOptions(EUserOptions.ShowHand);
        };

        _proto.setShowHandOptions = function setShowHandOptions(isShowDown) {
          this._optionButtons.forEach(function (oButton) {
            if (oButton.ButtonType == EButtonType.Show) {
              oButton.BtnOption.node.active = isShowDown;
            } else {
              oButton.BtnOption.node.active = !isShowDown;
            }
          });

          this.getButton(EButtonType.Fold).node.active = true;
        };

        return UserOptionsPanel;
      }(PokerUI), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_optionButtons", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserProfile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserData.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, UserDataBuilder;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UserDataBuilder = module.UserDataBuilder;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e41e2QkgDNPz7dR0aPq3MPB", "UserProfile", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserProfile = exports('UserProfile', (_dec = ccclass('UserProfile'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserProfile, _Component);

        function UserProfile() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._builder = void 0;
          _this._userData = void 0;
          return _this;
        }

        var _proto = UserProfile.prototype;

        _proto.loadUserData = function loadUserData() {
          this._builder = new UserDataBuilder();
          this._userData = this._builder.setUserID('1').setName('Test').setCoin(1000).setAvatarUrl('https://res.cloudinary.com/dvqf9cl2u/image/upload/v1763696861/samples/upscale-face-1.jpg').build();
        };

        _createClass(UserProfile, [{
          key: "userData",
          get: function get() {
            return this._userData;
          }
        }, {
          key: "Username",
          set: function set(value) {
            this._builder.setName(value).update();
          }
        }, {
          key: "Email",
          set: function set(value) {
            this._builder.setEmail(value).update();
          }
        }, {
          key: "AvatarUrl",
          set: function set(value) {
            this._builder.setAvatarUrl(value).update();
          }
        }, {
          key: "AvatarImg",
          set: function set(value) {
            this._builder.setAvatarImage(value).update();
          }
        }, {
          key: "Level",
          set: function set(value) {
            this._builder.setLevel(value).update();
          }
        }, {
          key: "Coin",
          set: function set(value) {
            this._builder.setCoin(value).update();
          }
        }]);

        return UserProfile;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserRaisePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './EUserOptions.ts', './PokerUI.ts', './ESound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, Button, Label, ButtonUtils, EUserOptions, PokerUI, ESFXId;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      Button = module.Button;
      Label = module.Label;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      PokerUI = module.PokerUI;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "cc4b5bMvBxKjo8ub51uHO1E", "UserRaisePanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserRaisePanel = exports('UserRaisePanel', (_dec = ccclass('UserRaisePanel'), _dec2 = property({
        type: Slider,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec5 = property({
        type: Label,
        visible: true
      }), _dec6 = property({
        type: Label,
        visible: true
      }), _dec7 = property({
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PokerUI) {
        _inheritsLoose(UserRaisePanel, _PokerUI);

        function UserRaisePanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PokerUI.call.apply(_PokerUI, [this].concat(args)) || this;
          _this._userUI = null;

          _initializerDefineProperty(_this, "_slider", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnOK", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtMinValue", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtMaxValue", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtCurrentValue", _descriptor6, _assertThisInitialized(_this));

          _this._currentRaiseValue = 0;
          _this._minimumRaise = 0;
          _this._maximumRaise = 0;
          return _this;
        }

        var _proto = UserRaisePanel.prototype;

        _proto.initHUD = function initHUD(userUI) {
          this._userUI = userUI;
        };

        _proto.onEnable = function onEnable() {
          ButtonUtils.bind(this._btnOK, this.onClickOK, this);
          ButtonUtils.bind(this._btnClose, this.onClickClose, this);

          this._slider.node.on('slide', this.onSliderChanged, this);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnOK, this.onClickOK, this);
          ButtonUtils.unbind(this._btnClose, this.onClickClose, this);

          this._slider.node.off('slide', this.onSliderChanged, this);
        };

        _proto.show = function show() {
          _PokerUI.prototype.show.call(this);

          this._currentRaiseValue = this._minimumRaise;
          this._slider.progress = 0;
          this.updateSlider(0);
        };

        _proto.setRaiseRange = function setRaiseRange(minRaise, maxRaise) {
          this._minimumRaise = minRaise;
          this._maximumRaise = maxRaise;
          this._txtMinValue.string = minRaise.toString();
          this._txtMaxValue.string = maxRaise.toString();
        };

        _proto.onClickOK = function onClickOK() {
          this.audio.playSFX(ESFXId.SFX_Tap);

          this._userUI.sendOptions(EUserOptions.Raise, this._currentRaiseValue);

          this.hide();
        };

        _proto.onClickClose = function onClickClose() {
          this.audio.playSFX(ESFXId.SFX_Tap);
          this.hide();

          this._userUI.setActiveOptionsPanel(true);
        };

        _proto.onSliderChanged = function onSliderChanged(slider) {
          this.updateSlider(slider.progress);
        };

        _proto.updateSlider = function updateSlider(progress) {
          this._currentRaiseValue = progress * (this._maximumRaise - this._minimumRaise) + this._minimumRaise;
          this._currentRaiseValue = Math.floor(this._currentRaiseValue);
          this._txtCurrentValue.string = this._currentRaiseValue.toString();
        };

        return UserRaisePanel;
      }(PokerUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnOK", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_txtMinValue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_txtMaxValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_txtCurrentValue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserRole.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b18c7oHvTxCVryivP2WnKu5", "UserRole", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserRole = exports('UserRole', (_dec = ccclass('UserRole'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserRole, _Component);

        function UserRole() {
          return _Component.apply(this, arguments) || this;
        }

        return UserRole;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VirtualScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, UITransform, Rect, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      Rect = module.Rect;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b4c1a12HplIfK/D2MsyJHqv", "VirtualScrollView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var VirtualScrollView = exports('VirtualScrollView', (_dec = ccclass("VirtualScrollView"), _dec2 = property(ScrollView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VirtualScrollView, _Component);

        function VirtualScrollView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "scrollView", _descriptor, _assertThisInitialized(_this));

          _this.content = null;
          return _this;
        }

        var _proto = VirtualScrollView.prototype; // scrollView.content

        _proto.onLoad = function onLoad() {
          this.content = this.scrollView.content;
        };

        _proto.update = function update(dt) {
          if (!this.scrollView || !this.content) return;
          var view = this.scrollView.node;
          var viewUI = view.getComponent(UITransform); // 1. Create view rectangle in VIEW LOCAL SPACE

          var halfW = viewUI.width / 2;
          var halfH = viewUI.height / 2; // ViewRect is centered at (0,0)

          var viewRect = new Rect(-halfW, // x
          -halfH, // y
          viewUI.width, viewUI.height); // 2. Loop children

          var children = this.content.children;

          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var childUI = child.getComponent(UITransform);
            if (!childUI) continue; // 3. Convert child bounding box to view’s local space

            var worldPos = child.getWorldPosition();
            var localPos = new Vec3();
            viewUI.convertToNodeSpaceAR(worldPos, localPos); // bounding box based on child's size

            var bb = new Rect(localPos.x - childUI.width / 2, localPos.y - childUI.height / 2, childUI.width, childUI.height); // 4. Check intersection

            if (viewRect.intersects(bb)) {
              child.getChildByName("panel").active = true;
            } else {
              child.getChildByName("panel").active = false;
            }
          }
        };

        return VirtualScrollView;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaitForSecondsBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, AsyncUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b5892GM+s9CAod0Cm0MlLJG", "WaitForSecondsBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WaitForSecondsBehaviour = exports('WaitForSecondsBehaviour', (_dec = ccclass('WaitForSecondsBehaviour'), _dec2 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(WaitForSecondsBehaviour, _BaseBehaviour);

        function WaitForSecondsBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_duration", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = WaitForSecondsBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForSeconds(this._duration);

                  case 2:
                    this.endBehaviour();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startBehaviour() {
            return _startBehaviour.apply(this, arguments);
          }

          return startBehaviour;
        }();

        return WaitForSecondsBehaviour;
      }(BaseBehaviour), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_duration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinPotBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserInforUI.ts', './UserManager.ts', './TableUI.ts', './AsyncUtils.ts', './Define.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, BetManager, UserInforUI, UserManager, TableUI, AsyncUtils, Define;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      TableUI = module.TableUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cf2degFR6NJtoa6UcBb9XyM", "WinPotBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WinPotBehaviour = exports('WinPotBehaviour', (_dec = ccclass('WinPotBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(WinPotBehaviour, _BaseBehaviour);

        function WinPotBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = WinPotBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var userManager, betManager, uiInforUI, tableUI, winners;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    userManager = this.gameplayManager.getMiniManager(UserManager);
                    betManager = this.gameplayManager.getMiniManager(BetManager);
                    uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    tableUI = this.gameplayManager.getUI().get(TableUI);
                    winners = betManager.winPot();
                    winners.forEach(function (w) {
                      var user = w;
                      var index = userManager.getIndexByUser(user);
                      var panel = uiInforUI.getPanel(index);
                      panel.onWin();
                      tableUI.onUpdateTotalPot(betManager.totalBet);
                      tableUI.doChipEffect(user.TotalEarn, tableUI.totalPotNode.worldPosition, panel.node.worldPosition, Define.TimeChipMove, function () {
                        panel.onUpdateChip(user.userCurrency.currency);
                      });
                    });
                    _context.next = 8;
                    return AsyncUtils.waitForSeconds(0.5);

                  case 8:
                    this.endBehaviour();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function startBehaviour() {
            return _startBehaviour.apply(this, arguments);
          }

          return startBehaviour;
        }();

        return WinPotBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});