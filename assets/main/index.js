System.register("chunks:///_virtual/ActionAfterInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "aa0dfQ9Ox9DyJjgrE3hlmp8", "ActionAfterInit", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ActionAfterInit = exports('ActionAfterInit', (_dec = ccclass('ActionAfterInit'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ActionAfterInit, _Component);

        function ActionAfterInit() {
          return _Component.apply(this, arguments) || this;
        }

        return ActionAfterInit;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/array_buff.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('Responses', void 0);

      cclegacy._RF.push({}, "06667dMl/BKhKhoxOpDOvtu", "array_buff", undefined);

      var Responses; // ******************** DATA *********************

      (function (_Responses) {})(Responses || (Responses = exports('Responses', {})));

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

          var dealerUserIndex = this._userManager.roleAssigner.getDealerIndex();

          var dealer = this._userManager.getUser(dealerUserIndex);

          var panel = this.getUserPanelByUser(dealer);
          panel.onShowDealerIcon(true);
          this.endBehaviour();
        };

        _proto.getUserPanelByUser = function getUserPanelByUser(user) {
          // const uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
          // return uiInforUI.getPanel(this._userManager.getIndexByUser(user));
          return null;
        };

        return AssignDealerBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AsyncUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, director, Director, LogUtils;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
    }, function (module) {
      LogUtils = module.LogUtils;
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

        AsyncUtils.waitAll = /*#__PURE__*/function () {
          var _waitAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _len,
                promises,
                _key,
                _args3 = arguments;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;

                    for (_len = _args3.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
                      promises[_key] = _args3[_key];
                    }

                    _context3.next = 4;
                    return Promise.all(promises);

                  case 4:
                    return _context3.abrupt("return", true);

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    LogUtils.error("❌ [AsyncUtils] Lỗi khi chạy song song:", _context3.t0);
                    return _context3.abrupt("return", false);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 7]]);
          }));

          function waitAll() {
            return _waitAll.apply(this, arguments);
          }

          return waitAll;
        }();

        return AsyncUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts', './EAudio.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, ServiceLocator, Define, ESFXId;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      cclegacy._RF.push({}, "281c9JW0WJFVJGtbbv6jdvI", "AudioHelper", undefined);

      var AudioHelper = exports('AudioHelper', /*#__PURE__*/function () {
        function AudioHelper() {}

        AudioHelper.playClickSound = function playClickSound() {
          this.audioManager.playSFX(ESFXId.SFX_Click);
        };

        AudioHelper.playTapSound = function playTapSound() {
          this.audioManager.playSFX(ESFXId.SFX_Tap_1);
        };

        AudioHelper.playRandomSound = function playRandomSound() {
          for (var _len = arguments.length, sounds = new Array(_len), _key = 0; _key < _len; _key++) {
            sounds[_key] = arguments[_key];
          }

          if (!sounds || sounds.length === 0) return;
          var index = Math.floor(Math.random() * sounds.length);
          this.audioManager.playSFX(sounds[index]);
        };

        AudioHelper.playSFX = function playSFX(soundKey, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }

          this.audioManager.playSFX(soundKey, isLoop);
        };

        AudioHelper.stopSFX = function stopSFX(soundKey) {
          this.audioManager.stopSFX(soundKey);
        };

        AudioHelper.playMusic = function playMusic(key, isLoop) {
          if (isLoop === void 0) {
            isLoop = true;
          }

          this.audioManager.playMusic(key, isLoop);
        };

        AudioHelper.stopMusic = function stopMusic() {
          this.audioManager.stopMusic();
        };

        _createClass(AudioHelper, null, [{
          key: "audioManager",
          get: function get() {
            if (this._audioManager == null) {
              this._audioManager = ServiceLocator.get(Define.Service.AudioManager);
            }

            return this._audioManager;
          }
        }]);

        return AudioHelper;
      }());
      AudioHelper._audioManager = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioPlaying.ts', './ServiceLocator.ts', './Define.ts', './PlayerPrefs.ts', './LogUtils.ts', './ResourcesUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, Node, Prefab, Component, AudioClip, AudioPlaying, ServiceLocator, Define, PlayerPrefs, LogUtils, ResourceUtils;

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
      AudioSource = module.AudioSource;
      Node = module.Node;
      Prefab = module.Prefab;
      Component = module.Component;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioPlaying = module.AudioPlaying;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      PlayerPrefs = module.PlayerPrefs;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      ResourceUtils = module.ResourceUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "9c139jiPKhFCKNZszX2t58i", "AudioManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SFXData = exports('SFXData', function SFXData(id, audioPlaying) {
        this.ID = void 0;
        this.AudioPlaying = void 0;
        this.ID = id;
        this.AudioPlaying = audioPlaying;
      });
      var AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property({
        type: AudioSource
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        visible: true
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        type: Prefab,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);

        function AudioManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "musicSource", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfxParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sfxPath", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_musicPath", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_audioPrefab", _descriptor5, _assertThisInitialized(_this));

          _this._sfxClipMap = new Map();
          _this._musicClipMap = new Map();
          _this._soundPlayingMap = new Map();
          _this._musicVolume = 0.5;
          _this._sfxVolume = 1;
          _this._musicMuted = false;
          _this._sfxMuted = false;
          _this._sfxCounter = -1;
          _this._poolManager = void 0;
          return _this;
        }

        var _proto = AudioManager.prototype;

        _proto.init = function init() {
          this._poolManager = ServiceLocator.get(Define.Service.PoolManager);
          this._sfxMuted = !PlayerPrefs.getBool("soundOn", true);
          this._musicMuted = !PlayerPrefs.getBool("musicOn", true);
          this.muteMusic(this._musicMuted);
          this.muteSFX(this._sfxMuted);
          this.setMusicVolume(this._musicVolume);
          this.setSFXVolume(this._sfxVolume);
        };

        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var _yield$Promise$all, sfxDatas, musicDatas;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    LogUtils.log("⏳ Bắt đầu load toàn bộ âm thanh...");
                    _context.next = 3;
                    return Promise.all([ResourceUtils.loadDir(this._sfxPath, AudioClip), ResourceUtils.loadDir(this._musicPath, AudioClip)]);

                  case 3:
                    _yield$Promise$all = _context.sent;
                    sfxDatas = _yield$Promise$all[0];
                    musicDatas = _yield$Promise$all[1];

                    if (sfxDatas) {
                      sfxDatas.forEach(function (clip) {
                        _this2._sfxClipMap.set(clip.name, clip);
                      });
                    }

                    if (musicDatas) {
                      musicDatas.forEach(function (clip) {
                        _this2._musicClipMap.set(clip.name, clip);
                      });
                    }

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadData() {
            return _loadData.apply(this, arguments);
          }

          return loadData;
        }();

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
          PlayerPrefs.setBool("musicOn", !mute);
        };

        _proto.muteSFX = function muteSFX(mute) {
          this._sfxMuted = mute;
          PlayerPrefs.setBool("soundOn", !mute);
        } //#endregion
        ;

        _proto.playMusic = function playMusic(id, loop) {
          if (loop === void 0) {
            loop = true;
          }

          var clip = this._musicClipMap.get(id);

          if (clip && this.musicSource) {
            this.musicSource.stop();
            this.musicSource.clip = clip;
            this.musicSource.loop = loop;
            this.musicSource.play();
          }
        };

        _proto.stopMusic = function stopMusic() {
          var _this$musicSource;

          (_this$musicSource = this.musicSource) == null ? void 0 : _this$musicSource.stop();
        };

        _proto.playSFX = function playSFX(id, isLoop) {
          var clip = this._sfxClipMap.get(id);

          if (!clip) {
            LogUtils.error('Sound not found');
            return;
          }

          this.handlePlaySFX(id, clip, isLoop);
        };

        _proto.handlePlaySFX = function handlePlaySFX(id, clip, isLoop) {
          var _this3 = this;

          var node = this._poolManager.spawnNode(this._audioPrefab, this.sfxParent);

          var audioPlaying = node.getComponent(AudioPlaying);
          var soundID = this.addDataToMap(id, audioPlaying);
          audioPlaying.doPlay(clip, isLoop, this._sfxMuted ? 0 : this._sfxVolume, function () {
            _this3.removeDataFromMap(id, soundID);

            _this3._poolManager.despawnNode(node);
          });
        };

        _proto.stopSFX = function stopSFX(id) {
          var _this4 = this;

          if (!this._soundPlayingMap.has(id)) {
            LogUtils.warn("Sound " + id + " is not playing");
            return;
          }

          var arrSFX = this._soundPlayingMap.get(id);

          arrSFX.forEach(function (a) {
            a.AudioPlaying.doStop();

            _this4._poolManager.despawnNode(a.AudioPlaying.node);
          });

          this._soundPlayingMap["delete"](id);
        };

        _proto.addDataToMap = function addDataToMap(id, audioPlaying) {
          var uniqueID = ++this._sfxCounter;
          var sfxData = new SFXData(uniqueID, audioPlaying);

          var arrSFX = this._soundPlayingMap.get(id);

          if (!arrSFX) {
            arrSFX = [];

            this._soundPlayingMap.set(id, arrSFX);
          }

          arrSFX.push(sfxData);
          return uniqueID;
        };

        _proto.removeDataFromMap = function removeDataFromMap(id, sfxID) {
          if (!this._soundPlayingMap.has(id)) {
            LogUtils.warn('Sound is not playing');
            return;
          }

          var arrSFX = this._soundPlayingMap.get(id);

          var index = arrSFX.findIndex(function (x) {
            return x.ID === sfxID;
          });

          if (index !== -1) {
            arrSFX.splice(index, 1);

            if (arrSFX.length === 0) {
              this._soundPlayingMap["delete"](id);
            }
          } else {
            LogUtils.error("Sound Data with internal ID " + sfxID + " not found for key " + id + ".");
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
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfxParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_sfxPath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_musicPath", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_audioPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

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

System.register("chunks:///_virtual/BaseAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts', './MathUtils.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, ServiceLocator, Define, MathUtils;

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
    }, function (module) {
      MathUtils = module.MathUtils;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "ec5dezdohdJTL8WZvim8aSN", "BaseAdapter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseAdapter = exports('BaseAdapter', (_dec = ccclass('BaseAdapter'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseAdapter, _Component);

        function BaseAdapter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.network = null;
          _this.eventBus = null;
          return _this;
        }

        var _proto = BaseAdapter.prototype;

        _proto.init = function init() {
          this.network = ServiceLocator.get(Define.Service.NetworkManager);
          this.eventBus = ServiceLocator.get(Define.Service.EventBus); //this._network.on();
        };

        _proto.getRandomRequestId = function getRandomRequestId() {
          var randomNumber = MathUtils.randomInt(1000);
          return randomNumber.toString();
        };

        return BaseAdapter;
      }(Component)) || _class));

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

System.register("chunks:///_virtual/BaseBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Component, ServiceLocator, Define;

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
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
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
          _this.config = null;

          _initializerDefineProperty(_this, "_isActiveWhenStart", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isUnactiveWhenEnd", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BaseBehaviour.prototype;

        _proto.start = function start() {
          this.config = ServiceLocator.get(Define.Service.GameConfig);
        };

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

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, JsonAsset, SpriteAtlas, Component;

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
      SpriteAtlas = module.SpriteAtlas;
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
        type: SpriteAtlas,
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

        var _proto = BaseLoader.prototype;

        _proto.onLoad = function onLoad() {
          this.loadData();
        };

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
          return null;
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

System.register("chunks:///_virtual/BasePokerControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserHUD.ts', './EUserOptions.ts', './PokerInforPanel.ts', './PokerTableUI.ts', './ServiceLocator.ts', './Define.ts', './CardControl.ts', './HandRank.ts', './CardLibrary.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, UserHUD, EUserOptions, EUserState, EBetPotType, PokerTableUI, ServiceLocator, Define, CardControl, HandRank, CardLibrary;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UserHUD = module.UserHUD;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      EUserState = module.EUserState;
      EBetPotType = module.EBetPotType;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      CardControl = module.CardControl;
    }, function (module) {
      HandRank = module.HandRank;
    }, function (module) {
      CardLibrary = module.CardLibrary;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "330ceiNkzxMRpXmRrkKKN7M", "BasePokerControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BasePokerControl = exports('BasePokerControl', (_dec = ccclass('BasePokerControl'), _dec(_class = /*#__PURE__*/function (_CardControl) {
        _inheritsLoose(BasePokerControl, _CardControl);

        function BasePokerControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _CardControl.call.apply(_CardControl, [this].concat(args)) || this;
          _this.tableUI = null;
          _this.userHUD = null;
          _this.config = null;
          _this.tableUI = _this.minigameUI.get(PokerTableUI);
          _this.userHUD = _this.minigameUI.get(UserHUD);
          _this.config = ServiceLocator.get(Define.Service.GameConfig);
          return _this;
        }

        var _proto = BasePokerControl.prototype;

        _proto.getPanelState = function getPanelState(state) {
          switch (state) {
            case 'PLAYER':
              return EUserState.Playing;

            case 'VIEWER':
              return EUserState.Waiting;
          }
        };

        _proto.getUserAction = function getUserAction(action) {
          switch (action) {
            case 'FOLD':
              return EUserOptions.Fold;

            case 'CHECK':
              return EUserOptions.Check;

            case 'CALL':
              return EUserOptions.Call;

            case 'RAISE':
              return EUserOptions.Raise;

            case 'ALLIN':
              return EUserOptions.AllIn;

            case 'SHOW':
              return EUserOptions.Show;
          }

          return null;
        };

        _proto.getBetPotAction = function getBetPotAction(action) {
          switch (action) {
            case 'CALL':
              return EBetPotType.Call;

            case 'RAISE':
              return EBetPotType.Raise;

            case 'ALLIN':
              return EBetPotType.Raise;
          }

          return null;
        };

        _proto.getHandRank = function getHandRank(handrank) {
          switch (handrank) {
            case "HIGH_CARD":
              return HandRank.HighCard;

            case "ONE_PAIR":
              return HandRank.OnePair;

            case "TWO_PAIR":
              return HandRank.TwoPair;

            case "THREE_OF_A_KIND":
              return HandRank.ThreeOfAKind;

            case "STRAIGHT":
              return HandRank.Straight;

            case "FLUSH":
              return HandRank.Flush;

            case "FULL_HOUSE":
              return HandRank.FullHouse;

            case "FOUR_OF_A_KIND":
              return HandRank.FourOfAKind;

            case "STRAIGHT_FLUSH":
              return HandRank.StraightFlush;

            case "ROYAL_FLUSH":
              return HandRank.RoyalFlush;
          }
        };

        _proto.isCurrentUser = function isCurrentUser(userId) {
          return this.userProfile.userData.userID === userId;
        };

        _proto.convertIdToCardData = function convertIdToCardData(id) {
          var cardData = CardLibrary.getCardData(id);
          return cardData;
        };

        _proto.getCardDatas = function getCardDatas(cardIds) {
          var cards = [];

          for (var i = 0; i < cardIds.length; i++) {
            var cardData = this.convertIdToCardData(cardIds[i]);
            cards.push(cardData);
          }

          return cards;
        };

        _proto.sortCards = function sortCards(cardIds) {
          cardIds.sort(function (a, b) {
            var remA = a % 13;
            var remB = b % 13;

            if (remA !== remB) {
              return remA - remB;
            }

            return a - b;
          });
        };

        return BasePokerControl;
      }(CardControl)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Prefab;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "c7bd8+RMA9CZLMqApF16q3j", "BasePopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BasePopup = exports('BasePopup', (_dec = ccclass('BasePopup'), _dec2 = property({
        type: Prefab,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BasePopup() {
          _initializerDefineProperty(this, "_uiPopupPrefab", _descriptor, this);
        }

        var _proto = BasePopup.prototype;

        _proto.getPopupPrefab = function getPopupPrefab() {
          return this._uiPopupPrefab;
        };

        return BasePopup;
      }(), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_uiPopupPrefab", [_dec2], {
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

System.register("chunks:///_virtual/BaseUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts', './EUICore.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Enum, Component, ServiceLocator, Define, EUILayer;

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
      Enum = module.Enum;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      EUILayer = module.EUILayer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "9ea12NyGh9IqbIKFw4UH+jS", "BaseUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseUI = exports('BaseUI', (_dec = ccclass('BaseUI'), _dec2 = property(Node), _dec3 = property({
        type: Enum(EUILayer),
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUI, _Component);

        function BaseUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiLayer", _descriptor2, _assertThisInitialized(_this));

          _this.uiManager = null;
          _this.audioManager = null;
          _this.poolManager = null;
          _this.eventBus = null;
          return _this;
        }

        var _proto = BaseUI.prototype;

        _proto.init = function init() {
          this.uiManager = ServiceLocator.get(Define.Service.UIManager);
          this.audioManager = ServiceLocator.get(Define.Service.AudioManager);
          this.poolManager = ServiceLocator.get(Define.Service.PoolManager);
          this.eventBus = ServiceLocator.get(Define.Service.EventBus);
          this.panel.active = false;
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
          key: "UILayer",
          get: function get() {
            return this._uiLayer;
          }
        }]);

        return BaseUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EUILayer.Screen;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUserInforPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, tween, MiniUI;

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
      Label = module.Label;
      tween = module.tween;
    }, function (module) {
      MiniUI = module.MiniUI;
    }],
    execute: function () {
      exports('EUserState', void 0);

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "8dcf7fKriBB+ocBA+EKS3BA", "BaseUserInforPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EUserState;

      (function (EUserState) {
        EUserState[EUserState["None"] = 0] = "None";
        EUserState[EUserState["Waiting"] = 1] = "Waiting";
        EUserState[EUserState["Playing"] = 2] = "Playing";
      })(EUserState || (EUserState = exports('EUserState', {})));

      var BaseUserInforPanel = exports('BaseUserInforPanel', (_dec = ccclass('BaseUserInforPanel'), _dec2 = property({
        type: Sprite,
        visible: true
      }), _dec3 = property({
        type: Label,
        visible: true
      }), _dec4 = property({
        type: Label,
        visible: true
      }), _dec5 = property({
        type: Sprite,
        visible: true
      }), _dec6 = property({
        visible: true
      }), _dec7 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(BaseUserInforPanel, _MiniUI);

        function BaseUserInforPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;
          _this.PlayerId = void 0;
          _this.PanelState = EUserState.None;

          _initializerDefineProperty(_this, "sprAvatar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lbName", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lbBalance", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sprCountDown", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isFlipCountDown", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isReverseCountDown", _descriptor6, _assertThisInitialized(_this));

          _this.countDownTween = void 0;
          return _this;
        }

        var _proto = BaseUserInforPanel.prototype;

        _proto.setAvatar = function setAvatar(avatar) {
          this.sprAvatar.spriteFrame = avatar;
          return this;
        };

        _proto.setName = function setName(name) {
          this.lbName.string = name;
          return this;
        };

        _proto.setBalance = function setBalance(chip) {
          this.lbBalance.string = chip.toString();
          return this;
        };

        _proto.doCountDown = function doCountDown(duration, remainTime, onComplete) {
          var _this2 = this;

          if (remainTime === void 0) {
            remainTime = duration;
          }

          this.sprCountDown.node.active = true;
          var ratio = remainTime / duration;
          var direction = this.isFlipCountDown ? -1 : 1;
          var startVal = 0;
          var endVal = 0;

          if (this.isReverseCountDown) {
            startVal = (1 - ratio) * direction;
            endVal = 1 * direction;
          } else {
            startVal = ratio * direction;
            endVal = 0;
          }

          this.sprCountDown.fillRange = startVal;

          if (this.countDownTween) {
            this.countDownTween.stop();
          }

          this.countDownTween = tween(this.sprCountDown).to(remainTime, {
            fillRange: endVal
          }).call(function () {
            onComplete == null ? void 0 : onComplete();
            _this2.sprCountDown.node.active = false;
          }).start();
        };

        _proto.stopCountDown = function stopCountDown() {
          this.sprCountDown.node.active = false;

          if (this.countDownTween) {
            this.countDownTween.stop();
            this.countDownTween = null;
          }
        };

        return BaseUserInforPanel;
      }(MiniUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbBalance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprCountDown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isFlipCountDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isReverseCountDown", [_dec7], {
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

System.register("chunks:///_virtual/BetBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserHUD.ts', './EUserOptions.ts', './UserManager.ts', './PokerInforPanel.ts', './TableManager.ts', './EDealer.ts', './PokerTableUI.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, BetManager, UserHUD, EUserOptions, UserManager, EBetPotType, TableManager, EDealerAnimType, PokerTableUI, UserInforUI;

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
      UserHUD = module.UserHUD;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      EBetPotType = module.EBetPotType;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      EDealerAnimType = module.EDealerAnimType;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      UserInforUI = module.UserInforUI;
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
          this._tableUI = this.gameplayManager.getUI().get(PokerTableUI);

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

            this._currentPanel = this.getUserPanelByUser(); //this._currentPanel.onStartTurn();

            this._currentPanel.doCountDown(10, 10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });
          } else if (this._currentUser) {
            var _this$_userHUDUI;

            this._currentUser.startTurn();

            this._currentPanel = this.getUserPanelByUser(); //this._currentPanel.onStartTurn();

            this._tableUI.onSetAnimDealer(EDealerAnimType.CallBet);

            this._currentPanel.doCountDown(10, 10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });

            (_this$_userHUDUI = this._userHUDUI).setOptions.apply(_this$_userHUDUI, this.loadOptions(this._currentUser)).setRaiseRange(this._betManager.currentRaiseBet, this._currentUser.getRaiseAvailable).show();
          } else {
            console.log("No more users in queue");
            this.endBehaviour();
          }
        };

        _proto.onHudOptionSend = function onHudOptionSend(eUserOptions, raiseValue) {
          var betValue = 0;

          switch (eUserOptions) {
            case EUserOptions.Fold:
              this._currentUser.fold();

              this.onPlayChipAnimWhenFold(this._currentPanel.CurrentBet);

              this._currentPanel.onUpdateUIWhenFold(true);

              this._currentPanel.showNoti(EUserOptions.Fold, true);

              break;

            case EUserOptions.Check:
              this._currentUser.check();

              this._currentPanel.showNoti(EUserOptions.Check, true);

              break;

            case EUserOptions.Call:
              betValue = this._currentUser.call();

              this._betManager.bet(betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).onShowBetPot(true, EBetPotType.Call, betValue);

              this._currentPanel.showNoti(EUserOptions.Call, true);

              break;

            case EUserOptions.Raise:
              betValue = this._currentUser.raise(raiseValue);

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(raiseValue, betValue);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).onShowBetPot(true, EBetPotType.Raise, betValue);

              this._currentPanel.showNoti(EUserOptions.Raise, true);

              break;

            case EUserOptions.AllIn:
              console.log(this._currentUser.node.name + " is all in with " + betValue);

              var value = this._currentUser.allIn();

              this._turnHandler.resetRaiseTurnByUser(this._currentUser);

              this._betManager.raiseBet(value[1], value[0]);

              this.getUserPanelByUser().onUpdateChip(this._currentUser.userCurrency.currency).onShowBetPot(true, EBetPotType.Raise, value[0]); //.setCurrentBet(value[0]);

              betValue = value[0];

              this._currentPanel.showNoti(EUserOptions.AllIn, false);

              break;
          }

          this._currentUser.endTurn(); //this._currentPanel.onEndTurn();


          this._currentPanel.stopCountDown();

          this._tableUI.onSetAnimDealer(EDealerAnimType.Idle);

          if (betValue > 0) {
            this._currentPanel.spawnFloatingText(betValue);

            this.onPlayChipAnimation(betValue);
          }

          if (this._currentUser.IsAllIn) eUserOptions = EUserOptions.AllIn;

          this._userHUDUI.hide();

          this.handleNextUser();
        };

        _proto.onAIOptionSend = function onAIOptionSend(eUserOptions, raiseValue) {
          this.onHudOptionSend(eUserOptions, raiseValue);
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
          //return this._userInforUI.getPanel(this._userManager.getIndexByUser(this._currentUser));
          return null;
        };

        _proto.loadOptions = function loadOptions(user) {
          var eButtonTypes = [];

          for (var key in EUserOptions) {
            eButtonTypes.push(key);
          }

          var canCall = user.hasCallOptions(this._betManager.currentRaiseBet);
          eButtonTypes = eButtonTypes.filter(function (e) {
            return canCall ? e !== EUserOptions[EUserOptions.Check] : e !== EUserOptions[EUserOptions.Call];
          });
          var canRaise = user.canRaise;

          if (!canRaise) {
            eButtonTypes = eButtonTypes.filter(function (e) {
              return e !== EUserOptions[EUserOptions.Raise];
            });
          }

          eButtonTypes = eButtonTypes.filter(function (e) {
            return e !== EUserOptions[EUserOptions.Show];
          });
          eButtonTypes = eButtonTypes.filter(function (e) {
            return e !== EUserOptions[EUserOptions.AllIn];
          });
          return eButtonTypes;
        };

        _proto.onPlayChipAnimation = function onPlayChipAnimation(betValue) {// this._tableUI.doChipEffect(
          //     betValue,
          //     this._currentPanel.node.worldPosition,
          //     this._currentPanel.BetPotHolder.worldPosition,
          //     this.config.TimeChipAppear,
          //     // () => {
          //     //     this._tableUI.onUpdateTotalPot(this._betManager.totalBet);
          //     // }
          // );
        };

        _proto.onPlayChipAnimWhenFold = /*#__PURE__*/function () {
          var _onPlayChipAnimWhenFold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(currentBet) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onPlayChipAnimWhenFold(_x) {
            return _onPlayChipAnimWhenFold.apply(this, arguments);
          }

          return onPlayChipAnimWhenFold;
        }();

        return BetBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, EventTarget, GameplayHandler;

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
          _this._pots = [];
          _this._winnersPot = [];
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

        _proto.setWinners = function setWinners(winners) {// const pot = new Pot(this.totalBet, winners);
          // const potWinnersMap = new Map<PokerUser, Card[]>();
          // winners.forEach(winner => {
          //     potWinnersMap.set(winner, winner.cards);
          // });
          // pot.Winners = potWinnersMap;
          // this.setWinnersPot([pot]);
        };

        _proto.setWinnersPot = function setWinnersPot(winnerPots) {
          this._winnersPot = winnerPots;
        };

        _proto.winPot = function winPot() {
          this.resetState();
          return this._winnersPot;
        };

        _proto.onUpdateUITableTotalPot = function onUpdateUITableTotalPot() {// const tableUI = this.gameplayManager.getUI().get(TableUI);
          // tableUI.onUpdateTotalPot(this.totalBet);
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

System.register("chunks:///_virtual/BlindBetBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserManager.ts', './PokerInforPanel.ts', './PokerTableUI.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseBehaviour, BetManager, UserManager, EBetPotType, PokerTableUI, UserInforUI;

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
      EBetPotType = module.EBetPotType;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      UserInforUI = module.UserInforUI;
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
          var tableUI = this.gameplayManager.getUI().get(PokerTableUI);
          var userIndex = this._isSmallBlind ? this._userManager.smallBlindIndex : this._userManager.bigBlindIndex;
          var betValue = this._isSmallBlind ? betManager.minimumBet / 2 : betManager.minimumBet;

          var blind = this._userManager.getUser(userIndex);

          var panel = this.getUserPanelByUser(blind);
          blind.doBet(betValue);
          betManager.bet(betValue);

          if (this._isSmallBlind) {
            panel.onUpdateChip(blind.userCurrency.currency).onShowBetPot(true, EBetPotType.SmallBlind, betValue);
          } else {
            panel.onUpdateChip(blind.userCurrency.currency).onShowBetPot(true, EBetPotType.BigBlind, betValue);
          } // tableUI.doChipEffect(
          //     betValue,
          //     panel.node.worldPosition,
          //     tableUI.totalPotNode.worldPosition,
          //     this.config.TimeChipMoveToPot,
          //     () => tableUI.onUpdateTotalPot(betManager.totalBet)
          // );


          this.endBehaviour();
        };

        _proto.getUserPanelByUser = function getUserPanelByUser(user) {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI); //return uiInforUI.getPanel(this._userManager.getIndexByUser(user));

          return null;
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

System.register("chunks:///_virtual/ButtonUtils.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, Button, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
    }, function (module) {
      LogUtils = module.LogUtils;
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
            LogUtils.warn('[ButtonExtensions] Button không hợp lệ.');
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
            LogUtils.warn('[ButtonExtensions] Button không hợp lệ.');
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
            LogUtils.warn('[ButtonExtensions] Button không hợp lệ.');
            return;
          }

          button.node.off(Button.EventType.CLICK, handler, target != null ? target : null);
        }
        /**
         * Gỡ bỏ tất cả event CLICK thuộc về một target cụ thể (thường là 'this')
         */
        ;

        ButtonUtils.unbindTarget = function unbindTarget(button, target) {
          if (!button || !target) return; // Chỉ xóa các event mà target này đã đăng ký, giữ lại event của người khác

          button.node.targetOff(target);
        }
        /**
         * Bật/tắt trạng thái tương tác
         */
        ;

        ButtonUtils.setInteractable = function setInteractable(button, value) {
          if (!button) {
            LogUtils.warn('[ButtonExtensions] Button không hợp lệ.');
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

      cclegacy._RF.push({}, "4f493KIPEhMKY9XnlsDtwjm", "Card", undefined);

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
          if (this.jsonAsset && this.sprAsset) {
            CardLibrary.initialize(this.jsonAsset, this.sprAsset.getSpriteFrames());
          }
        };

        return CardAssetLoader;
      }(BaseLoader)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardControl.ts", ['cc', './UserInforUI.ts', './Define.ts', './ServiceLocator.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, UserInforUI, Define, ServiceLocator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1707d6YpMtPRIQczjROxf5/", "CardControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardControl = exports('CardControl', (_dec = ccclass('CardControl'), _dec(_class = /*#__PURE__*/function () {
        function CardControl(minigameUI) {
          this.minigameUI = null;
          this.userProfile = null;
          this.userInforUI = null;
          this.minigameUI = minigameUI;
          this.userInforUI = this.minigameUI.get(UserInforUI);
          this.userProfile = ServiceLocator.get(Define.Service.UserProfile);
        }

        var _proto = CardControl.prototype;

        _proto.isCurrentUser = function isCurrentUser(userId) {
          return this.userProfile.userData.userID === userId;
        };

        _proto.getPanelById = function getPanelById(userId) {
          return this.userInforUI.getPanelById(userId);
        };

        return CardControl;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './ServiceLocator.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, Define, ServiceLocator, EUIGame;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0e137VUzY5Ae4FBkTP9Lvqn", "CardController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardController = exports('CardController', (_dec = ccclass('CardController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardController, _Component);

        function CardController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.minigameUI = null;
          _this.sessionManager = null;
          _this.eventBus = null;
          _this.userProfile = null;
          _this.uiManager = null;
          return _this;
        }

        var _proto = CardController.prototype;

        _proto.init = function init() {
          this.sessionManager = ServiceLocator.get(Define.Service.SessionManager);
          this.eventBus = ServiceLocator.get(Define.Service.EventBus);
          this.userProfile = ServiceLocator.get(Define.Service.UserProfile);
          this.uiManager = ServiceLocator.get(Define.Service.UIManager);
          this.setEvents();
        };

        _proto.onLoad = function onLoad() {
          this.minigameUI = this.uiManager.getUI(EUIGame.MinigameUIManager);
        };

        _createClass(CardController, [{
          key: "roomInfor",
          get: function get() {
            return this.sessionManager.CurrentRoom;
          }
        }]);

        return CardController;
      }(Component)) || _class));

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

        CardLibrary.getSpriteById = function getSpriteById(id) {
          var cardData = this.getCardData(id);
          return this.getSprite(cardData.suit, cardData.rank);
        };

        CardLibrary.getCardData = function getCardData(id) {
          return this._cardDataList.find(function (c) {
            return c.id === id;
          });
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

System.register("chunks:///_virtual/CardTableUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, MiniUI;

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
    }, function (module) {
      MiniUI = module.MiniUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "9addfOeqfhCXIRWGWYR2jJ+", "CardTableUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardTableUI = exports('CardTableUI', (_dec = ccclass('CardTableUI'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(CardTableUI, _MiniUI);

        function CardTableUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "deck", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CardTableUI, [{
          key: "Deck",
          get: function get() {
            return this.deck;
          }
        }]);

        return CardTableUI;
      }(MiniUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "deck", [_dec2], {
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

System.register("chunks:///_virtual/CardUserPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardView.ts', './BaseUserInforPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, CardView, BaseUserInforPanel;

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
      CardView = module.CardView;
    }, function (module) {
      BaseUserInforPanel = module.BaseUserInforPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "f769dziHPtJ84/BKSSTfw8/", "CardUserPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardUserPanel = exports('CardUserPanel', (_dec = ccclass('CardUserPanel'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property({
        type: CardView,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec5 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUserInforPanel) {
        _inheritsLoose(CardUserPanel, _BaseUserInforPanel);

        function CardUserPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUserInforPanel.call.apply(_BaseUserInforPanel, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_cardShowingHolder", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardViews", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardHiddenHolder", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardHidden", _descriptor4, _assertThisInitialized(_this));

          _this._currentCardIndex = 0;
          return _this;
        }

        var _proto = CardUserPanel.prototype;

        _proto.onReceiveCard = function onReceiveCard(numberCardsReceive, isShowedCard) {
          if (numberCardsReceive === void 0) {
            numberCardsReceive = 1;
          }

          if (isShowedCard === void 0) {
            isShowedCard = true;
          }

          if (this._cardShowingHolder) this._cardShowingHolder.active = isShowedCard;
          if (this._cardHiddenHolder) this._cardHiddenHolder.active = !isShowedCard;

          for (var i = 0; i < numberCardsReceive; i++) {
            if (isShowedCard) {
              if (this._currentCardIndex < this._cardViews.length) {
                var cardView = this._cardViews[this._currentCardIndex];
                cardView.node.active = true;
              }
            } else {
              if (this._currentCardIndex < this._cardHidden.length) {
                var cardBackNode = this._cardHidden[this._currentCardIndex];
                cardBackNode.active = true;
              }
            }

            this._currentCardIndex++;
          }
        };

        _proto.showCard = function showCard(cards) {
          this._cardShowingHolder.active = true;

          if (this._cardHiddenHolder) {
            this._cardHiddenHolder.active = false;
          }

          for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var cardView = this._cardViews[i];
            cardView.loadCard(card.suit, card.rank);
            cardView.setActiveModel(true);
          }
        };

        _proto.flipCard = function flipCard(cards, flipTime) {
          this._cardShowingHolder.active = true;

          if (this._cardHiddenHolder) {
            this._cardHiddenHolder.active = false;
          }

          for (var i = 0; i < 2; i++) {
            var card = cards[i];
            var cardView = this._cardViews[i];
            cardView.loadCard(card.suit, card.rank);
            cardView.doFlip(true, flipTime);
          }
        };

        return CardUserPanel;
      }(BaseUserInforPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_cardShowingHolder", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_cardViews", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_cardHiddenHolder", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_cardHidden", [_dec5], {
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

System.register("chunks:///_virtual/CardView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardLibrary.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, tween, v3, Vec3, Component, CardLibrary;

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
      Node = module.Node;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CardLibrary = module.CardLibrary;
    }],
    execute: function () {
      exports('ECardEffect', void 0);

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "7b9d72mnLdH973AgqHx/dGz", "CardView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ECardEffect;

      (function (ECardEffect) {
        ECardEffect[ECardEffect["None"] = 0] = "None";
        ECardEffect[ECardEffect["Dim"] = 1] = "Dim";
        ECardEffect[ECardEffect["Glow"] = 2] = "Glow";
      })(ECardEffect || (ECardEffect = exports('ECardEffect', {})));

      var ECardState;

      (function (ECardState) {
        ECardState[ECardState["IsNotLoaded"] = 0] = "IsNotLoaded";
        ECardState[ECardState["Loaded"] = 1] = "Loaded";
      })(ECardState || (ECardState = {}));

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
      }), _dec6 = property({
        type: Sprite,
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

          _initializerDefineProperty(_this, "_frame", _descriptor5, _assertThisInitialized(_this));

          _this._suit = null;
          _this._rank = null;
          _this._cardState = ECardState.IsNotLoaded;
          return _this;
        }

        var _proto = CardView.prototype;

        _proto.resetState = function resetState() {
          this.setEffect(ECardEffect.None);
          this._modelCard.node.active = false;
          this._modelBack.node.active = false;
          this.showFrame(false);
          this._cardState = ECardState.IsNotLoaded;
        };

        _proto.loadCard = function loadCard(suit, rank) {
          this._suit = suit;
          this._rank = rank;
          this._modelCard.spriteFrame = CardLibrary.getSprite(suit, rank);
          this._cardState = ECardState.Loaded;
        };

        _proto.loadCardById = function loadCardById(id) {
          var cardData = CardLibrary.getCardData(id);
          this.loadCard(cardData.suit, cardData.rank);
        };

        _proto.hideEffects = function hideEffects() {
          this._dim.active = false;
        };

        _proto.doFlip = function doFlip(isFront, flipTime) {
          var _this2 = this;

          this.node.active = true;
          this.setActiveModel(!isFront);
          this.setupPreFlip();
          tween(this._modelCard.node).to(flipTime, {
            eulerAngles: v3(0, -90, 0)
          }).call(function () {
            return _this2.setActiveModel(isFront);
          }).to(flipTime, {
            eulerAngles: v3(0, 0, 0)
          }).start();
          tween(this._modelBack.node).to(flipTime, {
            eulerAngles: v3(0, -90, 0)
          }).to(flipTime, {
            eulerAngles: v3(0, 0, 0)
          }).start();
        };

        _proto.checkCardEffect = function checkCardEffect(cards) {
          var _this3 = this;

          if (this._cardState == ECardState.IsNotLoaded) return;
          var isWinningCard = false;
          isWinningCard = cards.some(function (c) {
            return c.rank === _this3._rank && c.suit === _this3._suit;
          });
          console.log("Checking card effect for card:", isWinningCard, this._rank, this._suit);
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
          console.log("setEffect called with:", ECardEffect[cardEffect]);

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

        _proto.showFrame = function showFrame(show) {
          // Implement frame showing logic if needed
          if (this._frame.node.active != show) this._frame.node.active = show;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_frame", [_dec6], {
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

            var winner = remains[0]; //ServiceLocator.register('Bluff', winner);

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

System.register("chunks:///_virtual/CheckHandRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HandRank.ts', './CardInfor.ts'], function (exports) {
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
    }, function (module) {
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
          var combinations = this.getCombinations(allCards, 5); // Initialize with the first generated combination. 
          // This guarantees bestCombination is never [] and always valid.

          var bestCombination = combinations[0];
          var bestHand = this.evaluateHand(bestCombination); // Loop through the remaining combinations

          for (var i = 1; i < combinations.length; i++) {
            var combination = combinations[i];
            var hand = this.evaluateHand(combination);

            if (hand.rank > bestHand.rank || hand.rank === bestHand.rank && this.compareTiebreakers(hand.tiebreaker, bestHand.tiebreaker) > 0) {
              bestHand = hand;
              bestCombination = combination;
            }
          }

          return [bestHand, null];
        };

        CheckHandRank.getCombinations = function getCombinations(cards, size) {
          if (size > cards.length) return [];
          if (size === 0) return [[]];
          var combinations = [];

          for (var i = 0; i < cards.length; i++) {
            var remainingCards = cards.slice(i + 1);
            var smallerCombinations = this.getCombinations(remainingCards, size - 1);

            for (var _iterator = _createForOfIteratorHelperLoose(smallerCombinations), _step; !(_step = _iterator()).done;) {
              var smallerCombination = _step.value;
              combinations.push([cards[i]].concat(smallerCombination));
            }
          }

          return combinations;
        } // Helper function to check if hand is a low ace straight (A-2-3-4-5)
        ;

        CheckHandRank.isLowAceStraight = function isLowAceStraight(ranks) {
          return ranks.length === 5 && ranks[0] === Rank.Five && ranks[1] === Rank.Four && ranks[2] === Rank.Three && ranks[3] === Rank.Two && ranks[4] === Rank.Ace;
        };

        CheckHandRank.evaluateHand = function evaluateHand(hand) {
          var _this = this; // Sort the hand by rank (descending)


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
            if (_this.isLowAceStraight(ranks)) return true;

            for (var i = 1; i < sortedHand.length; i++) {
              if (sortedHand[i - 1].rank !== sortedHand[i].rank + 1) {
                return false;
              }
            }

            return true;
          };

          var getRankCounts = function getRankCounts() {
            var rankCounts = new Map();

            for (var _iterator2 = _createForOfIteratorHelperLoose(hand), _step2; !(_step2 = _iterator2()).done;) {
              var card = _step2.value;
              rankCounts.set(card.rank, (rankCounts.get(card.rank) || 0) + 1);
            }

            return rankCounts;
          }; // Check for Royal Flush (10-J-Q-K-A of same suit)


          if (isFlush() && isStraight() && sortedHand[0].rank === Rank.Ace && sortedHand[1].rank === Rank.King) {
            return {
              rank: HandRank.RoyalFlush,
              tiebreaker: sortedHand.map(function (card) {
                return card.rank;
              })
            };
          } // Check for Straight Flush


          if (isFlush() && isStraight()) {
            var ranks = sortedHand.map(function (card) {
              return card.rank;
            }); // For A-2-3-4-5, the "high card" is 5, not A

            var tiebreaker = this.isLowAceStraight(ranks) ? [Rank.Five] : [sortedHand[0].rank];
            return {
              rank: HandRank.StraightFlush,
              tiebreaker: tiebreaker
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
            var _ranks = sortedHand.map(function (card) {
              return card.rank;
            }); // For A-2-3-4-5, the "high card" is 5, not A


            var _tiebreaker = this.isLowAceStraight(_ranks) ? [Rank.Five] : [sortedHand[0].rank];

            return {
              rank: HandRank.Straight,
              tiebreaker: _tiebreaker
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
          // const allCards = [...hand, ...tableHand];
          // if (allCards.length === 0) return 0;
          var score = 0; // const values = allCards.map(c => c.value).sort((a, b) => a - b);
          // const suits = allCards.map(c => c.suit);
          // // 1. Hole Card Strength (Base)
          // const holeHigh = Math.max(hand[0].value, hand[1].value);
          // score += holeHigh;
          // // 2. Pocket Pairs (In hand)
          // if (hand[0].value === hand[1].value) {
          //     score += 20;
          //     if (hand[0].value > 10) score += 15; // Bonus for JJ+
          // }
          // // 3. Board Texture (Pairs, Sets, Quads)
          // const valueCounts: Record<number, number> = {};
          // for (let v of values) {
          //     valueCounts[v] = (valueCounts[v] || 0) + 1;
          // }
          // for (const key in valueCounts) {
          //     const count = valueCounts[key];
          //     if (count === 2) score += 15; // Pair
          //     if (count === 3) score += 35; // Trips
          //     if (count === 4) score += 80; // Quads
          // }
          // // 4. Flush Potential
          // const suitCounts: Record<string, number> = {};
          // for (let s of suits) {
          //     suitCounts[s] = (suitCounts[s] || 0) + 1;
          // }
          // let maxSuitCount = 0;
          // for (const key in suitCounts) {
          //     if (suitCounts[key] > maxSuitCount) {
          //         maxSuitCount = suitCounts[key];
          //     }
          // }
          // if (maxSuitCount >= 5) score += 60; // Flush Made
          // else if (maxSuitCount === 4) score += 10; // Flush Draw
          // // 5. Straight Potential (Simplified for heuristic)
          // // Checks for 5 unique sequential cards
          // const uniqueValues = Array.from(new Set(values)); // Remove duplicates
          // let consecutive = 0;
          // for (let i = 0; i < uniqueValues.length - 1; i++) {
          //     if (uniqueValues[i + 1] === uniqueValues[i] + 1) {
          //         consecutive++;
          //     } else {
          //         consecutive = 0;
          //     }
          //     if (consecutive >= 4) { // 4 steps = 5 cards
          //         score += 50;
          //         break;
          //     }
          // }

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

        CheckHandRank.getCoreCards = function getCoreCards(hand, rank) {
          // 1. For geometric hands (Straight, Flush, StraightFlush), the "core" is the whole hand.
          if (rank === HandRank.Straight || rank === HandRank.Flush || rank === HandRank.StraightFlush || rank === HandRank.RoyalFlush) {
            return hand;
          } // 2. Count frequency of each card rank in the 5-card hand
          // (e.g., [K, K, 5, 5, A] -> { K: 2, 5: 2, A: 1 })


          var rankCounts = new Map();
          hand.forEach(function (card) {
            rankCounts.set(card.rank, (rankCounts.get(card.rank) || 0) + 1);
          }); // 3. Handle High Card separately (Core is just the single highest card)

          if (rank === HandRank.HighCard) {
            // Sort descending by rank and take the first one
            var sortedHand = [].concat(hand).sort(function (a, b) {
              return b.rank - a.rank;
            });
            return [sortedHand[0]];
          } // 4. For Pairs, Trips, Quads, Full House:
          // We only want cards that appear more than once (frequency > 1).
          // This effectively filters out the "kickers".


          return hand.filter(function (card) {
            return rankCounts.get(card.rank) > 1;
          });
        };

        return CheckHandRank;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckHandRankBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './TableManager.ts', './CheckHandRank.ts', './BetManager.ts', './UserManager.ts', './PokerTableUI.ts', './UserInforUI.ts', './HandRank.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, TableManager, CheckHandRank, BetManager, UserManager, PokerTableUI, UserInforUI, HandRank;

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
      TableManager = module.TableManager;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      BetManager = module.BetManager;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      HandRank = module.HandRank;
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

            var betManager, rawPots, mergedPotsMap, finalPots;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseBehaviour.prototype.startBehaviour.call(this);

                    this._userManager = this.gameplayManager.getMiniManager(UserManager);
                    betManager = this.gameplayManager.getMiniManager(BetManager);
                    this._userInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    this._tableUI = this.gameplayManager.getUI().get(PokerTableUI); // 1. Clear previous data

                    this._uniqueWinners.clear();

                    this._userHandMap.clear(); // 2. Calculate winners for EACH pot (Logic Calculation)
                    // We calculate earnings here, but we don't finalize visual pots yet


                    rawPots = betManager.pots;
                    rawPots.forEach(function (pot) {
                      var potWinners = _this2.onCheckWinner(pot.Users, pot.PotAmount);

                      pot.Winners = potWinners;
                    }); // =================================================================
                    // 3. MERGE POTS (Visual Consolidation)
                    // If Pot A and Pot B have the exact same winners, merge them 
                    // into one big pot so the UI only plays one animation.
                    // =================================================================

                    mergedPotsMap = new Map(); //ServiceLocator.register('winnerResult', this._userHandMap);

                    rawPots.forEach(function (pot) {
                      if (!pot.Winners || pot.Winners.size === 0) return; // Generate unique key for this winner group (e.g. "0|2")

                      var signature = _this2.getWinnerSignature(pot.Winners);

                      if (mergedPotsMap.has(signature)) {
                        // We already have a pot for these specific winners. Combine them.
                        var existingPot = mergedPotsMap.get(signature);
                        existingPot.PotAmount += pot.PotAmount;
                        console.log("Merging pot of " + pot.PotAmount + " into existing pot group " + signature);
                      } else {
                        // New unique group of winners
                        mergedPotsMap.set(signature, pot);
                      }
                    });
                    finalPots = Array.from(mergedPotsMap.values());
                    finalPots.forEach(function (pot, i) {
                      //const winnerNames = Array.from(pot.Winners.keys()).map(u => u.name).join(', ');
                      console.log("=== Pot " + (i + 1) + ": " + pot.PotAmount + " chips | Winners: " + pot);
                    }); // 4. Send Consolidate Pots to BetManager

                    betManager.setWinnersPot(finalPots); // 5. Set visual effects (Cards and Table)
                    // ServiceLocator.register('winnerResult', this._userHandMap);
                    // this._userHandMap.forEach((cards, user) => {
                    //     this.setUserCardEffectForWinner(user, cards);
                    //     this.setTableEffect(cards);
                    // });
                    // // 6. Handle Losers
                    // // Uncommented this block as it is usually necessary
                    // const losers: PokerUser[] = this._userManager.activeUsers.filter(u => !this._userHandMap.has(u) && !u.IsFold);
                    // this.setUserCardEffectForLosers(losers);
                    // this.setUserEffectForLoser(losers);

                    this.endBehaviour();

                  case 15:
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
        }()
        /**
         * Generates a unique string key based on the indices of the winners.
         * Ensures that order doesn't matter (e.g. [A, B] produces same key as [B, A]).
         */
        ;

        _proto.getWinnerSignature = function getWinnerSignature(winners) {
          var _this3 = this;

          var users = Array.from(winners.keys()); // Get user seat indices

          var indices = users.map(function (user) {
            return _this3._userManager.getIndexByUser(user);
          }); // Sort numerically to ensure consistency

          indices.sort(function (a, b) {
            return a - b;
          }); // Join to create signature "0|2|5"

          return indices.join('|');
        };

        _proto.onCheckWinner = function onCheckWinner(users, potAmount) {
          var _this4 = this;

          var tableManager = this.gameplayManager.getMiniManager(TableManager);
          if (!tableManager) return new Map();
          var bestHand = {
            rank: HandRank.HighCard,
            tiebreaker: []
          };
          var currentPotWinners = new Map();

          for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
            var user = _step.value;
            if (!user || user.IsFold) continue; // const [userHand, combination] = CheckHandRank.checkHandRank(
            //     user.cards,
            //     tableManager.getCardsOnTable()
            // );

            var userHand = null;
            var combination = null;

            if (userHand.rank > bestHand.rank || userHand.rank === bestHand.rank && CheckHandRank.compareTiebreakers(userHand.tiebreaker, bestHand.tiebreaker) > 0) {
              bestHand = userHand;
              currentPotWinners.clear();
              currentPotWinners.set(user, combination);
            } else if (userHand.rank === bestHand.rank && CheckHandRank.compareTiebreakers(userHand.tiebreaker, bestHand.tiebreaker) === 0) {
              currentPotWinners.set(user, combination);
            }
          }

          var winnersInThisPot = Array.from(currentPotWinners.keys());

          if (winnersInThisPot.length === 0) {
            console.warn('No valid winners found for this pot.');
            return new Map();
          }

          var share = potAmount / winnersInThisPot.length;
          winnersInThisPot.forEach(function (winner) {
            // winner.TotalEarn += share; // Note: TotalEarn accumulates correctly even if we merge pots later
            // console.log(`${winner.name} wins ${share.toFixed(2)} chips`);
            _this4._uniqueWinners.add(winner);

            var winningCards = currentPotWinners.get(winner);

            if (winningCards) {
              _this4._userHandMap.set(winner, winningCards);
            }
          });
          var rankName = HandRank[bestHand.rank] || "Rank " + bestHand.rank;

          if (winnersInThisPot.length > 1) {
            var names = winnersInThisPot.map(function (w) {
              return w.name;
            }).join(', ');
            console.log("Tie among: " + names);
          }

          return currentPotWinners;
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

System.register("chunks:///_virtual/ChipAssetLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChipLibrary.ts', './BaseLoader.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ChipLibrary, BaseLoader;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ChipLibrary = module.ChipLibrary;
    }, function (module) {
      BaseLoader = module.BaseLoader;
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
          if (this.jsonAsset && this.sprAsset) {
            ChipLibrary.initialize(this.jsonAsset, this.sprAsset.getSpriteFrames());
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

System.register("chunks:///_virtual/ChipGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChipEffect.ts', './PositionUtils.ts', './PoolHelper.ts', './EPoolType.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ChipEffect, PositionUtils, PoolHelper, EPoolType;

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
      ChipEffect = module.ChipEffect;
    }, function (module) {
      PositionUtils = module.PositionUtils;
    }, function (module) {
      PoolHelper = module.PoolHelper;
    }, function (module) {
      EPoolType = module.EPoolType;
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
          return _this;
        }

        var _proto = ChipGroup.prototype;

        _proto.spawnChip = function spawnChip(chipCount, sprFrame) {
          var posRandom = PositionUtils.getPositionsRandom(this.node.worldPosition, chipCount, this._minRadiusSpawn, this._maxRadiusSpawn);

          for (var i = 0; i < chipCount; i++) {
            var chipNode = PoolHelper.spawnNode(EPoolType.Chip, this.node);
            chipNode.worldPosition = posRandom[i];
            var chipEffect = chipNode.getComponent(ChipEffect);

            this._chipsSpawned.push(chipNode);

            chipEffect.setChipModel(sprFrame);
          }
        };

        _proto.despawnChip = function despawnChip() {
          this._chipsSpawned.forEach(function (c) {
            return PoolHelper.despawnNode(c);
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

        ChipLibrary.getSprite = function getSprite(id) {
          if (this._chipSpriteMap.has(id.toString())) {
            return this._chipSpriteMap.get(id.toString());
          }

          return null;
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

          var deckManager = this.gameplayManager.getMiniManager(DeckManager); //deckManager.createDeck();

          this.endBehaviour();
        };

        return CreateDeckBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DealCardOnTableBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts', './TableManager.ts', './PokerTableUI.ts', './AsyncUtils.ts', './Card.ts', './UserInforUI.ts', './CardLibrary.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, DeckManager, TableManager, PokerTableUI, AsyncUtils, Card, UserInforUI, CardLibrary;

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
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      Card = module.Card;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      CardLibrary = module.CardLibrary;
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
                    //
                    //this.updateCardHandRank();
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
            var timeWaitBetweenCards, i;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.gameplayManager.getUI().get(PokerTableUI);
                    timeWaitBetweenCards = 0.2;
                    i = 0;

                  case 3:
                    if (!(i < this._numberOfCards)) {
                      _context2.next = 10;
                      break;
                    }

                    this.getCard(this.config.IsUsingCheat); //tableUI.dealCommonCard(card, this.config.TimeToDealCard, this.config.TimeFlip);

                    _context2.next = 7;
                    return AsyncUtils.waitForSeconds(timeWaitBetweenCards);

                  case 7:
                    i++;
                    _context2.next = 3;
                    break;

                  case 10:
                    _context2.next = 12;
                    return AsyncUtils.waitForSeconds(this.config.TimeToDealCard);

                  case 12:
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

        _proto.getCard = function getCard(isCheat) {
          var card = null;
          var tableManager = this.gameplayManager.getMiniManager(TableManager);

          if (isCheat) {
            var tableData = this.config.TableData;
            var index = tableManager.Table.CardsOnTable.length;
            var cardData = CardLibrary.getCardData(tableData.CardIds[index]);
            card = new Card(cardData.suit, cardData.rank);
            tableManager.Table.receiveCard(card);
          } else {
            var deckManager = this.gameplayManager.getMiniManager(DeckManager); //card = deckManager.dealCard(tableManager.Table);
          }

          return card;
        };

        _proto.updateCardHandRank = function updateCardHandRank() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI);
          var tableManager = this.gameplayManager.getMiniManager(TableManager);
          var tableUI = this.gameplayManager.getUI().get(PokerTableUI); // uiInforUI.getPanel(0).onShowHandRankBanner(
          //     tableManager.Table.CardsOnTable,
          //     (corecard, isShow) => { tableUI.onShowCardGlowEffect(corecard, isShow); }
          // );
          // uiInforUI.getPanels(uiInforUI.getPanelsLength()).forEach((panel, index) => {
          //     if (index != 0) {
          //         panel.onCheckHandRank(tableManager.Table.CardsOnTable);
          //     }
          // });
        };

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

System.register("chunks:///_virtual/DealCardToUserBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './DeckManager.ts', './UserManager.ts', './Card.ts', './PokerTableUI.ts', './AsyncUtils.ts', './UserInforUI.ts', './CardLibrary.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, DeckManager, UserManager, Card, PokerTableUI, AsyncUtils, UserInforUI, CardLibrary;

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
      Card = module.Card;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      CardLibrary = module.CardLibrary;
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
            var userInforUI, turnHandler, i, user, cards, index, timeWaitBetweenCards, userCardArray, _i, k, _index;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this._deckManager = this.gameplayManager.getMiniManager(DeckManager);
                    this._userManager = this.gameplayManager.getMiniManager(UserManager);
                    userInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    this.gameplayManager.getUI().get(PokerTableUI);
                    turnHandler = this._userManager.turnHandler;

                    this._userCardMap.clear(); //load data
                    //ServiceLocator.register("CardData", this._userCardMap);


                    for (i = 0; i < this._userManager.activeUsers.length; i++) {
                      user = turnHandler.getUserFromQueue();
                      cards = this.getCards(this.config.IsUsingCheat, i, user);
                      index = this._userManager.getIndexByUser(user);

                      this._userCardMap.set(index, cards);
                    } // show card views


                    this.onShowCardViews(); //load effect

                    timeWaitBetweenCards = 0.2; //

                    userCardArray = Array.from(this._userCardMap.entries());
                    _i = 0;

                  case 11:
                    if (!(_i < 2)) {
                      _context2.next = 24;
                      break;
                    }

                    k = 0;

                  case 13:
                    if (!(k < this._userManager.activeUsers.length)) {
                      _context2.next = 21;
                      break;
                    }

                    _index = userCardArray[k][0];
                    userInforUI.getPanel(_index); // if (index === 0) {
                    //     tableUI.dealCardToDesination(panel.CardViewHolder.worldPosition, this.config.TimeToDealCard, () => {
                    //         panel.onReceiveCard();
                    //     });
                    // } else {
                    //     tableUI.dealCardToDesination(panel.CardViewHidden.worldPosition, this.config.TimeToDealCard, () => {
                    //         panel.onReceiveHidden();
                    //     });
                    // }

                    _context2.next = 18;
                    return AsyncUtils.waitForSeconds(timeWaitBetweenCards);

                  case 18:
                    k++;
                    _context2.next = 13;
                    break;

                  case 21:
                    _i++;
                    _context2.next = 11;
                    break;

                  case 24:
                    this.onSortCardUser();
                    _context2.next = 27;
                    return AsyncUtils.waitForSeconds(this.config.TimeToDealCard);

                  case 27:
                    this.onShowUserCard();

                  case 28:
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

        _proto.onSortCardUser = function onSortCardUser() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI); //uiInforUI.sortCardViewForAllUser();
        };

        _proto.onShowUserCard = function onShowUserCard() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI); //uiInforUI.getPanel(0).flipCard(this._userCardMap.get(0));
        };

        _proto.getCards = function getCards(isCheat, index, user) {
          var card_1 = null;
          var card_2 = null;

          if (isCheat) {
            var userData = this.config.UserDatas[index];
            var cardData_1 = CardLibrary.getCardData(userData.CardIds[0]);
            var cardData_2 = CardLibrary.getCardData(userData.CardIds[1]);
            card_1 = new Card(cardData_1.suit, cardData_1.rank);
            card_2 = new Card(cardData_2.suit, cardData_2.rank);
            user.receiveCard(card_1);
            user.receiveCard(card_2);
          }

          return [card_1, card_2];
        };

        _proto.onShowCardViews = function onShowCardViews() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI);

          for (var i = 0; i < this._userManager.activeUsers.length; i++) {
            var panel = uiInforUI.getPanel(i); // if (i === 0) {
            //     panel.onShowCardViewsHolder(true);
            // } else {
            //     panel.onShowCardViewsHolder(false);
            // }
          }
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

System.register("chunks:///_virtual/DeckManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameplayHandler.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, GameplayHandler;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
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
          return _GameplayHandler.apply(this, arguments) || this;
        }

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
      Define.SceneName = {
        Splash: 'Splash',
        Lobby: 'Lobby',
        Hall: 'Hall'
      };
      Define.Service = {
        GameConfig: 'GameConfig',
        RoomConfig: 'RoomConfig',
        AudioManager: 'AudioManager',
        CameraManager: 'CameraManager',
        NetworkManager: 'NetworkManager',
        PoolManager: 'PoolManager',
        UIManager: 'UIManager',
        UserProfile: 'UserProfile',
        MinigameManager: 'MinigameManager',
        SessionManager: 'SessionManager',
        MinigameAudio: 'MinigameAudio',
        EventBus: 'EventBus',
        Adapter: {
          Global: 'GlobalAdapter'
        },
        GameController: 'GameController',
        LoginController: 'LoginController',
        ImageCache: 'ImageCacheManager',
        NetworkController: 'NetworkController'
      };
      Define.EventBusKey = {
        Socket: {
          StartConnect: 'StartConnect',
          Open: 'open',
          Close: 'close',
          Active: 'active'
        },
        NetworkReconnect: 'NetworkReconnect',
        NetworkResponse: {
          MinigameCommon: {
            StartGame: 'start_game',
            EndGame: 'end_game'
          },
          Global: {
            Login: 'login',
            Logout: 'logout',
            SearchTable: 'search_room',
            CreateTable: 'create_room',
            JoinTable: 'joinRoom',
            LeaveTable: 'leaveroom',
            UpdateBalance: 'updateBalance',
            Ping: 'Ping',
            UserInfor: 'user_infor',
            IsInTable: 'is_in_table',
            Deposit: 'deposit'
          }
        }
      };
      var GLOBAL_KEYS = exports('GLOBAL_KEYS', Define.EventBusKey.NetworkResponse.Global);
      var MINIGAME_KEYS = exports('MINIGAME_KEYS', Define.EventBusKey.NetworkResponse.MinigameCommon);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefinePoker.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44bdbhMWppJj5IiQbzeqjDa", "DefinePoker", undefined);

      var DefinePoker = exports('DefinePoker', function DefinePoker() {});
      DefinePoker.SceneName = {
        LobbyPoker: 'LobbyPoker',
        Poker: 'Poker'
      };
      DefinePoker.Service = {
        Adapter: {
          PokerLobby: 'PokerLobbyAdapter',
          Poker: 'PokerAdapter'
        },
        PokerController: 'PokerController',
        PokerLobbyController: 'PokerLobbyController'
      };
      DefinePoker.EventBusKey = {
        NetworkResponse: {
          PokerLobby: {
            GetTables: 'get_room_types'
          },
          Poker: {
            UserExitTable: 'user_exit_room',
            PlaceBlind: 'place_bind',
            DealCardToUser: 'deal_hole_cards',
            DealFlop: 'deal_flop',
            DealTurn: 'deal_turn',
            DealRiver: 'deal_river',
            ActionResponse: 'action_response',
            UserEnterTable: 'user_enter_room',
            TableData: 'room_data',
            RevealCard: 'reveal_card',
            RevealAllCard: 'reveal_all_card',
            ChangeTurn: 'player_turn',
            ChangePhase: '',
            GameResult: 'player_result',
            PlayerOptions: 'action_infor',
            End_Preflop: 'end_pre_flop_betting',
            End_Flop: 'end_flop_betting',
            End_Turn: 'end_turn_betting',
            End_River: 'end_river_betting',
            CheckHandRank: "check_hand_rank",
            UserStateChanged: "user_state_changed"
          }
        }
      };
      var POKER_LOBBY_KEYS = exports('POKER_LOBBY_KEYS', DefinePoker.EventBusKey.NetworkResponse.PokerLobby);
      var POKER_KEYS = exports('POKER_KEYS', DefinePoker.EventBusKey.NetworkResponse.Poker);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DontDestroy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, director, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "3215b7vFZxN6pd6zQ1maYdt", "DontDestroy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DontDestroy = exports('DontDestroy', (_dec = ccclass('DontDestroy'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DontDestroy, _Component);

        function DontDestroy() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = DontDestroy.prototype;

        _proto.onLoad = function onLoad() {
          director.addPersistRootNode(this.node);
        };

        return DontDestroy;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DowloadHandler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SpriteFrame, LogUtils;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      LogUtils = module.LogUtils;
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

                    LogUtils.error("[Downloader] HTTP error! status: " + response.status + " for URL: " + url);
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
                    LogUtils.error("[DownloadTextByUrl] Failed to download: " + url, _context2.t0);
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
                    LogUtils.error("[DownloadJSONByUrl] Invalid JSON format from: " + url, _context3.t0);
                    return _context3.abrupt("return", null);

                  case 14:
                    return _context3.abrupt("return", json);

                  case 17:
                    _context3.prev = 17;
                    _context3.t1 = _context3["catch"](0);
                    LogUtils.error("[DownloadJSONByUrl] Failed to download JSON: " + url, _context3.t1);
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
                    LogUtils.error("[DownloadFileByUrl] Failed to download: " + url, _context4.t0);
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
                        //LogUtils.log(`[DownloadImageByUrl] Successfully loaded: ${url}`);
                        resolve(img);
                      };

                      img.onerror = function (err) {
                        LogUtils.error("[DownloadImageByUrl] Failed to load image: " + url, err);
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

                    LogUtils.warn("[UIPlayerCard] Failed to download avatar");
                    return _context6.abrupt("return");

                  case 7:
                    spriteFrame = SpriteFrame.createWithImage(image);
                    return _context6.abrupt("return", spriteFrame);

                  case 11:
                    _context6.prev = 11;
                    _context6.t0 = _context6["catch"](0);
                    LogUtils.error("[UIPlayerCard] Error loading avatar:", _context6.t0);
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

System.register("chunks:///_virtual/EAudio.ts", ['cc'], function (exports) {
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

      cclegacy._RF.push({}, "f0609j7nPtE+JrrYh0Hz1mr", "EAudio", undefined);

      var EMusicId;

      (function (EMusicId) {
        EMusicId["BGM_Lobby"] = "BGM_Lobby";
      })(EMusicId || (EMusicId = exports('EMusicId', {})));

      var ESFXId;

      (function (ESFXId) {
        ESFXId["SFX_CardFlip"] = "SFX_CardFlip";
        ESFXId["SFX_Chip"] = "SFX_Chip";
        ESFXId["SFX_Click"] = "SFX_Click";
        ESFXId["SFX_DealCard"] = "SFX_DealCard";
        ESFXId["SFX_DealCard_2"] = "SFX_DealCard_2";
        ESFXId["SFX_Tap_1"] = "SFX_Tap_1";
      })(ESFXId || (ESFXId = exports('ESFXId', {})));

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
          if (value in enumObject) {
            var enumValue = enumObject[value];

            if (enumValue !== undefined) {
              return enumValue;
            }
          }

          return null;
        };

        EnumUtils.getListString = function getListString(enumObj) {
          if (!enumObj) return [];
          return Object.keys(enumObj).map(function (key) {
            return enumObj[key];
          });
        };

        EnumUtils.getListID = function getListID(enumObj) {
          if (!enumObj) return [];
          return Object.keys(enumObj).map(function (key) {
            return enumObj[key];
          }).filter(function (val) {
            return typeof val === 'number';
          });
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

System.register("chunks:///_virtual/EPoolType.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EPoolType', void 0);

      cclegacy._RF.push({}, "3e108UfP4JMroWRJsl9opi9", "EPoolType", undefined);

      var EPoolType;

      (function (EPoolType) {
        EPoolType["AudioPlaying"] = "AudioPlaying";
        EPoolType["Card"] = "Card";
        EPoolType["Chip"] = "Chip";
        EPoolType["ChipGroup"] = "ChipGroup";
        EPoolType["FloatingText"] = "FloatingText";
      })(EPoolType || (EPoolType = exports('EPoolType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EResultCode.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EResultCode', void 0);

      cclegacy._RF.push({}, "ddad5St+a5AEoNpjvhpzRxW", "EResultCode", undefined);

      var EResultCode;

      (function (EResultCode) {
        EResultCode[EResultCode["SUCCESS"] = 1111] = "SUCCESS";
        EResultCode[EResultCode["FAILED"] = 0] = "FAILED";
      })(EResultCode || (EResultCode = exports('EResultCode', {})));

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
        ERole["Dealer"] = "dealer";
        ERole["SmallBlind"] = "smallblind";
        ERole["BigBlind"] = "bigblind";
      })(ERole || (ERole = exports('ERole', {})));

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

System.register("chunks:///_virtual/EUICore.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        EUICore: void 0,
        EUILayer: void 0
      });

      cclegacy._RF.push({}, "1421biqPj9Csp88TKh1XbMb", "EUICore", undefined);

      var EUICore;

      (function (EUICore) {
        EUICore["BasePopup"] = "";
        EUICore["Reconnect"] = "Popup_Reconnect";
        EUICore["NoInternet"] = "Popup_NoInternet";
      })(EUICore || (EUICore = exports('EUICore', {})));

      var EUILayer; // ************* DONT CHANGE THIS FILE *************

      (function (EUILayer) {
        EUILayer[EUILayer["Screen"] = 0] = "Screen";
        EUILayer[EUILayer["Popup"] = 1] = "Popup";
        EUILayer[EUILayer["Notify"] = 2] = "Notify";
        EUILayer[EUILayer["AlwaysOnTop"] = 3] = "AlwaysOnTop";
      })(EUILayer || (EUILayer = exports('EUILayer', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EUIGame.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EUIGame', void 0);

      cclegacy._RF.push({}, "916ddR29NNGnKXlBGXUSdbZ", "EUIGame", undefined);

      var EUIGame;

      (function (EUIGame) {
        EUIGame["Popup_Deposit"] = "Popup_Deposit";
        EUIGame["Popup_Dynamic"] = "Popup_Dynamic";
        EUIGame["Popup_GameMenu"] = "Popup_GameMenu";
        EUIGame["Popup_Leaderboard"] = "Popup_Leaderboard";
        EUIGame["Popup_Loading"] = "Popup_Loading";
        EUIGame["Popup_Setting"] = "Popup_Setting";
        EUIGame["Popup_Tutorial"] = "Popup_Tutorial";
        EUIGame["Popup_UserProfile"] = "Popup_UserProfile";
        EUIGame["Popup_Wheel"] = "Popup_Wheel";
        EUIGame["Popup_JoinRoom"] = "Popup_JoinRoom";
        EUIGame["MinigameUIManager"] = "MinigameUIManager";
      })(EUIGame || (EUIGame = exports('EUIGame', {})));

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
        EUserOptions[EUserOptions["Check"] = 1] = "Check";
        EUserOptions[EUserOptions["Call"] = 2] = "Call";
        EUserOptions[EUserOptions["Raise"] = 3] = "Raise";
        EUserOptions[EUserOptions["AllIn"] = 4] = "AllIn";
        EUserOptions[EUserOptions["Show"] = 5] = "Show";
        EUserOptions[EUserOptions["Bet"] = 6] = "Bet";
      })(EUserOptions || (EUserOptions = exports('EUserOptions', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventBus.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function () {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "026c4fnANFAlYyfFj1sCMcc", "EventBus", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EventBus = (_dec = ccclass('EventBus'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventBus, _Component);

        function EventBus() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._eventBus = new EventTarget();
          return _this;
        }

        var _proto = EventBus.prototype;

        _proto.init = function init() {};

        _proto.on = function on(type, callback, target) {
          this._eventBus.on(type, callback, target);
        };

        _proto.off = function off(type, callback, target) {
          this._eventBus.off(type, callback, target);
        };

        _proto.emit = function emit(type) {
          var _this$_eventBus;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          (_this$_eventBus = this._eventBus).emit.apply(_this$_eventBus, [type].concat(args));
        };

        _proto.once = function once(type, callback, target) {
          this._eventBus.once(type, callback, target);
        };

        _proto.targetOff = function targetOff(target) {
          this._eventBus.targetOff(target);
        };

        return EventBus;
      }(Component)) || _class);

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

System.register("chunks:///_virtual/Fade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tweener.ts', './BaseAnimation.ts', './LogUtils.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Enum, NodeEventType, Tweener, BaseAnimation, LogUtils, EFadeType;

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
      BaseAnimation = module.BaseAnimation;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      EFadeType = module.EFadeType;
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
            LogUtils.warn("[Fade] No Sprite component found on " + this.node.name);
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
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Enter");

          this.fadeIn();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Exit");

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
          Tweener.Transparency({
            uiRenderer: this._sprite,
            startAlpha: this._alphaStart,
            endAlpha: this._alphaEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.fadeOut = function fadeOut() {
          Tweener.Transparency({
            uiRenderer: this._sprite,
            startAlpha: this._alphaEnd,
            endAlpha: this._alphaStart,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.fadeInOut = function fadeInOut() {
          // Fade in, then fade out once complete
          Tweener.TransparencyInOut({
            uiRenderer: this._sprite,
            startAlpha: this._alphaEnd,
            endAlpha: this._alphaStart,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
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

System.register("chunks:///_virtual/FloatingObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tweener.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIRenderer, v3, Component, Tweener;

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
          Tweener.GlobalTranslateTo({
            target: this.node,
            start: currentPosition,
            end: destinationPosition,
            duration: this._floatDuration,
            callback: function callback() {
              Tweener.Transparency({
                uiRenderer: _this2._uiObject,
                startAlpha: 255,
                endAlpha: 0,
                duration: _this2._fadeDuration,
                callback: onComplete
              });
            }
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

System.register("chunks:///_virtual/FloatingText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FloatingObject.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, LabelOutline, Color, FloatingObject;

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
      LabelOutline = module.LabelOutline;
      Color = module.Color;
    }, function (module) {
      FloatingObject = module.FloatingObject;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "b61e0D4wa5B9ZPGrFSZ1P6+", "FloatingText", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FloatingText = exports('FloatingText', (_dec = ccclass('FloatingText'), _dec2 = property({
        type: Label,
        visible: true
      }), _dec3 = property({
        type: LabelOutline,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_FloatingObject) {
        _inheritsLoose(FloatingText, _FloatingObject);

        function FloatingText() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _FloatingObject.call.apply(_FloatingObject, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_lbText", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lbOutline", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = FloatingText.prototype;

        _proto.setText = function setText(text) {
          this._lbText.string = text;
          return this;
        };

        _proto.setTextColor = function setTextColor(color) {
          var colortest = new Color();
          this._lbText.color = color;
          return this;
        };

        _proto.setOutlineColor = function setOutlineColor(color) {
          this._lbOutline.color = color;
          return this;
        };

        return FloatingText;
      }(FloatingObject), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_lbText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lbOutline", [_dec3], {
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

System.register("chunks:///_virtual/GameConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, CCInteger, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _dec3, _dec4, _class4, _class5, _descriptor2, _dec5, _dec6, _class7, _class8, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

      cclegacy._RF.push({}, "01c9dej1vRLK4GV8tN4GE2I", "GameConfig", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserDataCheat = exports('UserDataCheat', (_dec = ccclass('UserDataCheat'), _dec2 = property({
        type: [CCInteger]
      }), _dec(_class = (_class2 = function UserDataCheat() {
        _initializerDefineProperty(this, "CardIds", _descriptor, this);
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "CardIds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 0];
        }
      }), _class2)) || _class));
      var TableDataCheat = exports('TableDataCheat', (_dec3 = ccclass('TableDataCheat'), _dec4 = property({
        type: [CCInteger]
      }), _dec3(_class4 = (_class5 = function TableDataCheat() {
        _initializerDefineProperty(this, "CardIds", _descriptor2, this);
      }, _descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "CardIds", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 0, 0, 0, 0];
        }
      }), _class5)) || _class4));
      var GameConfig = exports('GameConfig', (_dec5 = ccclass('GameConfig'), _dec6 = property({
        type: [UserDataCheat]
      }), _dec5(_class7 = (_class8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameConfig, _Component);

        function GameConfig() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "TimeFlip", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TimeToDealCard", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TimeChipAppear", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TimeChipMoveToPot", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UserInOfflineMode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "IsUsingCheat", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UserDatas", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TableData", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameConfig.prototype;

        _proto.init = function init() {};

        return GameConfig;
      }(Component), (_descriptor3 = _applyDecoratedDescriptor(_class8.prototype, "TimeFlip", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "TimeToDealCard", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "TimeChipAppear", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "TimeChipMoveToPot", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "UserInOfflineMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "IsUsingCheat", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "UserDatas", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "TableData", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TableDataCheat();
        }
      })), _class8)) || _class7));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DefinePoker.ts', './Define.ts', './LogUtils.ts', './SceneUtils.ts', './ServiceLocator.ts', './EResultCode.ts', './EUIGame.ts', './IGameController.ts'], function () {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, DefinePoker, Define, GLOBAL_KEYS, LogUtils, SceneUtils, ServiceLocator, EResultCode, EUIGame, JoinRoomType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      DefinePoker = module.DefinePoker;
    }, function (module) {
      Define = module.Define;
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      SceneUtils = module.SceneUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EResultCode = module.EResultCode;
    }, function (module) {
      EUIGame = module.EUIGame;
    }, function (module) {
      JoinRoomType = module.JoinRoomType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "003db8qciFO3qNdvyhdT6+G", "GameController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // control all game logic

      var GameController = (_dec = ccclass('GameController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);

        function GameController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._roomName = "";
          _this._eventBus = null;
          _this._uiManager = null;
          _this._gAdapter = null;
          _this._sessionManager = null;
          _this._onJoinRoom = void 0;
          _this._onLeaveRoom = void 0;
          return _this;
        }

        var _proto = GameController.prototype;

        _proto.init = function init() {
          this._eventBus = ServiceLocator.get(Define.Service.EventBus);
          this._uiManager = ServiceLocator.get(Define.Service.UIManager);
          this._gAdapter = ServiceLocator.get(Define.Service.Adapter.Global);
          this._sessionManager = ServiceLocator.get(Define.Service.SessionManager);

          this._eventBus.on(GLOBAL_KEYS.Login, this.onLoginResponse, this);

          this._eventBus.on(GLOBAL_KEYS.Logout, this.onLogoutResponse, this);

          this._eventBus.on(GLOBAL_KEYS.CreateTable, this.onCreateTableResponse, this);

          this._eventBus.on(GLOBAL_KEYS.SearchTable, this.onSearchTableResponse, this);

          this._eventBus.on(GLOBAL_KEYS.JoinTable, this.onJoinTableResponse, this);

          this._eventBus.on(GLOBAL_KEYS.LeaveTable, this.onLeaveTableResponse, this);

          this._eventBus.on(GLOBAL_KEYS.UserInfor, this.onGetUserInfor, this);

          this._eventBus.on(GLOBAL_KEYS.IsInTable, this.onCheckInTable, this);

          this._eventBus.on(GLOBAL_KEYS.Deposit, this.onDeposit, this);
        };

        _proto.onDestroy = function onDestroy() {
          if (this._eventBus) {
            this._eventBus.off(GLOBAL_KEYS.Login, this.onLoginResponse, this);

            this._eventBus.off(GLOBAL_KEYS.Logout, this.onLogoutResponse, this);

            this._eventBus.off(GLOBAL_KEYS.CreateTable, this.onCreateTableResponse, this);

            this._eventBus.off(GLOBAL_KEYS.SearchTable, this.onSearchTableResponse, this);

            this._eventBus.off(GLOBAL_KEYS.JoinTable, this.onJoinTableResponse, this);

            this._eventBus.off(GLOBAL_KEYS.LeaveTable, this.onLeaveTableResponse, this);

            this._eventBus.off(GLOBAL_KEYS.UserInfor, this.onGetUserInfor, this);

            this._eventBus.off(GLOBAL_KEYS.IsInTable, this.onCheckInTable, this);

            this._eventBus.off(GLOBAL_KEYS.Deposit, this.onDeposit, this);
          }
        };

        _proto.login = function login(userName, password) {
          this._gAdapter.login(this._sessionManager.CurrentZone, userName, password);
        };

        _proto.logout = function logout() {
          this._gAdapter.logout(this._sessionManager.CurrentZone); //this._sessionManager.clearZone();

        };

        _proto.searchRoom = function searchRoom(groupId, onJoinRoomSuccess) {
          this._onJoinRoom = onJoinRoomSuccess;

          this._gAdapter.searchRoom(this._sessionManager.CurrentZone, this._sessionManager.CurrentPlugin, groupId);
        };

        _proto.createRoom = function createRoom(groupId, onJoinRoomSuccess) {
          this._onJoinRoom = onJoinRoomSuccess;

          this._gAdapter.createRoom(this._sessionManager.CurrentZone, this._sessionManager.CurrentPlugin, groupId);
        };

        _proto.joinRoomWithNetwork = function joinRoomWithNetwork(roomId, password, onJoinRoom) {
          this._onJoinRoom = onJoinRoom;

          this._gAdapter.joinRoom(this._sessionManager.CurrentZone, roomId, password);
        };

        _proto.joinRoom = function joinRoom(roomId) {
          var _this$_onJoinRoom;

          var roomInfo = {
            roomId: roomId,
            roomName: this._roomName
          };

          this._sessionManager.setRoom(roomInfo);

          (_this$_onJoinRoom = this._onJoinRoom) == null ? void 0 : _this$_onJoinRoom.call(this, JoinRoomType.SUCCESS);
        };

        _proto.leaveRoom = function leaveRoom(onLeaveRoom) {
          this._onLeaveRoom = onLeaveRoom;

          this._gAdapter.leaveRoom(this._sessionManager.CurrentZone, this._sessionManager.CurrentRoom.roomId);
        };

        _proto.deposit = function deposit(amount) {
          this._gAdapter.deposit(this._sessionManager.CurrentZone, this._sessionManager.CurrentPlugin, amount);
        };

        _proto.checkInTable = function checkInTable() {
          // fix later
          this._gAdapter.checkInTable(this._sessionManager.CurrentZone, "POKER");
        };

        _proto.setLeaveRoomCallback = function setLeaveRoomCallback(callback) {
          this._onLeaveRoom = callback;
        } // **************** Event Response ****************
        ;

        _proto.onLoginResponse = function onLoginResponse(data) {
          if (data.success) {
            LogUtils.log("\u2705 Login Success"); // fix later

            this._gAdapter.getUserInfor("POKER", "POKER");
          } else {
            LogUtils.log("\u274C Login Failed");
          }
        };

        _proto.onLogoutResponse = function onLogoutResponse(data) {
          if (data.success) {
            LogUtils.log("\u2705 Logout Success");
            this.loadScene(Define.SceneName.Lobby);
          } else {
            LogUtils.log("\u274C Logout Failed with ReasonId: " + data.reasonId);
          }
        };

        _proto.onGetUserInfor = function onGetUserInfor(data) {
          var userProfile = ServiceLocator.get(Define.Service.UserProfile);
          userProfile.loadUserData(data);
        };

        _proto.onSearchTableResponse = function onSearchTableResponse(data) {
          this._roomName = data.roomInfo.roomName;
          this.joinRoomWithNetwork(data.roomInfo.roomId, "", this._onJoinRoom);
        };

        _proto.onCreateTableResponse = function onCreateTableResponse(data) {
          this._roomName = data.roomInfo.roomName;
          this.joinRoomWithNetwork(data.roomInfo.roomId, "", this._onJoinRoom);
        };

        _proto.onJoinTableResponse = function onJoinTableResponse(data) {
          if (data.success) {
            this.joinRoom(data.roomId);
          } else {
            if (data.message === "Need_password") {
              var _this$_onJoinRoom2;

              (_this$_onJoinRoom2 = this._onJoinRoom) == null ? void 0 : _this$_onJoinRoom2.call(this, JoinRoomType.NEED_PASSWORD);
            } else {
              var _this$_onJoinRoom3;

              (_this$_onJoinRoom3 = this._onJoinRoom) == null ? void 0 : _this$_onJoinRoom3.call(this, JoinRoomType.FAILED);
              console.error("Join room " + data.roomId + " failed");
            }
          }
        };

        _proto.onLeaveTableResponse = function onLeaveTableResponse(data) {
          var _this$_onLeaveRoom;

          (_this$_onLeaveRoom = this._onLeaveRoom) == null ? void 0 : _this$_onLeaveRoom.call(this, data.success);

          if (data.success) {
            if (data.roomId !== this._sessionManager.CurrentRoom.roomId) {
              LogUtils.error("Wrong Room Id");
              return;
            }

            this._sessionManager.clearRoom();
          } else {
            console.error("Can't leave room " + data.roomId + " right now");
          }
        };

        _proto.onCheckInTable = function onCheckInTable(data) {
          var _this2 = this;

          if (data.isInTable) {
            this._sessionManager.setPlugin(data.pluginName);

            this.joinRoomWithNetwork(data.tableId, data.password, function () {
              var roomConfig = ServiceLocator.get(Define.Service.RoomConfig);
              var roomData = roomConfig.getRoomDataByID(data.tableId);

              _this2.loadScene(roomData.GameSceneName);
            });
          } else {
            // fix later
            this.loadScene(DefinePoker.SceneName.LobbyPoker);
          }
        };

        _proto.onDeposit = function onDeposit(data) {
          if (data.resultCode === EResultCode.SUCCESS) {
            var userProfile = ServiceLocator.get(Define.Service.UserProfile);
            userProfile.deposit(data.balance);
          } else {
            console.error("Cant deposit");
          }
        };

        _proto.preloadScene = function preloadScene(sceneName) {
          return new Promise(function (resolve, reject) {
            SceneUtils.preloadScene(sceneName, null, function (isSuccess) {
              resolve(isSuccess);
            });
          });
        };

        _proto.loadScene = function loadScene(sceneName) {
          var _this3 = this;

          this._uiManager.show(EUIGame.Popup_Loading);

          SceneUtils.loadScene(sceneName, function () {
            _this3._uiManager.hide(EUIGame.Popup_Loading);
          });
        };

        _proto.loadSceneWithPreload = /*#__PURE__*/function () {
          var _loadSceneWithPreload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sceneName, preloadTask, actionTask) {
            var _this4 = this;

            var _yield$Promise$all, isPreloadSuccess, isActionSuccess;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all([preloadTask, actionTask]);

                  case 2:
                    _yield$Promise$all = _context.sent;
                    isPreloadSuccess = _yield$Promise$all[0];
                    isActionSuccess = _yield$Promise$all[1];

                    if (isPreloadSuccess && isActionSuccess) {
                      SceneUtils.loadScene(sceneName, function () {
                        _this4._uiManager.hide(EUIGame.Popup_Loading);
                      });
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadSceneWithPreload(_x, _x2, _x3) {
            return _loadSceneWithPreload.apply(this, arguments);
          }

          return loadSceneWithPreload;
        }();

        return GameController;
      }(Component)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEntry.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './INetworkManager.ts', './EUICore.ts', './AsyncUtils.ts', './Define.ts', './SceneUtils.ts', './ServiceLocator.ts', './EAudio.ts', './UISplashScreen.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, WSState, EUICore, AsyncUtils, Define, SceneUtils, ServiceLocator, EMusicId, UISplashScreen, AudioHelper;

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
      WSState = module.WSState;
    }, function (module) {
      EUICore = module.EUICore;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      SceneUtils = module.SceneUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EMusicId = module.EMusicId;
    }, function (module) {
      UISplashScreen = module.UISplashScreen;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "57794J2NYhMipStu4xcyrUf", "GameEntry", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // init all service to play game

      var GameEntry = exports('GameEntry', (_dec = ccclass('GameEntry'), _dec2 = property({
        type: UISplashScreen,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameEntry, _Component);

        function GameEntry() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_uiSplashScreen", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameEntry.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;

            var network, session, audio, pool, uiManager, connectTask, tasks, loadAssetsTask;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return AsyncUtils.waitForNextFrame();

                  case 2:
                    network = ServiceLocator.get(Define.Service.NetworkManager);
                    session = ServiceLocator.get(Define.Service.SessionManager);
                    audio = ServiceLocator.get(Define.Service.AudioManager);
                    pool = ServiceLocator.get(Define.Service.PoolManager);
                    uiManager = ServiceLocator.get(Define.Service.UIManager);
                    session.setZone("POKER");

                    this._uiSplashScreen.init();

                    this._uiSplashScreen.show();

                    connectTask = function connectTask() {
                      return new Promise(function (resolve) {
                        if (network.State === WSState.CONNECTED) {
                          resolve();
                          return;
                        }

                        var onOpen = function onOpen() {
                          network.off(Define.EventBusKey.Socket.Open, onOpen);
                          network.off(Define.EventBusKey.Socket.Close, onClose);
                          resolve();
                        };

                        var onClose = function onClose() {
                          uiManager.showAsync(EUICore.Reconnect);
                        };

                        network.on(Define.EventBusKey.Socket.Open, onOpen);
                        network.on(Define.EventBusKey.Socket.Close, onClose);
                        network.connect();
                      });
                    };

                    tasks = [{
                      id: "Load Audio",
                      description: "Loading Audio",
                      weight: 1,
                      onExecute: function onExecute() {
                        return audio.loadData();
                      }
                    }, {
                      id: "Load Pool",
                      description: "Loading Pool",
                      weight: 1,
                      onExecute: function onExecute() {
                        return pool.loadData();
                      }
                    }, {
                      id: "Load UI",
                      description: "Loading UI",
                      weight: 1,
                      onExecute: function onExecute() {
                        return uiManager.loadData();
                      }
                    }, {
                      id: "Connect Network",
                      description: "Connect Network",
                      weight: 1,
                      onExecute: function onExecute() {
                        return connectTask();
                      }
                    }, {
                      id: "Load Scene",
                      description: "Loading Scene",
                      weight: 1,
                      onExecute: function () {
                        var _onExecute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return new Promise(function (resolve) {
                                    SceneUtils.preloadScene(Define.SceneName.Lobby, null, function () {
                                      return resolve();
                                    });
                                  });

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function onExecute() {
                          return _onExecute.apply(this, arguments);
                        }

                        return onExecute;
                      }()
                    }];
                    loadAssetsTask = new Promise(function (resolve) {
                      _this2._uiSplashScreen.executeTasks(tasks, function () {
                        resolve();
                      });
                    });
                    _context2.next = 15;
                    return loadAssetsTask;

                  case 15:
                    AudioHelper.playMusic(EMusicId.BGM_Lobby);
                    SceneUtils.loadScene(Define.SceneName.Lobby);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }();

        return GameEntry;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_uiSplashScreen", [_dec2], {
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

System.register("chunks:///_virtual/GameUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './Define.ts', './ServiceLocator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseUI, Define, ServiceLocator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "73a886OUSZHeZeDJn6XX38I", "GameUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameUI = exports('GameUI', (_dec = ccclass('GameUI'), _dec(_class = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(GameUI, _BaseUI);

        function GameUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _this.gameController = null;
          return _this;
        }

        var _proto = GameUI.prototype;

        _proto.init = function init() {
          _BaseUI.prototype.init.call(this);

          this.gameController = ServiceLocator.get(Define.Service.GameController);
        };

        return GameUI;
      }(BaseUI)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './LogUtils.ts', './NetworkManager.ts', './BaseAdapter.ts'], function () {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, GLOBAL_KEYS, LogUtils, MESSAGE, BaseAdapter;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      MESSAGE = module.MESSAGE;
    }, function (module) {
      BaseAdapter = module.BaseAdapter;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "92d60V3gLZCKIxjSs4QaqN2", "GlobalAdapter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GlobalAdapter = (_dec = ccclass('GlobalAdapter'), _dec(_class = /*#__PURE__*/function (_BaseAdapter) {
        _inheritsLoose(GlobalAdapter, _BaseAdapter);

        function GlobalAdapter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAdapter.call.apply(_BaseAdapter, [this].concat(args)) || this;

          _this.onLoginResponse = function (data) {
            var loginData = {
              type: data[0],
              success: data[1],
              errorCode: data[2],
              username: data[3],
              zoneName: data[4],
              message: data[5]
            };

            _this.eventBus.emit(GLOBAL_KEYS.Login, loginData);
          };

          _this.onLogoutResponse = function (data) {
            var logoutData = {
              type: data[0],
              success: data[1],
              reasonId: data[2]
            };

            _this.eventBus.emit(GLOBAL_KEYS.Logout, logoutData);
          };

          _this.onLeaveRoomResponse = function (data) {
            var leaveData = {
              type: data[0],
              success: data[1],
              errorCode: data[2],
              roomId: data[3],
              reasonId: data[4]
            };

            _this.eventBus.emit(GLOBAL_KEYS.LeaveTable, leaveData);
          };

          _this.onJoinRoomResponse = function (data) {
            var joinData = {
              type: data[0],
              success: data[1],
              errorCode: data[2],
              roomId: data[3],
              message: data[4]
            };

            _this.eventBus.emit(GLOBAL_KEYS.JoinTable, joinData);
          };

          _this.onPingResponse = function (data) {
            var pingId = data[1];
            var timestamp = data[2];

            _this.eventBus.emit(GLOBAL_KEYS.Ping);
          };

          _this.onUserInforResponse = function (data) {
            var datas = data.datas;

            _this.eventBus.emit(GLOBAL_KEYS.UserInfor, datas);
          };

          _this.onCreateRoomResponse = function (data) {
            var datas = data.datas;

            _this.eventBus.emit(GLOBAL_KEYS.CreateTable, datas);
          };

          _this.onSearchRoom = function (data) {
            var datas = data.datas;

            _this.eventBus.emit(GLOBAL_KEYS.SearchTable, datas);
          };

          _this.onCheckIsInTable = function (data) {
            var datas = data.datas;

            _this.eventBus.emit(GLOBAL_KEYS.IsInTable, datas);
          };

          _this.onDeposit = function (data) {
            var datas = data.datas;

            _this.eventBus.emit(GLOBAL_KEYS.Deposit, datas);
          };

          return _this;
        }

        var _proto = GlobalAdapter.prototype;

        _proto.init = function init() {
          _BaseAdapter.prototype.init.call(this);

          LogUtils.warn("Init Global Adapter");
          this.setEvents();
        };

        _proto.setEvents = function setEvents() {
          this.network.on(GLOBAL_KEYS.Login, this.onLoginResponse);
          this.network.on(GLOBAL_KEYS.Logout, this.onLogoutResponse);
          this.network.on(GLOBAL_KEYS.JoinTable, this.onJoinRoomResponse);
          this.network.on(GLOBAL_KEYS.LeaveTable, this.onLeaveRoomResponse);
          this.network.on(GLOBAL_KEYS.Ping, this.onPingResponse);
          this.network.on(GLOBAL_KEYS.CreateTable, this.onCreateRoomResponse);
          this.network.on(GLOBAL_KEYS.SearchTable, this.onSearchRoom);
          this.network.on(GLOBAL_KEYS.UserInfor, this.onUserInforResponse);
          this.network.on(GLOBAL_KEYS.IsInTable, this.onCheckIsInTable);
          this.network.on(GLOBAL_KEYS.Deposit, this.onDeposit);
        };

        _proto.onDestroy = function onDestroy() {
          if (!this.network) return;
          this.network.off(GLOBAL_KEYS.Login, this.onLoginResponse);
          this.network.off(GLOBAL_KEYS.Logout, this.onLogoutResponse);
          this.network.off(GLOBAL_KEYS.JoinTable, this.onJoinRoomResponse);
          this.network.off(GLOBAL_KEYS.LeaveTable, this.onLeaveRoomResponse);
          this.network.off(GLOBAL_KEYS.Ping, this.onPingResponse);
          this.network.off(GLOBAL_KEYS.CreateTable, this.onCreateRoomResponse);
          this.network.off(GLOBAL_KEYS.SearchTable, this.onSearchRoom);
          this.network.off(GLOBAL_KEYS.UserInfor, this.onUserInforResponse);
          this.network.off(GLOBAL_KEYS.IsInTable, this.onCheckIsInTable);
          this.network.off(GLOBAL_KEYS.Deposit, this.onDeposit);
        } // client to server
        ;

        _proto.login = function login(zoneName, username, password) {
          this.network.send([MESSAGE.LOGIN, zoneName, username, password, {}]);
        };

        _proto.logout = function logout(zoneName) {
          this.network.send([MESSAGE.LOGOUT, zoneName]);
        };

        _proto.getUserInfor = function getUserInfor(zoneName, pluginName) {
          var message = {
            action: "user_infor",
            requestId: this.getRandomRequestId(),
            payload: {}
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        };

        _proto.searchRoom = function searchRoom(zoneName, pluginName, groupId) {
          var payloadData = {
            groupId: groupId
          };
          var message = {
            action: "search_room",
            requestId: this.getRandomRequestId(),
            payload: payloadData
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        };

        _proto.createRoom = function createRoom(zoneName, pluginName, groupId) {
          var payloadData = {
            groupId: groupId
          };
          var message = {
            action: "create_room",
            requestId: this.getRandomRequestId(),
            payload: payloadData
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        };

        _proto.joinRoom = function joinRoom(zoneName, roomId, password) {
          this.network.send([MESSAGE.JOIN_ROOM, zoneName, roomId, password]);
        };

        _proto.leaveRoom = function leaveRoom(zoneName, roomId) {
          this.network.send([MESSAGE.LEAVE_ROOM, zoneName, roomId]);
        };

        _proto.ping = function ping(zoneName, pingId) {
          var currentSeconds = Math.floor(Date.now() / 1000);
          this.network.send([MESSAGE.PING, zoneName, pingId, currentSeconds]);
        };

        _proto.deposit = function deposit(zoneName, pluginName, amount) {
          var payloadData = {
            amount: amount
          };
          var message = {
            action: "deposit",
            requestId: this.getRandomRequestId(),
            payload: payloadData
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        };

        _proto.checkInTable = function checkInTable(zoneName, pluginName) {
          var message = {
            action: "is_in_table",
            requestId: this.getRandomRequestId(),
            payload: {}
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        } //server to client
        ;

        return GlobalAdapter;
      }(BaseAdapter)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HandRank.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('HandRank', void 0);

      cclegacy._RF.push({}, "84d23yAP4pFTqMgoMPzFrh2", "HandRank", undefined);

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

System.register("chunks:///_virtual/IBaseAdapter.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9ce4dlAHFdIWZymT6SomFBX", "IBaseAdapter", undefined);

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

System.register("chunks:///_virtual/IEventBus.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b407a0AHm1GmouUyNC8Fyp4", "IEventBus", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameController.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('JoinRoomType', void 0);

      cclegacy._RF.push({}, "71487zJQllJF4OFtvmFKZVO", "IGameController", undefined);

      var JoinRoomType;

      (function (JoinRoomType) {
        JoinRoomType[JoinRoomType["SUCCESS"] = 0] = "SUCCESS";
        JoinRoomType[JoinRoomType["NEED_PASSWORD"] = 1] = "NEED_PASSWORD";
        JoinRoomType[JoinRoomType["FAILED"] = 2] = "FAILED";
      })(JoinRoomType || (JoinRoomType = exports('JoinRoomType', {})));

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

System.register("chunks:///_virtual/IGlobalAdapter.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b824dQf709LOJ7vzT2+GgnY", "IGlobalAdapter", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IImageCache.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "113745uRh9EhpB/caAArhoO", "IImageCache", undefined);

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

System.register("chunks:///_virtual/ILoginController.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a53cyQfYpN8Yl8Kvha9uO7", "ILoginController", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ImageCacheManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DowloadHandler.ts', './LogUtils.ts'], function () {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, DowloadHandler, LogUtils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      LogUtils = module.LogUtils;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fd06cQjEw1A4IO6oSBxNX+z", "ImageCacheManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ImageCacheManager = (_dec = ccclass('ImageCacheManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ImageCacheManager, _Component);

        function ImageCacheManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._cache = new Map();
          _this._pending = new Map();
          return _this;
        }

        var _proto = ImageCacheManager.prototype;

        _proto.init = function init() {};

        _proto.loadSprite = /*#__PURE__*/function () {
          var _loadSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
            var sprite, task, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (url) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 2:
                    if (!this._cache.has(url)) {
                      _context.next = 9;
                      break;
                    }

                    sprite = this._cache.get(url);

                    if (!(sprite && sprite.texture && sprite.texture.isValid)) {
                      _context.next = 8;
                      break;
                    }

                    return _context.abrupt("return", sprite);

                  case 8:
                    this._cache["delete"](url);

                  case 9:
                    if (!this._pending.has(url)) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("return", this._pending.get(url));

                  case 11:
                    task = this._executeDownload(url);

                    this._pending.set(url, task);

                    _context.next = 15;
                    return task;

                  case 15:
                    result = _context.sent;

                    this._pending["delete"](url);

                    return _context.abrupt("return", result);

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadSprite(_x) {
            return _loadSprite.apply(this, arguments);
          }

          return loadSprite;
        }();

        _proto.preloadSprites = /*#__PURE__*/function () {
          var _preloadSprites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(urls) {
            var _this2 = this;

            var uniqueUrls, tasks;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    uniqueUrls = [].concat(new Set(urls)).filter(function (url) {
                      return url && url.length > 0;
                    });
                    LogUtils.log("\uD83D\uDE80 B\u1EAFt \u0111\u1EA7u preload " + uniqueUrls.length + " avatars...");
                    tasks = uniqueUrls.map(function (url) {
                      return _this2.loadSprite(url);
                    });
                    _context2.next = 5;
                    return Promise.all(tasks);

                  case 5:
                    LogUtils.log("✅ Preload hoàn tất!");

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function preloadSprites(_x2) {
            return _preloadSprites.apply(this, arguments);
          }

          return preloadSprites;
        }();

        _proto._executeDownload = /*#__PURE__*/function () {
          var _executeDownload2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
            var sprite;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return DowloadHandler.GetImageByUrl(url);

                  case 2:
                    sprite = _context3.sent;

                    if (!sprite) {
                      _context3.next = 7;
                      break;
                    }

                    sprite.addRef();

                    this._cache.set(url, sprite);

                    return _context3.abrupt("return", sprite);

                  case 7:
                    return _context3.abrupt("return", null);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function _executeDownload(_x3) {
            return _executeDownload2.apply(this, arguments);
          }

          return _executeDownload;
        }();

        _proto.clearCache = function clearCache() {
          this._cache.forEach(function (sprite) {
            if (sprite && sprite.isValid) {
              sprite.decRef();
            }
          });

          this._cache.clear();

          this._pending.clear();
        };

        return ImageCacheManager;
      }(Component)) || _class);

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

System.register("chunks:///_virtual/IMinigameUIManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "581ccqjVrZI+pvdtRysqznZ", "IMinigameUIManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/INetworkController.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5332aVzEy1AGJFsk2qu6xsc", "INetworkController", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/INetworkManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('WSState', void 0);

      cclegacy._RF.push({}, "0df65lXV09KB5zWe90C+xD1", "INetworkManager", undefined);

      var WSState;

      (function (WSState) {
        WSState[WSState["DISCONNECTED"] = 0] = "DISCONNECTED";
        WSState[WSState["CONNECTING"] = 1] = "CONNECTING";
        WSState[WSState["CONNECTED"] = 2] = "CONNECTED";
      })(WSState || (WSState = exports('WSState', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './AsyncUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, BaseUI, AsyncUtils, ServiceLocator, Define;

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
      BaseUI = module.BaseUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "d540eL5wBpN/YEF8+ENr6Xd", "InitUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      var InitUI = exports('InitUI', (_dec = ccclass('InitUI'), _dec2 = executionOrder(-99), _dec3 = property({
        type: [BaseUI],
        visible: true
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InitUI, _Component);

        function InitUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._uimanager = null;
          _this._regisUIs = [];

          _initializerDefineProperty(_this, "_activeUIs", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = InitUI.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var childs;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._uimanager = ServiceLocator.get(Define.Service.UIManager);
                    childs = this.node.children;
                    childs.forEach(function (child) {
                      var ui = child.getComponent(BaseUI);

                      if (ui) {
                        _this2._regisUIs.push(ui);

                        ui.init();
                      }
                    });

                    this._regisUIs.forEach(function (ui) {
                      _this2._uimanager.register(ui.node.name, ui);
                    });

                    _context.next = 6;
                    return AsyncUtils.waitForNextFrame();

                  case 6:
                    this._activeUIs.forEach(function (ui) {
                      return ui.show();
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.onDestroy = function onDestroy() {
          var _this3 = this;

          this._regisUIs.forEach(function (ui) {
            _this3._uimanager.unregister(ui.node.name);

            ui.node.destroy();
          });
        };

        return InitUI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_activeUIs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPokerAdapter.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c2e99MGXlhPmq2N8KevJXaJ", "IPokerAdapter", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPokerController.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "47d04n9v9ZKT7UuQNmMJoGE", "IPokerController", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPokerLobbyAdapter.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "71114gv1oRDtL55Gg990nxG", "IPokerLobbyAdapter", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPokerLobbyController.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d59eSUeodD3L0IwV481RzZ", "IPokerLobbyController", undefined);

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

System.register("chunks:///_virtual/ISessionManager.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a4a6loxKlMQaAescYpoZko", "ISessionManager", undefined);

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

System.register("chunks:///_virtual/JsonUtils.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogUtils = module.LogUtils;
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
            LogUtils.warn("\u26A0\uFE0F [JsonUtils] JSON parse error: " + err);
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
            LogUtils.warn("\u26A0\uFE0F [JsonUtils] JSON stringify error: " + err);
            return null;
          }
        };

        return JsonUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadTableInforBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './TableManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, TableManager;

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
          var tableManager = this.gameplayManager.getMiniManager(TableManager); //pokerUIManager.get(PokerTableUI).table = tableManager.Table;

          this.endBehaviour();
        };

        return LoadTableInforBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadUserInforBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
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

        _proto.startBehaviour = function startBehaviour() {// const userManager = this.gameplayManager.getMiniManager(UserManager);
          // const pokerUIManager = this.gameplayManager.getUI();
          // const userInforUI = pokerUIManager.get(UserInforUI);
          // const userList = userManager.activeUsers;
          // const panelList = userInforUI.getPanels(userManager.activeUsers.length);
          // for (let i = 0; i < userManager.activeUsers.length; i++) {
          //     const user = userList[i];
          //     const panel = panelList[i];
          //     panel.user = user;
          //     //panel.setEvents();
          // }
          // this.endBehaviour();
        };

        return LoadUserInforBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts', './PlayerPrefs.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, LogUtils, PlayerPrefs, ServiceLocator, Define, GLOBAL_KEYS;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      PlayerPrefs = module.PlayerPrefs;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "eff9eaG3TBJi6s85vUyg6XK", "LoginController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginController = exports('LoginController', (_dec = ccclass('LoginController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginController, _Component);

        function LoginController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._gameController = null;
          _this._eventBus = null;
          _this._onCheckShowPopup = void 0;
          _this.USERNAME_KEY = "username";
          _this.PASSWORD_KEY = "password";
          _this.REMEMBER_ME = "remember_me";
          return _this;
        }

        var _proto = LoginController.prototype;

        _proto.init = function init() {
          this._gameController = ServiceLocator.get(Define.Service.GameController);
          this._eventBus = ServiceLocator.get(Define.Service.EventBus);
        };

        _proto.start = function start() {
          this._eventBus.on(GLOBAL_KEYS.Login, this.onLoginResponse, this);

          this._eventBus.on(GLOBAL_KEYS.Logout, this.onLogoutResponse, this);
        };

        _proto.onDestroy = function onDestroy() {
          this._eventBus.off(GLOBAL_KEYS.Login, this.onLoginResponse, this);

          this._eventBus.off(GLOBAL_KEYS.Logout, this.onLogoutResponse, this);
        };

        _proto.login = function login(username, password) {
          this._gameController.login(username, password);

          if (this.getRemember()) {
            PlayerPrefs.setString(this.USERNAME_KEY, username);
            PlayerPrefs.setString(this.PASSWORD_KEY, password);
          }
        };

        _proto.checkAutoLogin = function checkAutoLogin(onCheckShowPopup) {
          this._onCheckShowPopup = onCheckShowPopup;

          if (PlayerPrefs.hasKey(this.REMEMBER_ME) && PlayerPrefs.getBool(this.REMEMBER_ME) && PlayerPrefs.hasKey(this.USERNAME_KEY) && PlayerPrefs.hasKey(this.PASSWORD_KEY)) {
            this.login(PlayerPrefs.getString(this.USERNAME_KEY), PlayerPrefs.getString(this.PASSWORD_KEY));
          } else {
            var _this$_onCheckShowPop;

            (_this$_onCheckShowPop = this._onCheckShowPopup) == null ? void 0 : _this$_onCheckShowPop.call(this, true);
          }
        };

        _proto.setRemember = function setRemember(canRemember) {
          PlayerPrefs.setBool(this.REMEMBER_ME, canRemember);
        };

        _proto.getRemember = function getRemember() {
          return PlayerPrefs.hasKey(this.REMEMBER_ME) && PlayerPrefs.getBool(this.REMEMBER_ME);
        };

        _proto.onLoginResponse = function onLoginResponse(data) {
          if (data.success) {
            if (data.success) {
              var _this$_onCheckShowPop2;

              (_this$_onCheckShowPop2 = this._onCheckShowPopup) == null ? void 0 : _this$_onCheckShowPop2.call(this, false);

              this._gameController.checkInTable();
            } else {
              var _this$_onCheckShowPop3;

              (_this$_onCheckShowPop3 = this._onCheckShowPopup) == null ? void 0 : _this$_onCheckShowPop3.call(this, true);
            }
          } else {
            var _this$_onCheckShowPop4;

            (_this$_onCheckShowPop4 = this._onCheckShowPopup) == null ? void 0 : _this$_onCheckShowPop4.call(this, true);
          }
        };

        _proto.onLogoutResponse = function onLogoutResponse(data) {
          if (data.success) {
            PlayerPrefs.deleteKey(this.REMEMBER_ME);
            PlayerPrefs.deleteKey(this.USERNAME_KEY);
            PlayerPrefs.deleteKey(this.PASSWORD_KEY);
          } else {
            LogUtils.log("\u274C Logout Failed with ReasonId: " + data.reasonId);
          }
        };

        return LoginController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogUtils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "97d2c3nZ75GUJpgvE/unAQ/", "LogUtils", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LogUtils = exports('LogUtils', (_dec = ccclass('LogUtils'), _dec(_class = /*#__PURE__*/function () {
        function LogUtils() {}

        LogUtils.log = function log() {
          var _console;

          (_console = console).log.apply(_console, arguments);
        };

        LogUtils.warn = function warn() {
          var _console2;

          (_console2 = console).warn.apply(_console2, arguments);
        };

        LogUtils.error = function error() {
          var _console3;

          (_console3 = console).error.apply(_console3, arguments);
        };

        return LogUtils;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AudioManager.ts', './AudioPlaying.ts', './IAudioManager.ts', './EventBus.ts', './IEventBus.ts', './IImageCache.ts', './ImageCacheManager.ts', './BaseLoader.ts', './INetworkController.ts', './INetworkManager.ts', './BaseAdapter.ts', './GlobalAdapter.ts', './IBaseAdapter.ts', './IGlobalAdapter.ts', './NetworkController.ts', './NetworkManager.ts', './array_buff.ts', './IPoolManager.ts', './PoolManager.ts', './ISessionManager.ts', './SessionManager.ts', './BaseAnimation.ts', './Drag.ts', './ETween.ts', './Fade.ts', './ITween.ts', './Rotating.ts', './Scaling.ts', './Translate.ts', './BaseUI.ts', './EUICore.ts', './IUIManager.ts', './BasePopup.ts', './UIManager.ts', './IUserProfile.ts', './UserData.ts', './UserProfile.ts', './AsyncUtils.ts', './ButtonUtils.ts', './Define.ts', './DontDestroy.ts', './DowloadHandler.ts', './EnumUtils.ts', './JsonUtils.ts', './LogUtils.ts', './MathUtils.ts', './PlayerPrefs.ts', './PositionUtils.ts', './ResourcesUtils.ts', './SceneUtils.ts', './ServiceInstaller.ts', './ServiceLocator.ts', './Timer.ts', './ToggleUtils.ts', './Tweener.ts', './VirtualScrollView.ts', './CardControl.ts', './CardController.ts', './CardInfor.ts', './CardAssetLoader.ts', './CardLibrary.ts', './CardTableUI.ts', './CardUserPanel.ts', './CardView.ts', './UICardLayer.ts', './UIChipLayer.ts', './ActionAfterInit.ts', './IMinigameAudio.ts', './MinigameAudio.ts', './ChipEffect.ts', './ChipGroup.ts', './FloatingObject.ts', './FloatingText.ts', './RotateObject.ts', './EAudio.ts', './EPoolType.ts', './EResultCode.ts', './GameEntry.ts', './ChipAssetLoader.ts', './ChipLibrary.ts', './GameController.ts', './IGameController.ts', './ILoginController.ts', './LoginController.ts', './ServiceInitializer.ts', './EUIGame.ts', './GameUI.ts', './InitUI.ts', './BaseUserInforPanel.ts', './IMinigameUIManager.ts', './MiniUI.ts', './MinigameUIManager.ts', './UserInforUI.ts', './UILoading.ts', './UINoInternet.ts', './UIPopup.ts', './UIReconnect.ts', './PopupBase.ts', './UILoginPopup.ts', './UISplashScreen.ts', './AudioHelper.ts', './PoolHelper.ts', './Card.ts', './pokerData.ts', './EPhases.ts', './EUserOptions.ts', './HandRank.ts', './GameConfig.ts', './EDealer.ts', './ERole.ts', './EWheel.ts', './IPokerAdapter.ts', './IPokerLobbyAdapter.ts', './IBetable.ts', './ICardReceiver.ts', './IGameplayManager.ts', './IInitable.ts', './IPokerController.ts', './IPokerLobbyController.ts', './IPokerUIManager.ts', './IResetable.ts', './ISetGameplayManager.ts', './IUserManager.ts', './MiniGame.ts', './BetManager.ts', './DeckManager.ts', './GameplayHandler.ts', './BasePokerControl.ts', './PlayerDataControl.ts', './UIEffectControl.ts', './PokerController.ts', './PokerLobbyController.ts', './PhaseManager.ts', './PokerGameplayManager.ts', './TableManager.ts', './RoleAssigner.ts', './BigBlind.ts', './Dealer.ts', './SmallBlind.ts', './UserRole.ts', './TurnHandler.ts', './UserManager.ts', './PokerManager.ts', './PokerCheat.ts', './ILeaderboardModel.ts', './PokerAdapter.ts', './PokerLobbyAdapter.ts', './BasePhase.ts', './AssignBlindsBehaviour.ts', './AssignDealerBehaviour.ts', './BaseBehaviour.ts', './BetBehaviour.ts', './BlindBetBehaviour.ts', './CheckFoldBehaviour.ts', './CheckHandRankBehaviour.ts', './CheckPotBehaviour.ts', './CreateDeckBehaviour.ts', './DealCardOnTableBehaviour.ts', './DealCardToUserBehaviour.ts', './LoadTableInforBehaviour.ts', './LoadUserInforBehaviour.ts', './MoveChipToPotBehaviour.ts', './OpenTableInferfaceBehaviour.ts', './OpenUserInterfaceBehaviour.ts', './SetStartTurnBehaviour.ts', './SetTableBetBehaviour.ts', './ShowhandBehaviour.ts', './ShuffleBehaviour.ts', './CheckUserAllInBehaviour.ts', './ConditionBehaviour.ts', './SkipBehaviour.ts', './WaitForSecondsBehaviour.ts', './WinPotBehaviour.ts', './RoomConfig.ts', './Pot.ts', './Table.ts', './PokerDepositLayer.ts', './PokerTableUI.ts', './PokerUIManager.ts', './UIDealer.ts', './UIPlayerCard.ts', './UIWheel.ts', './UICheatHub.ts', './UIDeposit.ts', './UIGamemenu.ts', './UIJoinRoom.ts', './UILeaderboard.ts', './UINeedPassword.ts', './UIRebuyin.ts', './UISetting.ts', './UITutorial.ts', './UIUserProfile.ts', './UIBackScreen.ts', './UIMainmenu.ts', './UITestNetwork.ts', './PokerInforPanel.ts', './UserHUD.ts', './UserHandRankUI.ts', './UserNotiOption.ts', './UserOptionsPanel.ts', './UserRaisePanel.ts', './PokerUser.ts', './UserCurrency.ts', './CheckHandRank.ts', './DefinePoker.ts', './PokerSimpleAI.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
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

System.register("chunks:///_virtual/MiniGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "3f872sDl1ZFkpiFWYcYuUE6", "MiniGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MiniGame = exports('MiniGame', (_dec = ccclass('MiniGame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniGame, _Component);

        function MiniGame() {
          return _Component.apply(this, arguments) || this;
        }

        return MiniGame;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinigameAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioHelper.ts'], function () {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, AudioHelper;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "bb5851OZaBIaLSZLlnBrq4O", "MinigameAudio", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MinigameAudio = (_dec = ccclass('MinigameAudio'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MinigameAudio, _Component);

        function MinigameAudio() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._audioMinigameSet = new Set();
          return _this;
        }

        var _proto = MinigameAudio.prototype;

        _proto.init = function init() {};

        _proto.onDestroy = function onDestroy() {
          this._audioMinigameSet.forEach(function (a) {
            return AudioHelper.stopSFX(a);
          });
        };

        _proto.playSFX = function playSFX(id, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }

          AudioHelper.playSFX(id, isLoop);

          this._audioMinigameSet.add(id);
        };

        return MinigameAudio;
      }(Component)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinigameUIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './MiniUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, BaseUI, MiniUI;

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
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      MiniUI = module.MiniUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "30facfmYKZFy4oFcDPMs97h", "MinigameUIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MinigameUIManager = exports('MinigameUIManager', (_dec = ccclass('MinigameUIManager'), _dec2 = property({
        type: MiniUI,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(MinigameUIManager, _BaseUI);

        function MinigameUIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_baseUIs", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MinigameUIManager.prototype;

        _proto.init = function init() {
          this._baseUIs.forEach(function (ui) {
            ui.init();
            ui.resetState();
          });

          this._baseUIs.forEach(function (ui) {
            ui.hide();
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

        return MinigameUIManager;
      }(BaseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_baseUIs", [_dec2], {
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

System.register("chunks:///_virtual/MiniUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, GameUI, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8a444Ow4oBI8I4raMt9Cq5b", "MiniUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MiniUI = exports('MiniUI', (_dec = ccclass('MiniUI'), _dec(_class = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(MiniUI, _GameUI);

        function MiniUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;
          _this.miniAudio = null;
          return _this;
        }

        var _proto = MiniUI.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          this.miniAudio = ServiceLocator.get(Define.Service.MinigameAudio);
        };

        return MiniUI;
      }(GameUI)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveChipToPotBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './AsyncUtils.ts', './PokerTableUI.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, AsyncUtils, PokerTableUI, UserInforUI;

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
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6036adg0lpMbqWd+jm7H/5q", "MoveChipToPotBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MoveChipToPotBehaviour = exports('MoveChipToPotBehaviour', (_dec = ccclass('MoveChipToPotBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(MoveChipToPotBehaviour, _BaseBehaviour);

        function MoveChipToPotBehaviour() {
          return _BaseBehaviour.apply(this, arguments) || this;
        }

        var _proto = MoveChipToPotBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseBehaviour.prototype.startBehaviour.call(this);

                    this.onUpdateBetPotUI();
                    _context.next = 4;
                    return AsyncUtils.waitForSeconds(this.config.TimeChipMoveToPot);

                  case 4:
                    this.endBehaviour();

                  case 5:
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

        _proto.onUpdateBetPotUI = function onUpdateBetPotUI() {
          var uiInforUI = this.gameplayManager.getUI().get(UserInforUI); // uiInforUI.getPanels(uiInforUI.getPanelsLength()).forEach((panel) => {
          //     panel.onShowBetPot(false);
          //     if (panel.CurrentBet > 0) {
          //         this.onPlayChipAnimation(panel, panel.CurrentBet);
          //         panel.setCurrentBet(0);
          //     }
          // });
        };

        _proto.onPlayChipAnimation = function onPlayChipAnimation(panel, betValue) {
          var tableUI = this.gameplayManager.getUI().get(PokerTableUI); // tableUI.doChipEffect(
          //     betValue,
          //     panel.node.worldPosition,
          //     tableUI.totalPotNode.worldPosition,
          //     this.config.TimeChipMoveToPot,
          //     () => {
          //         tableUI.onUpdateTotalPot(this.gameplayManager.getMiniManager(BetManager).totalBet);
          //     }
          // );
        };

        return MoveChipToPotBehaviour;
      }(BaseBehaviour)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Timer.ts', './Define.ts', './ServiceLocator.ts', './EUICore.ts', './INetworkManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, Timer, Define, GLOBAL_KEYS, ServiceLocator, EUICore, WSState;

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
      Component = module.Component;
    }, function (module) {
      Timer = module.Timer;
    }, function (module) {
      Define = module.Define;
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EUICore = module.EUICore;
    }, function (module) {
      WSState = module.WSState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "da392exAChNFJ6B5C7RigyP", "NetworkController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var NetworkController = exports('NetworkController', (_dec = ccclass('NetworkController'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        visible: true
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetworkController, _Component);

        function NetworkController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._network = null;
          _this._gAdapter = null;
          _this._session = null;
          _this._eventBus = null;
          _this._uiManager = null;

          _initializerDefineProperty(_this, "_heartbeatDelayTime", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_connectMaximumTime", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_reconnectDelay", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_reconnectMaxCount", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_wsNoResponseWait", _descriptor5, _assertThisInitialized(_this));

          _this._wsNoResponseTimer = new Timer("WSNoresponse Timer");
          _this._watingTimer = new Timer("Wating Timer");
          _this._heartbeatTimer = new Timer("Heartbeat Timer");
          _this._reconnectTimer = new Timer("Reconnect Timer");
          _this._isSocketOpen = false;
          _this._reconnectAttemp = 0;

          _this.onSocketStartConnect = function () {
            _this._wsNoResponseTimer.start(_this._wsNoResponseWait, null, function () {
              if (_this._network.State !== WSState.CONNECTING) return;

              _this._network.forceClose();
            });
          };

          _this.onSocketOpen = function () {
            _this._isSocketOpen = true;

            _this.onWaitingHeartBeat();

            _this._reconnectAttemp = 0;

            _this._reconnectTimer.stop();

            _this._wsNoResponseTimer.stop();

            _this._uiManager.hide(EUICore.Reconnect);

            _this._uiManager.hide(EUICore.NoInternet);
          };

          _this.onSocketClose = function () {
            if (!_this._isSocketOpen && _this._reconnectTimer.isRunning()) return;
            _this._isSocketOpen = false;

            _this._watingTimer.stop();

            _this._heartbeatTimer.stop();

            _this._wsNoResponseTimer.stop();

            _this.onReconnect();
          };

          _this.onSocketActive = function () {
            _this.onWaitingHeartBeat();
          };

          return _this;
        }

        var _proto = NetworkController.prototype;

        _proto.init = function init() {
          this._network = ServiceLocator.get(Define.Service.NetworkManager);
          this._gAdapter = ServiceLocator.get(Define.Service.Adapter.Global);
          this._session = ServiceLocator.get(Define.Service.SessionManager);
          this._eventBus = ServiceLocator.get(Define.Service.EventBus);
          this._uiManager = ServiceLocator.get(Define.Service.UIManager);

          this._network.on(Define.EventBusKey.Socket.Open, this.onSocketOpen);

          this._network.on(Define.EventBusKey.Socket.Close, this.onSocketClose);

          this._network.on(Define.EventBusKey.Socket.Active, this.onSocketActive);

          this._network.on(Define.EventBusKey.Socket.StartConnect, this.onSocketStartConnect);

          this._eventBus.on(GLOBAL_KEYS.Ping, this.onPongResponse, this);
        };

        _proto.onDestroy = function onDestroy() {
          if (this._network) {
            this._network.off(Define.EventBusKey.Socket.Open, this.onSocketOpen);

            this._network.off(Define.EventBusKey.Socket.Close, this.onSocketClose);

            this._network.off(Define.EventBusKey.Socket.Active, this.onSocketActive);

            this._network.off(Define.EventBusKey.Socket.StartConnect, this.onSocketStartConnect);
          }

          if (this._eventBus) {
            this._eventBus.off(GLOBAL_KEYS.Ping, this.onPongResponse, this);
          }
        };

        _proto.connect = function connect() {
          this._uiManager.showAsync(EUICore.Reconnect);

          this._network.connect();
        };

        _proto.ping = function ping() {
          this._gAdapter.ping(this._session.CurrentZone, 1);
        };

        _proto.onWaitingHeartBeat = function onWaitingHeartBeat() {
          var _this2 = this;

          this._watingTimer.start(this._heartbeatDelayTime, null, function () {
            return _this2.onActiveHeartbeat();
          });
        };

        _proto.onActiveHeartbeat = function onActiveHeartbeat() {
          var _this3 = this;

          this.ping();

          this._heartbeatTimer.start(this._connectMaximumTime, null, function () {
            _this3._network.forceClose();

            _this3.connect();
          });
        };

        _proto.onPongResponse = function onPongResponse() {
          this._heartbeatTimer.stop();

          this.onWaitingHeartBeat();
        };

        _proto.onReconnect = function onReconnect() {
          var _this4 = this;

          if (this._reconnectAttemp >= this._reconnectMaxCount) {
            this._reconnectAttemp = 0;

            this._uiManager.hide(EUICore.Reconnect);

            this._uiManager.showAsync(EUICore.NoInternet);

            return;
          }

          this._reconnectTimer.start(this._reconnectDelay, null, function () {
            _this4._reconnectAttemp++;

            _this4._network.connect();
          });
        };

        _createClass(NetworkController, [{
          key: "ReconnectTimer",
          get: function get() {
            return this._reconnectTimer;
          }
        }]);

        return NetworkController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_heartbeatDelayTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_connectMaximumTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_reconnectDelay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_reconnectMaxCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_wsNoResponseWait", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './LogUtils.ts', './INetworkManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, Define, GLOBAL_KEYS, LogUtils, WSState;

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
      Component = module.Component;
    }, function (module) {
      Define = module.Define;
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      WSState = module.WSState;
    }],
    execute: function () {
      exports({
        MESSAGE: void 0,
        RESPONSE: void 0
      });

      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "27be25o0jVGc4Lzh7iIemny", "NetworkManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MESSAGE;

      (function (MESSAGE) {
        MESSAGE[MESSAGE["LOGIN"] = 1] = "LOGIN";
        MESSAGE[MESSAGE["LOGOUT"] = 2] = "LOGOUT";
        MESSAGE[MESSAGE["JOIN_ROOM"] = 3] = "JOIN_ROOM";
        MESSAGE[MESSAGE["LEAVE_ROOM"] = 4] = "LEAVE_ROOM";
        MESSAGE[MESSAGE["ROOM_PLUGIN"] = 5] = "ROOM_PLUGIN";
        MESSAGE[MESSAGE["ZONE_PLUGIN"] = 6] = "ZONE_PLUGIN";
        MESSAGE[MESSAGE["PING"] = 7] = "PING";
      })(MESSAGE || (MESSAGE = exports('MESSAGE', {})));

      var RESPONSE;

      (function (RESPONSE) {
        RESPONSE[RESPONSE["LOGIN"] = 1] = "LOGIN";
        RESPONSE[RESPONSE["LOGOUT"] = 2] = "LOGOUT";
        RESPONSE[RESPONSE["JOIN_ROOM"] = 3] = "JOIN_ROOM";
        RESPONSE[RESPONSE["LEAVE_ROOM"] = 4] = "LEAVE_ROOM";
        RESPONSE[RESPONSE["EXTENSION"] = 5] = "EXTENSION";
        RESPONSE[RESPONSE["PING"] = 6] = "PING";
      })(RESPONSE || (RESPONSE = exports('RESPONSE', {})));

      var NetworkManager = (_dec = ccclass('NetworkManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          return _this;
        }

        var _proto = NetworkManager.prototype;

        _proto.init = function init() {};

        _proto.connect = function connect() {
          var _this2 = this;

          this._socket = new WebSocket(this.serverURL);
          LogUtils.log("🌀 WS Connecting");
          this._state = WSState.CONNECTING;
          this.emit(Define.EventBusKey.Socket.StartConnect);

          this._socket.onopen = function () {
            LogUtils.log("✅ WS Connected");
            _this2._state = WSState.CONNECTED;

            _this2.emit(Define.EventBusKey.Socket.Open);
          };

          this._socket.onclose = function () {
            LogUtils.warn("❌ WS Closed");
            _this2._state = WSState.DISCONNECTED;

            _this2.emit(Define.EventBusKey.Socket.Close);
          };

          this._socket.onerror = function (e) {
            LogUtils.error("❌ WS Error", e);

            _this2.emit("error", e);
          };

          this._socket.onmessage = function (msg) {
            _this2.handleMessage(msg.data);
          };
        };

        _proto.handleMessage = function handleMessage(raw) {
          this.emit(Define.EventBusKey.Socket.Active);
          var data;

          try {
            data = JSON.parse(raw);
          } catch (_unused) {
            return;
          } // just log


          var logTag = RESPONSE[data[0]];

          if (data[0] === RESPONSE.EXTENSION && data[1] && data[1].action) {
            logTag += " \u27A4 " + data[1].action;
          }

          LogUtils.log("\u2B07\uFE0F Server [" + logTag + "]", JSON.stringify(data, null, 3));
          var opcode = data[0];

          switch (opcode) {
            case RESPONSE.LOGIN:
              this.emit(GLOBAL_KEYS.Login, data);
              break;

            case RESPONSE.LOGOUT:
              this.emit(GLOBAL_KEYS.Logout, data);
              break;

            case RESPONSE.JOIN_ROOM:
              this.emit(GLOBAL_KEYS.JoinTable, data);
              break;

            case RESPONSE.LEAVE_ROOM:
              this.emit(GLOBAL_KEYS.LeaveTable, data);
              break;

            case RESPONSE.EXTENSION:
              var datas = data[1];
              this.emit(datas.action, datas);
              break;

            case RESPONSE.PING:
              this.emit(GLOBAL_KEYS.Ping, data);
              break;
          }
        };

        _proto.forceClose = function forceClose() {
          this._socket.close();
        };

        _proto.send = function send(arr) {
          if (!this._socket || this._state !== WSState.CONNECTED) return; //this.emit(Define.EventBusKey.Socket.Active);

          var packet = JSON.stringify(arr);
          LogUtils.log("\u2B06\uFE0F Client [" + MESSAGE[arr[0]] + "]: ", arr);

          this._socket.send(packet);
        };

        _proto.on = function on(event, cb) {
          if (!this._listeners.has(event)) {
            this._listeners.set(event, []);
          }

          this._listeners.get(event).push(cb);
        };

        _proto.off = function off(event, cb) {
          if (!this._listeners.has(event)) return;

          var listeners = this._listeners.get(event);

          var index = listeners.indexOf(cb);

          if (index !== -1) {
            listeners.splice(index, 1);
          }

          if (listeners.length === 0) {
            this._listeners["delete"](event);
          }
        };

        _proto.offAll = function offAll(event) {
          if (this._listeners.has(event)) {
            this._listeners["delete"](event);
          }
        };

        _proto.emit = function emit(event, data) {
          if (!this._listeners.has(event)) return;
          var callbacks = [].concat(this._listeners.get(event));
          callbacks.forEach(function (cb) {
            try {
              cb(data);
            } catch (err) {
              LogUtils.error("\u274C L\u1ED7i trong callback c\u1EE7a s\u1EF1 ki\u1EC7n [" + event + "]:", err);
            }
          });
        };

        _createClass(NetworkManager, [{
          key: "State",
          get: function get() {
            return this._state;
          }
        }]);

        return NetworkManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverURL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ws://192.168.1.13:8893/websocket";
        }
      }), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenTableInferfaceBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './PokerTableUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseBehaviour, PokerTableUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseBehaviour = module.BaseBehaviour;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
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
          pokerUIManager.get(PokerTableUI).show();
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
          endgamePhase.startPhase();
          this.events.emit(this.ON_END_ALL_PHASE);
          console.log('Game End Immediately');
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

System.register("chunks:///_virtual/PlayerDataControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePokerControl.ts', './EUserOptions.ts', './PokerInforPanel.ts', './ServiceLocator.ts', './Define.ts', './DefinePoker.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BasePokerControl, EUserOptions, EUserState, EBetPotType, ServiceLocator, Define, POKER_KEYS;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BasePokerControl = module.BasePokerControl;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      EUserState = module.EUserState;
      EBetPotType = module.EBetPotType;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      POKER_KEYS = module.POKER_KEYS;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cd435Uimm5OkLEhGjFH6UPM", "PlayerDataControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerDataControl = exports('PlayerDataControl', (_dec = ccclass('PlayerDataControl'), _dec(_class = /*#__PURE__*/function (_BasePokerControl) {
        _inheritsLoose(PlayerDataControl, _BasePokerControl);

        function PlayerDataControl(controller) {
          var _this;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this = _BasePokerControl.call.apply(_BasePokerControl, [this].concat(args)) || this;
          _this._imageCache = null;
          _this._eventBus = null;
          _this._controller = null;
          _this._currentTurnPanel = null;
          _this._currentBetPotAction = EBetPotType.Call;

          _this.updateCurrentBet = function (playerId, betValue) {
            var panel = _this.getPanelById(playerId);

            if (!panel) return;
            panel.onShowBetPot(true, _this._currentBetPotAction, betValue);
          };

          _this._controller = controller;
          _this._imageCache = ServiceLocator.get(Define.Service.ImageCache);
          _this._eventBus = ServiceLocator.get(Define.Service.EventBus);
          return _this;
        }

        var _proto = PlayerDataControl.prototype;

        _proto.onStartGame = function onStartGame() {};

        _proto.onEndPhase = function onEndPhase() {
          this.userInforUI.getPanelsWithState(EUserState.Playing).forEach(function (panel) {
            var pokerPanel = panel;
            pokerPanel.onShowBetPot(false);
          });
        };

        _proto.onEndGame = function onEndGame() {
          this.userInforUI.getAllPanels().forEach(function (panel) {
            panel.PanelState = EUserState.Waiting;
            panel.resetState();
          });
          this.tableUI.resetState();
        };

        _proto.setCardUserInstantly = function setCardUserInstantly(userID, cardsId) {
          var panel = this.getPanelById(userID);

          if ((cardsId == null ? void 0 : cardsId.length) > 0) {
            var cards = this.getCardDatas([cardsId[0], cardsId[1]]);
            panel.showCard(cards);
          } else {
            panel.onReceiveCard(1, this.isCurrentUser(userID));
          }
        };

        _proto.setCardTableInstantly = function setCardTableInstantly(cardIds) {
          this.tableUI.onShowCardView(true);

          for (var i = 0; i < cardIds.length; i++) {
            var card = this.convertIdToCardData(cardIds[i]);
            this.tableUI.showCard(card, i);
          }
        };

        _proto.doBetAction = function doBetAction(playerId, newBalance, action) {
          var panel = this.getPanelById(playerId);
          var userOption = this.getUserAction(action);
          panel.stopCountDown();
          panel.onUpdateChip(newBalance);
          this._currentBetPotAction = this.getBetPotAction(action);
          if (userOption) panel.showNoti(userOption, userOption !== EUserOptions.AllIn);

          if (userOption === EUserOptions.Fold) {
            panel.onUpdateUIWhenFold(true);
            panel.PanelState = EUserState.Waiting;
            this.userHUD.hide();
          }
        };

        _proto.onLoadRoom = function onLoadRoom(playerInforDatas) {
          var _this2 = this;

          playerInforDatas.forEach(function (data) {
            return _this2.loadInfor(data);
          });
        };

        _proto.onLoadUserEnter = function onLoadUserEnter(playerInforData) {
          this.loadInfor(playerInforData);
        };

        _proto.onUserLeaveRoom = function onUserLeaveRoom(userID) {
          var panel = this.getPanelById(userID);
          if (!panel) return;
          panel.resetState();
          panel.node.active = false;
          this.userInforUI.removePanelId(userID);
        };

        _proto.updateTablePotByFold = function updateTablePotByFold(currentBet) {
          this.tableUI.onAddToTotalPot(currentBet);
        };

        _proto.updateTablePot = function updateTablePot(tablePotValue) {
          if (this.tableUI.TotalPotValue == tablePotValue) return;
          this.tableUI.onUpdateTotalPot(tablePotValue);
        };

        _proto.resetAllPlayerBet = function resetAllPlayerBet() {
          this.userInforUI.getPanelsWithState(EUserState.Playing).forEach(function (p) {
            var pokerPanel = p;
            pokerPanel.setCurrentBet(0);
          });
        };

        _proto.loadInfor = /*#__PURE__*/function () {
          var _loadInfor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(info) {
            var _info$roundBetAmount, _info$winBet;

            var seatIndex, id, name, balance, url, panel, _info$handCards, hasData, cardIds, sprite;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    seatIndex = info.seatIndex;
                    id = info.userID;
                    name = info.name;
                    balance = info.newBalance;
                    url = info.avatarUrl;
                    panel = this.userInforUI.setUserPanel(seatIndex, id);
                    panel.setName(name).setBalance(balance);

                    if (info.role) {
                      this.onSetUIRole(id, info.role);

                      this._eventBus.emit(POKER_KEYS.UserStateChanged, this.isViewer(info.role) ? EUserState.Waiting : EUserState.Playing);
                    }

                    if (info.allin) {
                      panel.showNoti(EUserOptions.AllIn, false);
                    }

                    if (info.folded) {
                      panel.onUpdateUIWhenFold(true);
                      panel.PanelState = EUserState.Waiting;
                    }

                    if (info.hasCard) {
                      hasData = ((_info$handCards = info.handCards) == null ? void 0 : _info$handCards.length) > 0;
                      panel.onReceiveCard(2, hasData);

                      if (hasData) {
                        cardIds = this.getCardDatas([info.handCards[0], info.handCards[1]]);
                        panel.flipCard(cardIds, this.config.TimeFlip);
                      }
                    }

                    if (((_info$roundBetAmount = info.roundBetAmount) != null ? _info$roundBetAmount : 0) > 0) {
                      panel.onShowBetPot(true);
                      panel.setCurrentBet(info.roundBetAmount);
                    } else {
                      panel.onShowBetPot(false);
                    }

                    if (((_info$winBet = info.winBet) != null ? _info$winBet : 0) > 0) ;

                    if (info.winner) {
                      panel.onWin();
                    }

                    panel.node.active = true;
                    _context.next = 17;
                    return this._imageCache.loadSprite(url);

                  case 17:
                    sprite = _context.sent;
                    panel.setAvatar(sprite);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadInfor(_x) {
            return _loadInfor.apply(this, arguments);
          }

          return loadInfor;
        }();

        _proto.setTurn = function setTurn(userID, turnTime, remainTime) {
          if (remainTime === void 0) {
            remainTime = turnTime;
          }

          this._currentTurnPanel = this.getPanelById(userID);

          this._currentTurnPanel.doCountDown(turnTime, remainTime);

          if (this._currentTurnPanel.CurrentBet === 0) {
            this._currentTurnPanel.onShowBetPot(false);
          }

          if (this.isCurrentUser(userID)) {
            this.userHUD.Events.off(this.userHUD.ON_CHOOSING_OPTION, this.onUserChoosingOption, this);
            this.userHUD.Events.on(this.userHUD.ON_CHOOSING_OPTION, this.onUserChoosingOption, this);
          }
        };

        _proto.onUserChoosingOption = function onUserChoosingOption(userOption, raiseValue) {
          this._controller.sendUserAction(EUserOptions[userOption].toUpperCase(), raiseValue);

          this._currentTurnPanel.stopCountDown();

          this._currentTurnPanel = null;
          this.userHUD.hide();
        };

        _proto.onSetUIRole = function onSetUIRole(playerId, role, betValue) {
          var panel = this.getPanelById(playerId);

          switch (role) {
            case 'DEALER':
              panel.onShowDealerIcon(true);
              panel.PanelState = EUserState.Playing;
              break;

            case 'SMALL_BLIND':
              panel.onShowBetPot(true, EBetPotType.SmallBlind, betValue);
              panel.PanelState = EUserState.Playing;
              break;

            case 'BIG_BLIND':
              panel.onShowBetPot(true, EBetPotType.BigBlind, betValue);
              panel.PanelState = EUserState.Playing;
              break;

            case 'PLAYER':
              panel.PanelState = EUserState.Playing;
              break;

            case 'VIEWER':
              panel.PanelState = EUserState.Waiting;
              break;
          }
        };

        _proto.onSetUserAction = function onSetUserAction(actions, minRaise, maxRaise) {
          var _this3 = this,
              _this$userHUD;

          var actionResult = [];
          actions.forEach(function (a) {
            var optionEnum = _this3.getUserAction(a);

            var optionString = EUserOptions[optionEnum];
            actionResult.push(optionString);
          });

          (_this$userHUD = this.userHUD).setOptions.apply(_this$userHUD, actionResult);

          this.userHUD.setRaiseRange(minRaise, maxRaise);
          this.userHUD.show();
        };

        _proto.isViewer = function isViewer(role) {
          return role === "VIEWER";
        };

        return PlayerDataControl;
      }(BasePokerControl)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerPrefs.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, sys, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      LogUtils = module.LogUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4014EKrQ1E5rCf+AcC1Eze", "PlayerPrefs", undefined);

      var PlayerPrefs = exports('PlayerPrefs', /*#__PURE__*/function () {
        function PlayerPrefs() {} // -------------------------------------------------------------------------
        // INTEGER (Số nguyên)
        // -------------------------------------------------------------------------


        PlayerPrefs.setInt = function setInt(key, value) {
          sys.localStorage.setItem(key, value.toString());
        };

        PlayerPrefs.getInt = function getInt(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = 0;
          }

          var item = sys.localStorage.getItem(key);

          if (item === null || item === "") {
            return defaultValue;
          }

          var value = parseInt(item);
          return isNaN(value) ? defaultValue : value;
        } // -------------------------------------------------------------------------
        // FLOAT (Số thực)
        // -------------------------------------------------------------------------
        ;

        PlayerPrefs.setFloat = function setFloat(key, value) {
          sys.localStorage.setItem(key, value.toString());
        };

        PlayerPrefs.getFloat = function getFloat(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = 0.0;
          }

          var item = sys.localStorage.getItem(key);

          if (item === null || item === "") {
            return defaultValue;
          }

          var value = parseFloat(item);
          return isNaN(value) ? defaultValue : value;
        } // -------------------------------------------------------------------------
        // STRING (Chuỗi)
        // -------------------------------------------------------------------------
        ;

        PlayerPrefs.setString = function setString(key, value) {
          sys.localStorage.setItem(key, value);
        };

        PlayerPrefs.getString = function getString(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = "";
          }

          var item = sys.localStorage.getItem(key);

          if (item === null) {
            return defaultValue;
          }

          return item;
        } // -------------------------------------------------------------------------
        // BOOLEAN (Đúng/Sai) - Lưu là "1" hoặc "0"
        // -------------------------------------------------------------------------
        ;

        PlayerPrefs.setBool = function setBool(key, value) {
          sys.localStorage.setItem(key, value ? "1" : "0");
        };

        PlayerPrefs.getBool = function getBool(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = false;
          }

          var item = sys.localStorage.getItem(key);

          if (item === null || item === "") {
            return defaultValue;
          } // So sánh chuỗi "1" để trả về true


          return item === "1";
        } // -------------------------------------------------------------------------
        // OBJECT / ARRAY (Lưu JSON - Tính năng nâng cao)
        // -------------------------------------------------------------------------
        ;

        PlayerPrefs.setObject = function setObject(key, value) {
          try {
            var jsonString = JSON.stringify(value);
            sys.localStorage.setItem(key, jsonString);
          } catch (error) {
            LogUtils.error("PlayerPrefs: Error saving object for key " + key, error);
          }
        };

        PlayerPrefs.getObject = function getObject(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = null;
          }

          var item = sys.localStorage.getItem(key);

          if (item === null || item === "") {
            return defaultValue;
          }

          try {
            return JSON.parse(item);
          } catch (error) {
            LogUtils.error("PlayerPrefs: Error parsing object for key " + key, error);
            return defaultValue;
          }
        } // -------------------------------------------------------------------------
        // QUẢN LÝ CHUNG
        // -------------------------------------------------------------------------

        /** Kiểm tra xem key có tồn tại không */
        ;

        PlayerPrefs.hasKey = function hasKey(key) {
          var item = sys.localStorage.getItem(key);
          return item !== null;
        }
        /** Xóa 1 key cụ thể */
        ;

        PlayerPrefs.deleteKey = function deleteKey(key) {
          sys.localStorage.removeItem(key);
        }
        /** Xóa TOÀN BỘ dữ liệu (Reset game) */
        ;

        PlayerPrefs.deleteAll = function deleteAll() {
          sys.localStorage.clear();
        };

        PlayerPrefs.save = function save() {// sys.localStorage lưu tự động nên hàm này để trống
        };

        return PlayerPrefs;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAdapter.ts', './NetworkManager.ts', './Define.ts', './DefinePoker.ts'], function () {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseAdapter, MESSAGE, MINIGAME_KEYS, POKER_KEYS;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseAdapter = module.BaseAdapter;
    }, function (module) {
      MESSAGE = module.MESSAGE;
    }, function (module) {
      MINIGAME_KEYS = module.MINIGAME_KEYS;
    }, function (module) {
      POKER_KEYS = module.POKER_KEYS;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cfd6dY/8XlFc6f6jza5Tftl", "PokerAdapter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      var PokerAdapter = (_dec = ccclass('PokerAdapter'), _dec(_class = /*#__PURE__*/function (_BaseAdapter) {
        _inheritsLoose(PokerAdapter, _BaseAdapter);

        function PokerAdapter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAdapter.call.apply(_BaseAdapter, [this].concat(args)) || this;
          _this.onStartGame = void 0;
          _this.onEndGame = void 0;
          _this.onUserEnter = void 0;
          _this.onTableData = void 0;
          _this.onActionResponse = void 0;
          _this.onTurnChange = void 0;
          _this.onLoadPlayerOptions = void 0;
          _this.onGameResult = void 0;
          _this.onRevealCard = void 0;
          _this.onRevealAllCards = void 0;
          _this.onDealCardToUser = void 0;
          _this.onDealCardOnTable = void 0;
          _this.onPlaceBlind = void 0;
          _this.onUserExitTable = void 0;
          _this.onUpdateTablePot = void 0;
          _this.onCheckHandRank = void 0;

          _this.onStartGameResponse = function (data) {
            _this.onStartGame == null ? void 0 : _this.onStartGame();
          };

          _this.onEndGameResponse = function (data) {
            _this.onEndGame == null ? void 0 : _this.onEndGame();
          };

          _this.onBetResponse = function (data) {
            var datas = data.datas;
            _this.onActionResponse == null ? void 0 : _this.onActionResponse(datas);
          };

          _this.onDealCardToUserResponse = function (data) {
            var datas = data.datas;
            _this.onDealCardToUser == null ? void 0 : _this.onDealCardToUser(datas);
          };

          _this.onDealCardOnTableResponse = function (data) {
            var datas = data.datas;
            _this.onDealCardOnTable == null ? void 0 : _this.onDealCardOnTable(datas);
          };

          _this.onRevealCardResponse = function (data) {
            var datas = data.datas;
            _this.onRevealCard == null ? void 0 : _this.onRevealCard(datas);
          };

          _this.onRevealAllCardsResponse = function (data) {
            var datas = data.datas;
            _this.onRevealAllCards == null ? void 0 : _this.onRevealAllCards(datas);
          };

          _this.onGameResultResponse = function (data) {
            var datas = data.datas;
            _this.onGameResult == null ? void 0 : _this.onGameResult(datas);
          };

          _this.onUserEnterTableResponse = function (data) {
            var datas = data.datas;
            _this.onUserEnter == null ? void 0 : _this.onUserEnter(datas);
          };

          _this.onGetTableDataResponse = function (data) {
            var datas = data.datas;
            _this.onTableData == null ? void 0 : _this.onTableData(datas);
          };

          _this.onLoadPlayerOptionsResponse = function (data) {
            var datas = data.datas;
            _this.onLoadPlayerOptions == null ? void 0 : _this.onLoadPlayerOptions(datas);
          };

          _this.onTurnChangeResponse = function (data) {
            var datas = data.datas;
            _this.onTurnChange == null ? void 0 : _this.onTurnChange(datas);
          };

          _this.onPlaceBlindResponse = function (data) {
            var datas = data.datas;
            _this.onPlaceBlind == null ? void 0 : _this.onPlaceBlind(datas);
          };

          _this.onUserExitTableResponse = function (data) {
            var datas = data.datas;
            _this.onUserExitTable == null ? void 0 : _this.onUserExitTable(datas);
          };

          _this.onUpdateTablePotResponse = function (data) {
            var datas = data.datas;
            _this.onUpdateTablePot == null ? void 0 : _this.onUpdateTablePot(datas);
          };

          _this.onCheckHandRankResponse = function (data) {
            var datas = data.datas;
            _this.onCheckHandRank == null ? void 0 : _this.onCheckHandRank(datas);
          };

          return _this;
        }

        var _proto = PokerAdapter.prototype;

        _proto.init = function init() {
          _BaseAdapter.prototype.init.call(this);

          console.warn("Init Poker Adapter");
          this.setEvents();
        };

        _proto.setEvents = function setEvents() {
          this.network.on(MINIGAME_KEYS.StartGame, this.onStartGameResponse);
          this.network.on(MINIGAME_KEYS.EndGame, this.onEndGameResponse);
          this.network.on(POKER_KEYS.UserEnterTable, this.onUserEnterTableResponse);
          this.network.on(POKER_KEYS.TableData, this.onGetTableDataResponse);
          this.network.on(POKER_KEYS.ActionResponse, this.onBetResponse);
          this.network.on(POKER_KEYS.ChangeTurn, this.onTurnChangeResponse);
          this.network.on(POKER_KEYS.PlayerOptions, this.onLoadPlayerOptionsResponse);
          this.network.on(POKER_KEYS.GameResult, this.onGameResultResponse);
          this.network.on(POKER_KEYS.RevealCard, this.onRevealCardResponse);
          this.network.on(POKER_KEYS.RevealAllCard, this.onRevealAllCardsResponse);
          this.network.on(POKER_KEYS.DealCardToUser, this.onDealCardToUserResponse);
          this.network.on(POKER_KEYS.DealFlop, this.onDealCardOnTableResponse);
          this.network.on(POKER_KEYS.DealTurn, this.onDealCardOnTableResponse);
          this.network.on(POKER_KEYS.DealRiver, this.onDealCardOnTableResponse);
          this.network.on(POKER_KEYS.PlaceBlind, this.onPlaceBlindResponse);
          this.network.on(POKER_KEYS.UserExitTable, this.onUserExitTableResponse);
          this.network.on(POKER_KEYS.End_Flop, this.onUpdateTablePotResponse);
          this.network.on(POKER_KEYS.End_Preflop, this.onUpdateTablePotResponse);
          this.network.on(POKER_KEYS.End_River, this.onUpdateTablePotResponse);
          this.network.on(POKER_KEYS.End_Turn, this.onUpdateTablePotResponse);
          this.network.on(POKER_KEYS.CheckHandRank, this.onCheckHandRankResponse);
        };

        _proto.onDestroy = function onDestroy() {
          if (!this.network) return;
          this.network.off(MINIGAME_KEYS.StartGame, this.onStartGameResponse);
          this.network.off(MINIGAME_KEYS.EndGame, this.onEndGameResponse);
          this.network.off(POKER_KEYS.UserEnterTable, this.onUserEnterTableResponse);
          this.network.off(POKER_KEYS.TableData, this.onGetTableDataResponse);
          this.network.off(POKER_KEYS.ActionResponse, this.onBetResponse);
          this.network.off(POKER_KEYS.ChangeTurn, this.onTurnChangeResponse);
          this.network.off(POKER_KEYS.PlayerOptions, this.onLoadPlayerOptionsResponse);
          this.network.off(POKER_KEYS.GameResult, this.onGameResultResponse);
          this.network.off(POKER_KEYS.RevealCard, this.onRevealCardResponse);
          this.network.off(POKER_KEYS.RevealAllCard, this.onRevealAllCardsResponse);
          this.network.off(POKER_KEYS.DealCardToUser, this.onDealCardToUserResponse);
          this.network.off(POKER_KEYS.DealFlop, this.onDealCardOnTableResponse);
          this.network.off(POKER_KEYS.DealTurn, this.onDealCardOnTableResponse);
          this.network.off(POKER_KEYS.DealRiver, this.onDealCardOnTableResponse);
          this.network.off(POKER_KEYS.PlaceBlind, this.onPlaceBlindResponse);
          this.network.off(POKER_KEYS.UserExitTable, this.onUserExitTableResponse);
          this.network.off(POKER_KEYS.End_Flop, this.onUpdateTablePotResponse);
          this.network.off(POKER_KEYS.End_Preflop, this.onUpdateTablePotResponse);
          this.network.off(POKER_KEYS.End_River, this.onUpdateTablePotResponse);
          this.network.off(POKER_KEYS.End_Turn, this.onUpdateTablePotResponse);
          this.network.off(POKER_KEYS.CheckHandRank, this.onCheckHandRankResponse);
        } // client to server
        ;

        _proto.sendAction = function sendAction(zoneName, roomId, userOption, raiseValue) {
          if (!raiseValue) raiseValue = 0;
          var payloadDatas = {
            action: userOption,
            raiseValue: raiseValue
          };
          var message = {
            action: 'user_bet',
            requestId: this.getRandomRequestId(),
            payload: payloadDatas
          };
          this.network.send([MESSAGE.ROOM_PLUGIN, zoneName, roomId, message]);
        };

        _proto.sendStandUp = function sendStandUp(userId, zoneName, roomId) {
          var message = {
            action: 'stand_up',
            requestId: this.getRandomRequestId(),
            payload: {
              userID: userId
            }
          };
          this.network.send([MESSAGE.ROOM_PLUGIN, zoneName, roomId, message]);
        };

        _proto.requestTableInfor = function requestTableInfor(zoneName, roomId) {
          var message = {
            action: 'room_data',
            requestId: this.getRandomRequestId(),
            payload: {}
          };
          this.network.send([MESSAGE.ROOM_PLUGIN, zoneName, roomId, message]);
        };

        _proto.deposit = function deposit(zoneName, roomId, amount) {
          var payloadData = {
            amount: amount
          };
          var message = {
            action: "deposit",
            requestId: this.getRandomRequestId(),
            payload: payloadData
          };
          this.network.send([MESSAGE.ROOM_PLUGIN, zoneName, roomId, message]);
        } // server to client
        ;

        return PokerAdapter;
      }(BaseAdapter)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerCheat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerManager.ts', './Define.ts', './ServiceLocator.ts', './EUserOptions.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Component, EUserOptions, UserInforUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Component = module.Component;
    }, null, null, null, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "565adTNNbhJT4IYrk8TB1ik", "PokerCheat", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerCheat = exports('PokerCheat', (_dec = ccclass('PokerCheat'), _dec2 = property({
        type: EditBox,
        visible: true
      }), _dec3 = property({
        type: EditBox,
        visible: true
      }), _dec4 = property({
        type: EditBox,
        visible: true
      }), _dec5 = property({
        type: EditBox,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerCheat, _Component);

        function PokerCheat() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.uiManager = null;
          _this.miniGameManager = null;
          _this.miniGame = null;

          _initializerDefineProperty(_this, "chipAdd", _descriptor, _assertThisInitialized(_this));

          _this.isAutoHide = false;

          _initializerDefineProperty(_this, "valueSpawnFloatingText", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "valueChipsEffect", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "valueCoundown", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PokerCheat.prototype;

        _proto.start = function start() {};

        _proto.onPauseGame = function onPauseGame() {
          this.miniGame.cheatPokerGameplay;
        };

        _proto.onResumeGame = function onResumeGame() {};

        _proto.onSkipPhase = function onSkipPhase() {};

        _proto.onAddChip = function onAddChip() {
          console.warn("Add Chip Cheat Activated"); // const chipValue = parseInt(this.chipAdd.string);
          // this.miniGame.cheatPokerGameplay.onCheatAddCurrency(chipValue);
        };

        _proto.onToggleAutoAddChip = function onToggleAutoAddChip(toggle) {
          console.warn("Auto Add Chip Toggled:", toggle.isChecked);
          var isAutoAddChip = toggle.isChecked;
          this.miniGame.cheatPokerGameplay.isAutoAddCurrencyEnabled = isAutoAddChip;
        };

        _proto.onEndAnimation = function onEndAnimation(event, customEventData) {// // 1. Cast the string to a Key of the Enum
          // const effectKey = parseInt(customEventData);
          // // // 2. Get the actual Enum value (number)
          // // const effectValue = EEndEffect[effectKey];
          // if (DEBUG) console.warn("Show Noti Animation Cheat Activated:", EUserOptions[effectKey]);
          // const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.setEndEffect(effectKey);
          // });
          //this.miniGame.cheatPokerUI.onCheatShowEndEffect(effectKey);
        } // public onLoseAnimation(): void {
        //     this.miniGame.cheatPokerUI.onCheatShowEndEffect(EEndEffect.Lose);
        // }
        ;

        _proto.onEndGame = function onEndGame() {};

        _proto.onStartGame = function onStartGame() {};

        _proto.onDealAnimation = function onDealAnimation() {//this.miniGame.cheatPokerUI.onCheatShowDealCard();
        };

        _proto.onToggleAutoHide = function onToggleAutoHide(toggle) {
          console.warn("Auto Hide Toggled:", toggle.isChecked);
          this.isAutoHide = toggle.isChecked;
        };

        _proto.onShowNotiAnimation = function onShowNotiAnimation(event, customEventData) {
          var effectKey = parseInt(customEventData);
          console.warn("Show Noti Animation Cheat Activated:", EUserOptions[effectKey]);
          var userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI); //const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.showNoti(effectKey, this.isAutoHide);
          // });

          {
            console.warn("Cheat: Show Noti " + EUserOptions[effectKey] + " AutoHide: " + this.isAutoHide);
          }
        };

        _proto.onShowPlayerCard = function onShowPlayerCard() {// const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // const config = ServiceLocator.get<GameConfig>(Define.Service.GameConfig);
          // panels.forEach(panel => {
          //     panel.onShowCard(config.TimeFlip);
          // });
          // if (DEBUG) {
          //     console.warn(`Cheat: Show User Card`);
          // }
        };

        _proto.onCheatSpawnFloatingText = function onCheatSpawnFloatingText() {// if (DEBUG) console.warn("Spawn Floating Text Cheat Activated");
          // const value = parseInt(this.valueSpawnFloatingText.string);
          // const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.spawnFloatingText(value);
          // });
          // console.warn(`Cheat: Spawn Floating Text ${value}`);
          // this.miniGame.cheatPokerUI.onCheatSpawnFloatingText(value);
        };

        _proto.onCheatChipsEffect = function onCheatChipsEffect(event, customEventData) {// let effectKey = Boolean(customEventData);
          // if (DEBUG) console.warn("Chips Effect Cheat Activated");
          // const value = parseFloat(this.valueChipsEffect.string);
          // const tableUI = this.miniGame.cheatPokerUI.get(TableUI);
          // const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     tableUI.doChipEffect(
          //         value,
          //         effectKey ? tableUI.totalPotNode.worldPosition : panel.node.worldPosition,
          //         effectKey ? panel.node.worldPosition : tableUI.totalPotNode.worldPosition,
          //         1);
          // });
          //this.miniGame.cheatPokerUI.onCheatChipsEffect(value, effectKey);
        };

        _proto.onCheatCountDown = function onCheatCountDown() {// const value = parseFloat(this.valueCoundown.string);
          // const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.doCountDown(value);
          // });
        };

        _proto.onStopCountDown = function onStopCountDown() {// const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.stopCountDown();
          // });
          // this.miniGame.cheatPokerUI.onCheatStopCountdown();
        };

        _proto.onResetUI = function onResetUI() {//this.miniGame.cheatPokerUI.cheatResetState();
        };

        _proto.onCloseHub = function onCloseHub() {//this.uiManager.hidePopup(EUIPopups.CheatHUB);
        };

        _proto.onCheatShowHankRank = function onCheatShowHankRank(event, customEventData) {// const effectKey = parseInt(customEventData);
          // this.miniGame.cheatPokerUI.get(TableUI).onShowHandRankWinner(effectKey);
          // const userInforUI = this.miniGame.cheatPokerUI.get(UserInforUI);
          // const panels = userInforUI.getPanels(userInforUI.getPanelsLength());
          // panels.forEach(panel => {
          //     panel.stopCountDown();
          // });
        };

        return PokerCheat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chipAdd", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueSpawnFloatingText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "valueChipsEffect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "valueCoundown", [_dec5], {
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

System.register("chunks:///_virtual/PokerController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardController.ts', './EResultCode.ts', './Define.ts', './ServiceLocator.ts', './EUserOptions.ts', './PokerTableUI.ts', './PokerInforPanel.ts', './UserHUD.ts', './DefinePoker.ts', './PlayerDataControl.ts', './UIEffectControl.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, CardController, EResultCode, GLOBAL_KEYS, MINIGAME_KEYS, ServiceLocator, EUserOptions, PokerTableUI, EUserState, UserHUD, DefinePoker, POKER_KEYS, PlayerDataControl, UIEffectControl;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      CardController = module.CardController;
    }, function (module) {
      EResultCode = module.EResultCode;
    }, function (module) {
      GLOBAL_KEYS = module.GLOBAL_KEYS;
      MINIGAME_KEYS = module.MINIGAME_KEYS;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      EUserState = module.EUserState;
    }, function (module) {
      UserHUD = module.UserHUD;
    }, function (module) {
      DefinePoker = module.DefinePoker;
      POKER_KEYS = module.POKER_KEYS;
    }, function (module) {
      PlayerDataControl = module.PlayerDataControl;
    }, function (module) {
      UIEffectControl = module.UIEffectControl;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1a86eTIGCdOUKxllsWTkwyP", "PokerController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder; // control all poker logic

      var PokerController = exports('PokerController', (_dec = ccclass('PokerController'), _dec(_class = /*#__PURE__*/function (_CardController) {
        _inheritsLoose(PokerController, _CardController);

        function PokerController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _CardController.call.apply(_CardController, [this].concat(args)) || this;
          _this._pokerAdapter = null;
          _this._uiEffectControl = null;
          _this._actionDataControl = null;
          return _this;
        }

        var _proto = PokerController.prototype;

        _proto.init = function init() {
          this._pokerAdapter = ServiceLocator.get(DefinePoker.Service.Adapter.Poker);

          _CardController.prototype.init.call(this);
        };

        _proto.onLoad = function onLoad() {
          _CardController.prototype.onLoad.call(this);

          this._uiEffectControl = new UIEffectControl(this.minigameUI);
          this._actionDataControl = new PlayerDataControl(this, this.minigameUI);
          this.minigameUI.get(PokerTableUI).onSetUIRoomInfor(this._roomInfor.roomId.toString());
          this.requestRoomInfor();
        };

        _proto.onDestroy = function onDestroy() {
          this.eventBus.off(GLOBAL_KEYS.Deposit, this.onDeposit, this); // game.off(Game.EVENT_SHOW, this.requestRoomInfor, this);
          // game.off(Game.EVENT_HIDE, this.noti, this);

          if (!this._pokerAdapter) return;
          this._pokerAdapter.onStartGame = null;
          this._pokerAdapter.onDealCardToUser = null;
          this._pokerAdapter.onDealCardOnTable = null;
          this._pokerAdapter.onActionResponse = null;
          this._pokerAdapter.onUserEnter = null;
          this._pokerAdapter.onTableData = null;
          this._pokerAdapter.onRevealCard = null;
          this._pokerAdapter.onRevealAllCards = null;
          this._pokerAdapter.onPlaceBlind = null;
          this._pokerAdapter.onUserExitTable = null;
          this._pokerAdapter.onTurnChange = null;
          this._pokerAdapter.onLoadPlayerOptions = null;
          this._pokerAdapter.onGameResult = null;
          this._pokerAdapter.onUpdateTablePot = null;
        };

        _proto.setEvents = function setEvents() {
          this._pokerAdapter.onStartGame = this.onStartGame.bind(this);
          this._pokerAdapter.onEndGame = this.onEndGame.bind(this);
          this._pokerAdapter.onDealCardToUser = this.onDealCardToUser.bind(this);
          this._pokerAdapter.onDealCardOnTable = this.onDealCardOnTable.bind(this);
          this._pokerAdapter.onActionResponse = this.onBetResponse.bind(this);
          this._pokerAdapter.onUserEnter = this.onUserEnterResponse.bind(this);
          this._pokerAdapter.onTableData = this.onGetRoomDataResponse.bind(this);
          this._pokerAdapter.onRevealCard = this.onRevealCard.bind(this);
          this._pokerAdapter.onRevealAllCards = this.onRevealAllCards.bind(this);
          this._pokerAdapter.onPlaceBlind = this.onPlaceBlind.bind(this);
          this._pokerAdapter.onUserExitTable = this.onUserExitRoom.bind(this);
          this._pokerAdapter.onTurnChange = this.onChangeTurn.bind(this);
          this._pokerAdapter.onLoadPlayerOptions = this.onLoadPlayerOptions.bind(this);
          this._pokerAdapter.onGameResult = this.onGameResult.bind(this);
          this._pokerAdapter.onUpdateTablePot = this.onUpdateTablePot.bind(this);
          this._pokerAdapter.onCheckHandRank = this.onCheckHandRank.bind(this);
          this.eventBus.on(GLOBAL_KEYS.Deposit, this.onDeposit, this); // game.on(Game.EVENT_SHOW, this.requestRoomInfor, this);
          // game.on(Game.EVENT_HIDE, this.noti, this);
        };

        _proto.noti = function noti() {
          console.error("Hide");
        };

        _proto.sendStandUp = function sendStandUp(userId) {
          this._pokerAdapter.sendStandUp(userId, this.sessionManager.CurrentZone, this._roomInfor.roomId);
        };

        _proto.requestRoomInfor = function requestRoomInfor() {
          this._pokerAdapter.requestTableInfor(this.sessionManager.CurrentZone, this._roomInfor.roomId);
        };

        _proto.sendUserAction = function sendUserAction(action, raiseValue) {
          this._pokerAdapter.sendAction(this.sessionManager.CurrentZone, this._roomInfor.roomId, action, raiseValue);
        };

        _proto.deposit = function deposit(amount) {
          this._pokerAdapter.deposit(this.sessionManager.CurrentZone, this.sessionManager.CurrentRoom.roomId, amount);
        };

        _proto.onStartGame = function onStartGame() {
          this.minigameUI.resetState();

          this._actionDataControl.onStartGame();

          this.eventBus.emit(MINIGAME_KEYS.StartGame);
        };

        _proto.onEndGame = function onEndGame() {
          this._actionDataControl.onEndGame();

          this.eventBus.emit(MINIGAME_KEYS.EndGame);
          this.eventBus.emit(POKER_KEYS.UserStateChanged, EUserState.Waiting);
        };

        _proto.onDeposit = function onDeposit(data) {
          if (data.resultCode === EResultCode.SUCCESS) {
            var panel = this._actionDataControl.getPanelById(data.playerId);

            panel.setBalance(data.balance);
          } else {
            console.error("Deposit failed");
          }
        };

        _proto.onDealCardToUser = function onDealCardToUser(data) {
          if (data.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this._uiEffectControl.onDealCardToUser(data.cardId, data.playerTurnId);
        };

        _proto.onDealCardOnTable = function onDealCardOnTable(data) {
          if (data.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this._uiEffectControl.onDealCardOnTable(data.cardId);
        };

        _proto.onBetResponse = function onBetResponse(data) {
          var _this2 = this;

          if (data.success) {
            if (data.roomId !== this._roomInfor.roomId) {
              console.error("Wrong room Id");
              return;
            }

            var panel = this._actionDataControl.getPanelById(data.userId);

            var currentBet = panel.CurrentBet;

            this._actionDataControl.doBetAction(data.userId, data.newBalance, data.action);

            if (this._actionDataControl.getUserAction(data.action) === EUserOptions.Fold) {
              if (this._actionDataControl.isCurrentUser(data.userId)) {
                this.eventBus.emit(POKER_KEYS.UserStateChanged, EUserState.Waiting);

                this._uiEffectControl.resetHandRank();
              }

              this._uiEffectControl.moveChipToTable(data.userId, currentBet, function () {
                return _this2._actionDataControl.updateTablePotByFold(currentBet);
              });
            } else {
              this._uiEffectControl.onBetEffectResponse(data.userId, data.betValue, this._actionDataControl.updateCurrentBet);
            }
          } else {
            console.error("Bet failed");
          }
        };

        _proto.onUserEnterResponse = function onUserEnterResponse(data) {
          if (data.roomInfo.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this._actionDataControl.onLoadUserEnter(data.playerInfo);
        };

        _proto.onGetRoomDataResponse = function onGetRoomDataResponse(data) {
          var _this3 = this,
              _data$communityCards;

          if (data.roomInfo.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this.minigameUI.get(UserHUD).setRaiseStep(data.roomType.step);

          this._actionDataControl.onLoadRoom(data.playerInfos);

          var winners = data.playerInfos.filter(function (player) {
            var _player$winner;

            return (_player$winner = player.winner) != null ? _player$winner : false;
          });
          winners.forEach(function (w) {
            return _this3._uiEffectControl.setHandRank(w.userID, w.handRank, w.bestCards);
          });

          if (data.totalPot) {
            this._actionDataControl.updateTablePot(data.totalPot);
          }

          if (data.userTurnId) {
            this._actionDataControl.setTurn(data.userTurnId, this.toSeconds(data.turnTime), this.toSeconds(data.remainTime));
          }

          if (data.playerOption) {
            this.onLoadPlayerOptions(data.playerOption);
          }

          if (((_data$communityCards = data.communityCards) == null ? void 0 : _data$communityCards.length) > 0) {
            this._actionDataControl.setCardTableInstantly(data.communityCards);

            for (var _iterator = _createForOfIteratorHelperLoose(data.playerInfos), _step; !(_step = _iterator()).done;) {
              var playerInfo = _step.value;
              if (!this._actionDataControl.isCurrentUser(playerInfo.userID)) continue;
              var handRankData = {
                handRank: playerInfo.handRank,
                cardCombination: playerInfo.bestCards
              };
              this.onCheckHandRank(handRankData);
            }
          }
        };

        _proto.onRevealCard = function onRevealCard(data) {
          if (data.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this._uiEffectControl.revealCard(data.userId, data.cardIds);
        };

        _proto.onRevealAllCards = function onRevealAllCards(data) {
          var _this4 = this;

          if (data.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          data.playerHands.forEach(function (playerHand) {
            _this4._uiEffectControl.revealCard(playerHand.userID, playerHand.cardId);
          });
        };

        _proto.onPlaceBlind = function onPlaceBlind(data) {
          var _this5 = this;

          if (data.playerRoles.find(function (playerRole) {
            return playerRole.userID === _this5.userProfile.userData.userID;
          }).role === "VIEWER") {
            this.eventBus.emit(POKER_KEYS.UserStateChanged, EUserState.Waiting);
          } else {
            this.eventBus.emit(POKER_KEYS.UserStateChanged, EUserState.Playing);
          }

          data.playerRoles.forEach(function (playerRole) {
            _this5._actionDataControl.onSetUIRole(playerRole.userID, playerRole.role, playerRole.betValue);

            _this5._actionDataControl.doBetAction(playerRole.userID, playerRole.newBalance, "nothing");
          });
        };

        _proto.onUserExitRoom = function onUserExitRoom(data) {
          this._actionDataControl.onUserLeaveRoom(data.userID);
        };

        _proto.onChangeTurn = function onChangeTurn(data) {
          if (data.roomId !== this._roomInfor.roomId) {
            console.error("Wrong room Id");
            return;
          }

          this._actionDataControl.setTurn(data.userId, this.toSeconds(data.turnTime));
        };

        _proto.onLoadPlayerOptions = function onLoadPlayerOptions(data) {
          this._actionDataControl.onSetUserAction(data.actions, data.minRaise, data.maxRaise);
        };

        _proto.onGameResult = function onGameResult(data) {
          this._uiEffectControl.setResult(data.playerResults, data.handRank, data.remainPot);
        };

        _proto.onUpdateTablePot = function onUpdateTablePot(data) {
          var _this6 = this;

          if (this.minigameUI.get(PokerTableUI).TotalPotValue == data.tableBetValue) return;

          this._actionDataControl.onEndPhase();

          this._uiEffectControl.moveAllChipToTable(function () {
            _this6._actionDataControl.updateTablePot(data.tableBetValue);

            _this6._actionDataControl.resetAllPlayerBet();
          });
        };

        _proto.onCheckHandRank = function onCheckHandRank(data) {
          this._uiEffectControl.setHandRank(this.userProfile.userData.userID, data.handRank, data.cardCombination);
        } //****** Utils ******/
        ;

        _proto.toSeconds = function toSeconds(milisecond) {
          return milisecond / 1000;
        };

        _createClass(PokerController, [{
          key: "_roomInfor",
          get: function get() {
            return this.sessionManager.CurrentRoom;
          }
        }]);

        return PokerController;
      }(CardController)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pokerData.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94340AL0nVJBYbU41wUJXr8", "pokerData", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerDepositLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './ButtonUtils.ts', './Define.ts', './DefinePoker.ts', './MiniUI.ts', './AudioHelper.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, ServiceLocator, ButtonUtils, Define, DefinePoker, MiniUI, AudioHelper, EUIGame;

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
      Button = module.Button;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      DefinePoker = module.DefinePoker;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "ac107gD70lINpWl+lm7syGb", "PokerDepositLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerDepositLayer = exports('PokerDepositLayer', (_dec = ccclass('PokerDepositLayer'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(PokerDepositLayer, _MiniUI);

        function PokerDepositLayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnDeposit", _descriptor, _assertThisInitialized(_this));

          _this._uimanager = null;
          _this._pokerController = null;
          return _this;
        }

        var _proto = PokerDepositLayer.prototype;

        _proto.init = function init() {
          _MiniUI.prototype.init.call(this);

          this._uimanager = ServiceLocator.get(Define.Service.UIManager);
          this._pokerController = ServiceLocator.get(DefinePoker.Service.PokerController);
          ButtonUtils.bind(this._btnDeposit, this.onShowDeposit, this);
        };

        _proto.onDestroy = function onDestroy() {
          if (this._btnDeposit && this._btnDeposit.isValid) {
            ButtonUtils.unbind(this._btnDeposit, this.onShowDeposit, this);
          }
        };

        _proto.onShowDeposit = /*#__PURE__*/function () {
          var _onShowDeposit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var uiDeposit;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    AudioHelper.playClickSound();
                    _context.next = 3;
                    return this._uimanager.showAsync(EUIGame.Popup_Deposit);

                  case 3:
                    uiDeposit = _context.sent;
                    uiDeposit.setCallback(function (amount) {
                      _this2._pokerController.deposit(amount);
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onShowDeposit() {
            return _onShowDeposit.apply(this, arguments);
          }

          return onShowDeposit;
        }();

        return PokerDepositLayer;
      }(MiniUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnDeposit", [_dec2], {
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

System.register("chunks:///_virtual/PokerGameplayManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BetManager.ts', './PhaseManager.ts', './TableManager.ts', './GameplayHandler.ts', './UserManager.ts', './ServiceLocator.ts', './Define.ts', './AsyncUtils.ts', './PokerTableUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, BetManager, PhaseManager, TableManager, GameplayHandler, UserManager, ServiceLocator, Define, AsyncUtils, PokerTableUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
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
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
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
          _this.isAutoAddCurrency = true;
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
          var config = ServiceLocator.get(Define.Service.GameConfig);

          this._betManager.initBet(2, 100);

          this._userManager.numberUserActives = config.UserInOfflineMode;

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

          this.checkUsersMoney();
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
                    this._pokerUI.resetState();

                    tableUI = this._pokerUI.get(PokerTableUI); // Cheat

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
        }();

        _proto.checkUsersMoney = function checkUsersMoney() {
          var moneys = this.getUsersMoney();

          if (moneys[0] <= 0) {
            console.warn('User is out of money, ending game.');

            this._pokerUI.onShowRebuyPopup();
          }
        } //#region Cheat
        ;

        _createClass(PokerGameplayManager, [{
          key: "isAutoAddCurrencyEnabled",
          set: function set(isAuto) {
            this.isAutoAddCurrency = isAuto;
          } // on cheat flow get curreny 
          // public onCheataddCurrencyUser(value: number): void {
          //     if (!CHEAT) return;
          //     this._userManager.Users[0].userCurrency.add(value);
          //     const userUI = this._pokerUI.get(UserInforUI);
          //     const moneys = this.getUsersMoney();
          //     for (let i = 0; i < moneys.length; i++) {
          //         userUI.getPanel(i).onUpdateChip(moneys[i]);
          //     }
          // }
          // public onCheatAddCurrency(value: number): void {
          //     if (!CHEAT) return;
          //     this._userManager.Users.forEach(u => {
          //         // If the current currency is 0 or less
          //         //if (u.userCurrency.currency <= 0) {
          //         u.userCurrency.add(value);
          //         //}
          //     });
          //     const userUI = this._pokerUI.get(UserInforUI);
          //     const moneys = this.getUsersMoney();
          //     for (let i = 0; i < moneys.length; i++) {
          //         userUI.getPanel(i).onUpdateChip(moneys[i]);
          //     }
          // }
          // public onCheatAddCurrencyAuto(value: number): void {
          //     if (!CHEAT) return;
          //     this._userManager.Users.forEach(u => {
          //         // If the current currency is 0 or less
          //         if (u.userCurrency.currency <= 0) {
          //             // Check if userCurrency.currency is a number that needs to be updated directly
          //             // OR if it's an object with an 'add' method.
          //             // OPTION A: If 'currency' is a plain number property (most common):
          //             u.userCurrency.add(value);
          //         }
          //     });
          //     const userUI = this._pokerUI.get(UserInforUI);
          //     const moneys = this.getUsersMoney();
          //     for (let i = 0; i < moneys.length; i++) {
          //         userUI.getPanel(i).onUpdateChip(moneys[i]);
          //     }
          // }
          //public onCheat
          //#endregion

        }]);

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

System.register("chunks:///_virtual/PokerInforPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserNotiOption.ts', './CheckHandRank.ts', './UserHandRankUI.ts', './AsyncUtils.ts', './Tweener.ts', './DowloadHandler.ts', './CardUserPanel.ts', './HandRank.ts', './AudioHelper.ts', './EAudio.ts', './EPoolType.ts', './FloatingObject.ts', './RotateObject.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Label, Node, SpriteFrame, tween, v3, UserNotiOption, CheckHandRank, UserHandRankUI, AsyncUtils, Tweener, DowloadHandler, CardUserPanel, HandRank, AudioHelper, ESFXId, EPoolType, FloatingObject, RotateObject;

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
      Label = module.Label;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      UserNotiOption = module.UserNotiOption;
    }, function (module) {
      CheckHandRank = module.CheckHandRank;
    }, function (module) {
      UserHandRankUI = module.UserHandRankUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      CardUserPanel = module.CardUserPanel;
    }, function (module) {
      HandRank = module.HandRank;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      EPoolType = module.EPoolType;
    }, function (module) {
      FloatingObject = module.FloatingObject;
    }, function (module) {
      RotateObject = module.RotateObject;
    }],
    execute: function () {
      exports({
        EBetPotType: void 0,
        EDirection: void 0,
        EEndEffect: void 0,
        EUserState: void 0
      });

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

      cclegacy._RF.push({}, "2060b5U6pZFWYVo1mSVjLxw", "PokerInforPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EDirection;

      (function (EDirection) {
        EDirection[EDirection["X_AXIS"] = 0] = "X_AXIS";
        EDirection[EDirection["Y_AXIS"] = 1] = "Y_AXIS";
        EDirection[EDirection["Z_AXIS"] = 2] = "Z_AXIS";
      })(EDirection || (EDirection = exports('EDirection', {})));

      var EEndEffect;

      (function (EEndEffect) {
        EEndEffect[EEndEffect["Fold"] = 0] = "Fold";
        EEndEffect[EEndEffect["Lose"] = 1] = "Lose";
        EEndEffect[EEndEffect["Draw"] = 2] = "Draw";
        EEndEffect[EEndEffect["Win"] = 3] = "Win";
        EEndEffect[EEndEffect["None"] = 4] = "None";
      })(EEndEffect || (EEndEffect = exports('EEndEffect', {})));

      var EUserState;

      (function (EUserState) {
        EUserState[EUserState["None"] = 0] = "None";
        EUserState[EUserState["Waiting"] = 1] = "Waiting";
        EUserState[EUserState["Playing"] = 2] = "Playing";
      })(EUserState || (EUserState = exports('EUserState', {})));

      var EBetPotType;

      (function (EBetPotType) {
        EBetPotType[EBetPotType["SmallBlind"] = 0] = "SmallBlind";
        EBetPotType[EBetPotType["BigBlind"] = 1] = "BigBlind";
        EBetPotType[EBetPotType["Raise"] = 2] = "Raise";
        EBetPotType[EBetPotType["Call"] = 3] = "Call";
      })(EBetPotType || (EBetPotType = exports('EBetPotType', {})));

      var PokerInforPanel = exports('PokerInforPanel', (_dec = ccclass('PokerInforPanel'), _dec2 = property({
        type: Sprite,
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
      }), _dec6 = property({
        type: Label,
        visible: true
      }), _dec7 = property({
        type: RotateObject,
        visible: true
      }), _dec8 = property({
        type: Node,
        visible: true
      }), _dec9 = property({
        type: UserNotiOption,
        visible: true
      }), _dec10 = property({
        type: UserHandRankUI,
        visible: true
      }), _dec11 = property({
        type: Node,
        visible: true
      }), _dec12 = property({
        type: Node,
        visible: true
      }), _dec13 = property({
        type: Node,
        visible: true
      }), _dec14 = property({
        type: Sprite,
        visible: true
      }), _dec15 = property({
        type: SpriteFrame,
        visible: true
      }), _dec16 = property({
        visible: true
      }), _dec17 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_CardUserPanel) {
        _inheritsLoose(PokerInforPanel, _CardUserPanel);

        function PokerInforPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _CardUserPanel.call.apply(_CardUserPanel, [this].concat(args)) || this;
          _this.PlayerId = void 0;
          _this.PanelState = EUserState.None;

          _initializerDefineProperty(_this, "_sprAvatar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sprCountDown", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtName", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtChip", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtCurrentBet", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_winEffect", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_endEffectGroup", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userNotiOptions", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userHandRankUI", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_avatarHolder", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_betPotHolder", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_dealerIcon", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sprBetPot", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_listBetPotSpriteFrame", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isFlipCountDown", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isReverseCountDown", _descriptor16, _assertThisInitialized(_this));

          _this._currentBet = 0;
          _this._countDownTween = void 0;
          _this._userCards = [];
          _this._userRank = HandRank.HighCard;
          _this._isFold = false;
          return _this;
        }

        var _proto = PokerInforPanel.prototype; //#endregion

        _proto.showNoti = function showNoti(optionType, autoHide) {
          if (autoHide === void 0) {
            autoHide = true;
          }

          AudioHelper.playTapSound();

          this._userNotiOptions.forEach(function (option) {
            option.showNoti(optionType, autoHide);
          }); // this._userNotiOption[0].showNoti(optionType, autoHide);
          // this._userNotiHiddenOption.showNoti(optionType, autoHide);

        };

        _proto.spawnFloatingText = function spawnFloatingText(value, isAdd, onComplete) {
          var _this2 = this;

          if (isAdd === void 0) {
            isAdd = false;
          }

          var node = this.poolManager.spawnNodeByType(EPoolType.FloatingText, this.node);
          var floatingText = node.getComponent(FloatingObject);
          node.worldPosition = this.node.worldPosition;
          floatingText.getUIObject(Label).string = "" + (isAdd ? '+' : '-') + value;
          floatingText.setDistance(80).setFloatDuration(0.5).setFadeDuration(0.2).doPlay(function () {
            if (onComplete) onComplete();

            _this2.poolManager.despawnNode(node);
          });
        };

        _proto.doCountDown = function doCountDown(duration, remainTime, onComplete) {
          var _this3 = this;

          if (remainTime === void 0) {
            remainTime = duration;
          }

          this._sprCountDown.node.active = true;
          var ratio = remainTime / duration;
          var direction = this._isFlipCountDown ? -1 : 1;
          var startVal = 0;
          var endVal = 0;

          if (this._isReverseCountDown) {
            startVal = (1 - ratio) * direction;
            endVal = 1 * direction;
          } else {
            startVal = ratio * direction;
            endVal = 0;
          }

          this._sprCountDown.fillRange = startVal;

          if (this._countDownTween) {
            this._countDownTween.stop();
          }

          this._countDownTween = tween(this._sprCountDown).to(remainTime, {
            fillRange: endVal
          }).call(function () {
            onComplete == null ? void 0 : onComplete();
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

        _proto.setBalance = function setBalance(balance) {
          this._txtChip.string = balance.toString();
          return this;
        };

        _proto.setAvatar = function setAvatar(spriteFrame) {
          this._sprAvatar.spriteFrame = spriteFrame;
          return this;
        };

        _proto.setCurrentBet = function setCurrentBet(currentBet) {
          this._currentBet = currentBet;
          this._txtCurrentBet.string = this._currentBet.toString();

          if (currentBet > 0) {
            this._txtCurrentBet.node.active = true;
          } else {
            this._txtCurrentBet.node.active = false;
          }

          return this;
        };

        _proto.resetState = function resetState() {
          this._userNotiOptions.forEach(function (option) {
            option.hideNoti();
          });

          this._currentBet = 0;
          this.setCurrentBet(0);
          this._currentCardIndex = 0;

          this._cardViews.forEach(function (c) {
            c.node.active = false;
            c.resetState();
          });

          this._winEffect.setRotate(false);

          this._endEffectGroup.forEach(function (effect) {
            effect.active = false;
          });

          this._userCards = [];

          this._cardViews.forEach(function (card) {
            card.setActiveModel(false);
          });

          this.onUpdateUIWhenFold(false);
          this._cardHiddenHolder.active = false;
          this._cardShowingHolder.active = false;
          this._sprCountDown.node.active = false;
          this._txtCurrentBet.node.active = false;

          this._cardHidden.forEach(function (c) {
            return c.active = false;
          });

          this._userHandRankUI.node.active = false;

          this._userHandRankUI.hideAllHandRank();

          this._userRank = HandRank.HighCard;
          this._isFold = false;
          this.onShowBetPot(false);
          this.onShowDealerIcon(false);
        };

        _proto.onUpdateChip = function onUpdateChip(currentChip) {
          this._txtChip.string = currentChip.toString();
          return this;
        };

        _proto.highlightCards = function highlightCards(cards) {
          this._cardViews.forEach(function (cv) {
            cv.checkCardEffect(cards);
          });
        };

        _proto.setCardEffect = function setCardEffect(cardEffect) {
          this._cardViews.forEach(function (cv) {
            cv.setEffect(cardEffect);
          });
        };

        _proto.onWin = function onWin() {
          this.setEndEffect(EEndEffect.Win);

          this._winEffect.setRotate(true);

          this._winEffect.node.scale = v3(0, 0, 0);
          tween(this._winEffect.node).to(0.2, {
            scale: v3(1, 1, 1)
          }).start();
        };

        _proto.onSetUserDataUI = function onSetUserDataUI(name, avatarUrl, isUser) {
          if (isUser === void 0) {
            isUser = false;
          } //console.log("======== set ");


          this._txtName.string = name;
          this.GetPlayerImg(avatarUrl);

          this._cardViews.forEach(function (card) {
            card.setActiveModel(false);
          });

          if (isUser) {
            this.onShowCardViewsHolder(true);
          } else {
            this.onShowCardViewsHolder(false);
          }
        };

        _proto.onShowCardViewsHolder = function onShowCardViewsHolder(isShow) {
          //console.log(" on show =========");
          this._cardShowingHolder.active = isShow;
          this._cardHiddenHolder.active = !isShow;
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
          var _onShowCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(flipTime) {
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
                    this.onShowCardViewsHolder(true);

                    this._cardViews.forEach(function (card) {
                      _this4.miniAudio.playSFX(ESFXId.SFX_CardFlip);

                      card.doFlip(true, flipTime);
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function onShowCard(_x2) {
            return _onShowCard.apply(this, arguments);
          }

          return onShowCard;
        }();

        _proto.onSortCardViews = /*#__PURE__*/function () {
          var _onSortCardViews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this5 = this;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return AsyncUtils.waitForCondition(function () {
                      return _this5._userCards.length >= 2;
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function onSortCardViews() {
            return _onSortCardViews.apply(this, arguments);
          }

          return onSortCardViews;
        }();

        _proto.onUpdateUIWhenFold = function onUpdateUIWhenFold(isFold) {
          this._txtCurrentBet.node.active = !isFold;
          this._cardShowingHolder.active = !isFold;
          this._cardHiddenHolder.active = !isFold;
          this._isFold = isFold;
          this.onShowBetPot(false);
          this.setCurrentBet(0);

          if (isFold) {
            Tweener.Transparency({
              uiRenderer: this._avatarHolder.getComponent(Sprite),
              startAlpha: 255,
              endAlpha: 155,
              duration: 0.1
            });
            this.setEndEffect(EEndEffect.Fold);
          } else {
            Tweener.Transparency({
              uiRenderer: this._avatarHolder.getComponent(Sprite),
              startAlpha: 155,
              endAlpha: 255,
              duration: 0.1
            });
          }
        };

        _proto.setEndEffect = function setEndEffect(endEffect) {
          this._endEffectGroup.forEach(function (effect) {
            effect.active = false;
          });

          switch (endEffect) {
            case EEndEffect.Fold:
              this._endEffectGroup[EEndEffect.Fold].active = true;
              break;

            case EEndEffect.Lose:
              this._endEffectGroup[EEndEffect.Lose].active = true;
              break;

            case EEndEffect.Draw:
              this._endEffectGroup[EEndEffect.Draw].active = true;
              break;

            case EEndEffect.Win:
              this._endEffectGroup[EEndEffect.Win].active = true;
              break;
          }
        };

        _proto.onShowHandRankBanner = function onShowHandRankBanner(cardOnTable, callback) {
          var bestHand = {
            rank: HandRank.HighCard,
            tiebreaker: []
          };

          var _CheckHandRank$checkH = CheckHandRank.checkHandRank(this._userCards, cardOnTable),
              handRank = _CheckHandRank$checkH[0],
              bestCombination = _CheckHandRank$checkH[1];

          this._userRank = handRank.rank;
          this.showHandRankBanner(handRank.rank); // get Core Card

          var coreCard = CheckHandRank.getCoreCards(bestCombination, handRank.rank);
          console.log("Core card := ", coreCard.map(function (c) {
            return c.rank + " of " + c.suit;
          })); // this._cardViews.forEach(cv => {
          //     cv.checkCardEffect(coreCard);
          // });
          // if (callback) {
          //     if (!this._isFold) {
          //         callback(coreCard, true);
          //     } else {
          //         callback(coreCard, false);
          //     }
          // }
        };

        _proto.showHandRankBanner = function showHandRankBanner(handRank) {
          this._userHandRankUI.node.active = true;

          this._userHandRankUI.showHandRank(handRank);
        };

        _proto.onCheckHandRank = function onCheckHandRank(cardOnTable) {
          var bestHand = {
            rank: HandRank.HighCard,
            tiebreaker: []
          };

          var _CheckHandRank$checkH2 = CheckHandRank.checkHandRank(this._userCards, cardOnTable),
              handRank = _CheckHandRank$checkH2[0],
              bestCombination = _CheckHandRank$checkH2[1];

          this._userRank = handRank.rank;
        };

        _proto.onShowBetPot = function onShowBetPot(isActive, betPotType, betAmount) {
          this.BetPotHolder.active = isActive;

          if (isActive && betPotType !== undefined && betAmount !== undefined) {
            this.onUpdateUIOnActionBetPot(betPotType, betAmount);
          }
        };

        _proto.onUpdateUIOnActionBetPot = function onUpdateUIOnActionBetPot(betPotType, betAmount) {
          switch (betPotType) {
            case EBetPotType.SmallBlind:
              this._sprBetPot.spriteFrame = this._listBetPotSpriteFrame[EBetPotType.SmallBlind];
              break;

            case EBetPotType.BigBlind:
              this._sprBetPot.spriteFrame = this._listBetPotSpriteFrame[EBetPotType.BigBlind];
              break;

            case EBetPotType.Raise:
              this._sprBetPot.spriteFrame = this._listBetPotSpriteFrame[EBetPotType.Raise];
              break;

            case EBetPotType.Call:
              this._sprBetPot.spriteFrame = this._listBetPotSpriteFrame[EBetPotType.Call];
              break;
          }

          this.setCurrentBet(this._currentBet + betAmount);
        };

        _proto.onShowDealerIcon = function onShowDealerIcon(isShow) {
          this._dealerIcon.active = isShow;
        };

        _createClass(PokerInforPanel, [{
          key: "UserRank",
          get: //#region Getter & Setter
          function get() {
            return this._userRank;
          }
        }, {
          key: "BetPotHolder",
          get: function get() {
            return this._betPotHolder;
          }
        }, {
          key: "CurrentBet",
          get: function get() {
            return this._currentBet;
          }
        }]);

        return PokerInforPanel;
      }(CardUserPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprAvatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sprCountDown", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_txtName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_txtChip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_txtCurrentBet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_winEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_endEffectGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_userNotiOptions", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_userHandRankUI", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_avatarHolder", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_betPotHolder", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_dealerIcon", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_sprBetPot", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_listBetPotSpriteFrame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_isFlipCountDown", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_isReverseCountDown", [_dec17], {
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

System.register("chunks:///_virtual/PokerLobbyAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAdapter.ts', './NetworkManager.ts', './DefinePoker.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseAdapter, MESSAGE, POKER_LOBBY_KEYS;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseAdapter = module.BaseAdapter;
    }, function (module) {
      MESSAGE = module.MESSAGE;
    }, function (module) {
      POKER_LOBBY_KEYS = module.POKER_LOBBY_KEYS;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "391b7Xy/CNEtLw7/uGzxHIR", "PokerLobbyAdapter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      var PokerLobbyAdapter = exports('PokerLobbyAdapter', (_dec = ccclass('PokerLobbyAdapter'), _dec(_class = /*#__PURE__*/function (_BaseAdapter) {
        _inheritsLoose(PokerLobbyAdapter, _BaseAdapter);

        function PokerLobbyAdapter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseAdapter.call.apply(_BaseAdapter, [this].concat(args)) || this;
          _this.onGetRooms = void 0;

          _this.onGetRoomsTypeResponse = function (data) {
            var datas = data.datas;
            _this.onGetRooms == null ? void 0 : _this.onGetRooms(datas);
          };

          return _this;
        }

        var _proto = PokerLobbyAdapter.prototype;

        _proto.onDestroy = function onDestroy() {
          if (!this.network) return;
          this.network.off(POKER_LOBBY_KEYS.GetTables, this.onGetRoomsTypeResponse);
        };

        _proto.init = function init() {
          _BaseAdapter.prototype.init.call(this);

          this.network.on(POKER_LOBBY_KEYS.GetTables, this.onGetRoomsTypeResponse);
        };

        _proto.getRooms = function getRooms(zoneName, pluginName) {
          var message = {
            action: "get_room_types",
            requestId: this.getRandomRequestId(),
            payload: {}
          };
          this.network.send([MESSAGE.ZONE_PLUGIN, zoneName, pluginName, message]);
        };

        return PokerLobbyAdapter;
      }(BaseAdapter)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerLobbyController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './ServiceLocator.ts', './RoomConfig.ts', './DefinePoker.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, Define, ServiceLocator, EMiniGameType, DefinePoker;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      EMiniGameType = module.EMiniGameType;
    }, function (module) {
      DefinePoker = module.DefinePoker;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "87a77HBqIJNqZn4wihNzomj", "PokerLobbyController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      var PokerLobbyController = exports('PokerLobbyController', (_dec = ccclass('PokerLobbyController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerLobbyController, _Component);

        function PokerLobbyController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._plugin = "pokerGame";
          _this._pokerLobbyAdapter = null;
          _this._session = null;
          _this._roomConfig = null;
          _this._onGetRoomsSuccess = void 0;
          return _this;
        }

        var _proto = PokerLobbyController.prototype;

        _proto.init = function init() {
          this._roomConfig = ServiceLocator.get(Define.Service.RoomConfig);
          this._session = ServiceLocator.get(Define.Service.SessionManager);
          this._pokerLobbyAdapter = ServiceLocator.get(DefinePoker.Service.Adapter.PokerLobby);
        };

        _proto.onLoad = function onLoad() {
          var roomData = this._roomConfig.getRoomDataByType(EMiniGameType.Poker);

          this._plugin = roomData.PluginName;

          this._session.setPlugin(roomData.PluginName);

          this._pokerLobbyAdapter.onGetRooms = this.onGetRooms.bind(this);
        };

        _proto.onDestroy = function onDestroy() {
          this._pokerLobbyAdapter.getRooms = null;
        };

        _proto.getRooms = function getRooms(onSuccess) {
          this._onGetRoomsSuccess = onSuccess;

          this._pokerLobbyAdapter.getRooms(this._session.CurrentZone, this._plugin);
        };

        _proto.clearZone = function clearZone() {
          this._session.clearZone();
        };

        _proto.onGetRooms = function onGetRooms(data) {
          var _this$_onGetRoomsSucc;

          (_this$_onGetRoomsSucc = this._onGetRoomsSuccess) == null ? void 0 : _this$_onGetRoomsSucc.call(this, data);
        };

        return PokerLobbyController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerGameplayManager.ts', './PokerController.ts', './MinigameUIManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, PokerGameplayManager, PokerController, MinigameUIManager;

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
      Component = module.Component;
    }, function (module) {
      PokerGameplayManager = module.PokerGameplayManager;
    }, function (module) {
      PokerController = module.PokerController;
    }, function (module) {
      MinigameUIManager = module.MinigameUIManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "12a48EpU7hMw4BEZ27Bzh3t", "PokerManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerManager = exports('PokerManager', (_dec = ccclass('PokerManager'), _dec2 = property({
        type: MinigameUIManager,
        visible: true
      }), _dec3 = property({
        type: PokerGameplayManager,
        visible: true
      }), _dec4 = property({
        type: PokerController,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerManager, _Component);

        function PokerManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_pokerUI", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pokerGameplay", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pokerController", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PokerManager.prototype;

        _proto.start = function start() {
          {
            this.quickStart();
          }
        };

        _proto.quickStart = function quickStart() {
          this.initGame();
          this.startGame();
        };

        _proto.initGame = function initGame() {
          console.warn('On first init game when created');

          this._pokerUI.init();
        };

        _proto.startGame = function startGame() {
          console.warn('First start game');

          this._pokerUI.resetState();
        } // **********************OFFLINE**********************
        // private loadUsersMoney(): void {
        //     const moneys = this._pokerGameplay.getUsersMoney();
        //     this._pokerUI.loadUserCurrency(moneys);
        // }
        // private onLoadRoomID(): void {
        //     let roomId = '';
        //     const desiredLength = 10;
        //     for (let i = 0; i < desiredLength; i++) {
        //         // Generates a random integer from 0 up to, but not including, 10 (i.e., 0-9)
        //         const digit = Math.floor(Math.random() * 10);
        //         roomId += digit.toString();
        //     }
        //     this._pokerUI.loadRoomID(roomId);
        // }
        //#region Cheat
        // private async fetchLeaderboard(): Promise<ILeaderboardPlayers> {
        //     const url = "https://res.cloudinary.com/dvqf9cl2u/raw/upload/v1764349688/test_wbluf8.json";
        //     return await DowloadHandler.DownloadJSONByUrl<ILeaderboardPlayers>(url);
        // }
        // private async onLoadLeaderboard(): Promise<void> {
        //     ServiceLocator.get<IUIManager>(Define.Service.UIManager).showPopup(EUIPopups.Loading);
        //     try {
        //         const data = await this.fetchLeaderboard();
        //         if (data) {
        //             this.cheatLoadDataUser(data);
        //         }
        //     } catch (err) {
        //         console.error("[UILeaderboard] Failed to load leaderboard:", err);
        //     }
        // }
        // private cheatLoadDataUser(data: ILeaderboardPlayers) {
        //     this._pokerUI.loadUser();
        //     data.players.forEach(player => {
        //         this._pokerUI.loadPlayer(player);
        //     });
        // }
        ;

        _createClass(PokerManager, [{
          key: "cheatPokerUI",
          get: function get() {
            return null;
          }
        }, {
          key: "cheatPokerGameplay",
          get: function get() {
            return null;
          } //#endregion

        }]);

        return PokerManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_pokerUI", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_pokerController", [_dec4], {
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

System.register("chunks:///_virtual/PokerSimpleAI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUserOptions.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, EUserOptions;

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
          var strength = null; //const strength = CheckHandRank.evaluateHandStrength(hand, tableCard);

          var randomFactor = Math.random();
          console.log("[PokerAI] Hand Strength: " + strength + ", Cost to Call: " + currentBetToCall + ", Chips: " + myChips);
          var action = EUserOptions.Fold;
          var amount = 0; // --- DECISION LOGIC TREE ---
          // 1. MONSTER HAND (Strength > 60)
          // e.g., High Sets, Straights, Flushes

          {
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

System.register("chunks:///_virtual/PokerTableUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDealer.ts', './UserHandRankUI.ts', './CardTableUI.ts', './CardView.ts', './HandRank.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, UIDealer, UserHandRankUI, CardTableUI, CardView, ECardEffect;

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
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      UIDealer = module.UIDealer;
    }, function (module) {
      UserHandRankUI = module.UserHandRankUI;
    }, function (module) {
      CardTableUI = module.CardTableUI;
    }, function (module) {
      CardView = module.CardView;
      ECardEffect = module.ECardEffect;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "ef5f4jkVWBHFrLvhRwtihWV", "PokerTableUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerTableUI = exports('PokerTableUI', (_dec = ccclass('PokerTableUI'), _dec2 = property({
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
        type: UIDealer,
        visible: true
      }), _dec8 = property({
        type: UserHandRankUI,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_CardTableUI) {
        _inheritsLoose(PokerTableUI, _CardTableUI);

        function PokerTableUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _CardTableUI.call.apply(_CardTableUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_cardViews", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_roomID", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_totalPot", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timerStartGame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardHolder", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_dealer", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userHandRankUI", _descriptor7, _assertThisInitialized(_this));

          _this._totalPotValue = void 0;
          _this._currentCardIndex = 0;
          _this._remainingTime = 0;
          _this._startCooldown = void 0;
          return _this;
        }

        var _proto = PokerTableUI.prototype;

        _proto.resetState = function resetState() {
          this._totalPotValue = 0;
          this.onUpdateTotalPot(this.TotalPotValue);
          this._currentCardIndex = 0;

          this._cardViews.forEach(function (c) {
            c.node.active = false;
            c.resetState();
          });

          this.onShowCardView(false);
          this._userHandRankUI.node.active = false;
        };

        _proto.showCard = function showCard(card, cardIndex) {
          var cardView = this._cardViews[cardIndex];
          this._currentCardIndex = cardIndex + 1;
          cardView.loadCard(card.suit, card.rank);
          cardView.setActiveModel(true);
        };

        _proto.onReceiveCard = function onReceiveCard(card, cardIndex, flipTime) {
          var cardView = this._cardViews[cardIndex];
          this._currentCardIndex = cardIndex + 1;
          cardView.loadCard(card.suit, card.rank);
          cardView.doFlip(true, flipTime);
        };

        _proto.onUpdateTotalPot = function onUpdateTotalPot(totalBet) {
          this._totalPotValue = totalBet;
          this._totalPot.string = totalBet.toString();
        };

        _proto.onAddToTotalPot = function onAddToTotalPot(addBet) {
          this._totalPotValue += addBet;
          this._totalPot.string = this._totalPotValue.toString();
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

        _proto.highlightCards = function highlightCards(cards) {
          this._cardViews.forEach(function (cv) {
            cv.checkCardEffect(cards);
          });
        };

        _proto.resetCardEffect = function resetCardEffect() {
          this._cardViews.forEach(function (cv) {
            cv.setEffect(ECardEffect.None);
          });
        };

        _proto.getCardPos = function getCardPos(cardIndex) {
          var cardNode = this._cardViews[cardIndex].node;
          return cardNode.worldPosition;
        };

        _proto.onSetAnimDealer = function onSetAnimDealer(animDealerType) {
          this._dealer.onPlayAnimation(animDealerType);
        };

        _proto.onShowCardView = function onShowCardView(show) {
          this._cardViews.forEach(function (card) {
            if (card.node.active != show) {
              //if (DEBUG) console.log("Show card view: ", show);
              card.node.active = show;
            }

            card.showFrame(show);
          });
        };

        _proto.onShowCardGlowEffect = function onShowCardGlowEffect(coreCard, isShow) {
          this._cardViews.forEach(function (cardView) {
            if (isShow) {
              cardView.checkCardEffect(coreCard);
            } else {
              cardView.setEffect(ECardEffect.None);
            }
          });
        };

        _proto.onShowHandRankWinner = function onShowHandRankWinner(handRank) {
          this._userHandRankUI.node.active = true;

          this._userHandRankUI.showHandRank(handRank);

          this._userHandRankUI.onPlayWinParticle();
        } // public onShowHandRankWinnerCompareCard(cardsUser: CardData[], cardsOnTalble: CardData[]): void {
        //     this._userHandRankUI.node.active = true;
        //     let bestHand = { rank: HandRank.HighCard, tiebreaker: [] as number[] };
        //     const [handRank, bestCombination] = CheckHandRank.checkHandRank(
        //         cardsUser,
        //         cardsOnTalble,
        //     );
        //     if (DEBUG) console.log("Show hand rank winner: ", HandRank[handRank.rank]);
        //     this._userHandRankUI.showHandRank(handRank.rank);
        // }
        ;

        _createClass(PokerTableUI, [{
          key: "totalPotNode",
          get: function get() {
            return this._totalPot.node;
          }
        }, {
          key: "TotalPotValue",
          get: function get() {
            return this._totalPotValue;
          }
        }, {
          key: "CurrentCardIndex",
          get: function get() {
            return this._currentCardIndex;
          }
        }]);

        return PokerTableUI;
      }(CardTableUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_cardViews", [_dec2], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_dealer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_userHandRankUI", [_dec8], {
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

System.register("chunks:///_virtual/PokerUIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerDepositLayer.ts', './PokerTableUI.ts', './MinigameUIManager.ts', './UserInforUI.ts', './UICardLayer.ts', './UIChipLayer.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, PokerDepositLayer, PokerTableUI, MinigameUIManager, UserInforUI, UICardLayer, UIChipLayer;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      PokerDepositLayer = module.PokerDepositLayer;
    }, function (module) {
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      MinigameUIManager = module.MinigameUIManager;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      UICardLayer = module.UICardLayer;
    }, function (module) {
      UIChipLayer = module.UIChipLayer;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4733avlpp1L8aY+fJSS5R23", "PokerUIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PokerUIManager = exports('PokerUIManager', (_dec = ccclass('PokerUIManager'), _dec(_class = /*#__PURE__*/function (_MinigameUIManager) {
        _inheritsLoose(PokerUIManager, _MinigameUIManager);

        function PokerUIManager() {
          return _MinigameUIManager.apply(this, arguments) || this;
        }

        var _proto = PokerUIManager.prototype;

        _proto.init = function init() {
          _MinigameUIManager.prototype.init.call(this);

          this.get(PokerTableUI).show();
          this.get(UserInforUI).show();
          this.get(PokerDepositLayer).show();
          this.get(UICardLayer).show();
          this.get(UIChipLayer).show();
        };

        return PokerUIManager;
      }(MinigameUIManager)) || _class));

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
          this.events.emit(this.ON_CHOOSING_OPTION, EUserOptions.Show);
        };

        _proto.getWinBet = function getWinBet(totolEarn) {
          if (totolEarn <= 0) return;
          this._totalEarn = totolEarn;

          this._userCurrency.add(totolEarn);

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

System.register("chunks:///_virtual/PoolHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _createClass, cclegacy, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17227KP7chOL5nX8bpQmjPt", "PoolHelper", undefined);

      var PoolHelper = exports('PoolHelper', /*#__PURE__*/function () {
        function PoolHelper() {}

        PoolHelper.spawnNode = function spawnNode(poolType, parent) {
          return this.poolManager.spawnNodeByType(poolType, parent);
        };

        PoolHelper.despawnNode = function despawnNode(node) {
          this.poolManager.despawnNode(node);
        };

        PoolHelper.clearAll = function clearAll() {
          this.poolManager.clearAll();
        };

        _createClass(PoolHelper, null, [{
          key: "poolManager",
          get: function get() {
            if (this._poolManager == null) {
              this._poolManager = ServiceLocator.get(Define.Service.PoolManager);
            }

            return this._poolManager;
          }
        }]);

        return PoolHelper;
      }());
      PoolHelper._poolManager = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts', './ResourcesUtils.ts'], function () {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, instantiate, NodePool, Component, Prefab, LogUtils, ResourceUtils;

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
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      Component = module.Component;
      Prefab = module.Prefab;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      ResourceUtils = module.ResourceUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "cb84egdEjdH16wZ7Wz9pZ85", "PoolManager", undefined);

      var property = _decorator.property,
          ccclass = _decorator.ccclass;
      var PoolManager = (_dec = ccclass('PoolManager'), _dec2 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PoolManager, _Component);

        function PoolManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_path", _descriptor, _assertThisInitialized(_this));

          _this._poolData = new Map();
          _this._poolMap = new Map();
          return _this;
        }

        var _proto = PoolManager.prototype;

        _proto.init = function init() {};

        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var prefabs;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return ResourceUtils.loadDir(this._path, Prefab);

                  case 2:
                    prefabs = _context.sent;

                    if (prefabs) {
                      prefabs.forEach(function (prefab) {
                        _this2._poolData.set(prefab.name, prefab);
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadData() {
            return _loadData.apply(this, arguments);
          }

          return loadData;
        }();

        _proto.spawnNodeByType = function spawnNodeByType(poolType, parent) {
          var prefab = this._poolData.get(poolType);

          if (!prefab) {
            LogUtils.error('Prefab not found');
            return null;
          }

          return this.spawnNode(prefab, parent);
        };

        _proto.spawnNode = function spawnNode(prefab, parent) {
          var name = prefab.name;

          var pool = this._poolMap.get(name);

          var node;

          if (pool && pool.size() > 0) {
            node = pool.get();
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
            this._poolMap.set(name, new NodePool());
          }

          this._poolMap.get(name).put(node);
        };

        _proto.clearAll = function clearAll() {
          this._poolMap.forEach(function (pool) {
            pool.clear();
          });

          this._poolMap.clear();
        };

        return PoolManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_path", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './Tweener.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, v3, Vec3, GameUI, Tweener, ETweenEasing;

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
      Node = module.Node;
      v3 = module.v3;
      Vec3 = module.Vec3;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ETweenEasing = module.ETweenEasing;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "aa204VZLGxPzL0eo1L6ZRY7", "PopupBase", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PopupBase = exports('PopupBase', (_dec = ccclass('PopupBase'), _dec2 = property({
        type: Sprite,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(PopupBase, _GameUI);

        function PopupBase() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "background", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "panelUI", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PopupBase.prototype;

        _proto.playAppearAnimation = function playAppearAnimation(background, panel) {
          Tweener.Transparency({
            uiRenderer: background,
            startAlpha: 0,
            endAlpha: 230,
            duration: 0.3
          });
          Tweener.LocalScale({
            target: panel,
            start: v3(1.1, 1.1, 1.1),
            end: Vec3.ONE,
            duration: 0.3,
            easingType: ETweenEasing.BackOut
          });
        };

        _proto.onShow = function onShow() {
          _GameUI.prototype.onShow.call(this);

          this.playAppearAnimation(this.background, this.panelUI);
        };

        return PopupBase;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelUI", [_dec3], {
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
          this._winners = new Map();
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
        }, {
          key: "Winners",
          get: function get() {
            return this._winners;
          },
          set: function set(winners) {
            this._winners = winners;
          }
        }]);

        return Pot;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesUtils.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, resources, assetManager, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      assetManager = module.assetManager;
    }, function (module) {
      LogUtils = module.LogUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62a02QLev9A2a6m5CrlBl0+", "ResourcesUtils", undefined);

      var ResourceUtils = exports('ResourceUtils', /*#__PURE__*/function () {
        function ResourceUtils() {}
        /**
         * Load một resource đơn lẻ (Prefab, SpriteFrame, AudioClip...)
         * @param path Đường dẫn trong folder resources (không cần đuôi file)
         * @param type Kiểu dữ liệu (Prefab, SpriteFrame...)
         */


        ResourceUtils.load = function load(path, type) {
          return new Promise(function (resolve) {
            resources.load(path, type, function (err, asset) {
              if (err) {
                LogUtils.error("\u274C Load Failed: [" + path + "]", err); // Resolve null để không crash Promise.all, nhưng logic bên ngoài phải check null

                resolve(null);
                return;
              }

              resolve(asset);
            });
          });
        }
        /**
         * Load toàn bộ folder (Dùng cho Audio, Texture pack...)
         * @param dirPath Đường dẫn thư mục
         * @param type Kiểu dữ liệu
         */
        ;

        ResourceUtils.loadDir = function loadDir(dirPath, type) {
          return new Promise(function (resolve) {
            resources.loadDir(dirPath, type, function (err, assets) {
              if (err) {
                LogUtils.error("\u274C Load Dir Failed: [" + dirPath + "]", err);
                resolve([]); // Trả về mảng rỗng để an toàn

                return;
              }

              LogUtils.log("\u2705 Loaded Dir [" + dirPath + "]: " + assets.length + " items");
              resolve(assets);
            });
          });
        }
        /**
         * Load ảnh từ URL (Avatar người chơi, ảnh quảng cáo...)
         * @param url Link ảnh (https://...)
         */
        ;

        ResourceUtils.loadRemote = function loadRemote(url, options) {
          return new Promise(function (resolve) {
            assetManager.loadRemote(url, options, function (err, asset) {
              if (err) {
                LogUtils.error("\u274C Load Remote Failed: [" + url + "]", err);
                resolve(null);
                return;
              }

              resolve(asset);
            });
          });
        }
        /**
         * Preload (Tải ngầm vào cache nhưng không trả về object)
         */
        ;

        ResourceUtils.preload = function preload(path, type) {
          return new Promise(function (resolve) {
            resources.preload(path, type, function (err) {
              if (err) {
                LogUtils.error("\u274C Preload Failed: [" + path + "]", err);
              }

              resolve();
            });
          });
        }
        /**
         * Giải phóng tài nguyên (Quan trọng để tránh tràn RAM)
         */
        ;

        ResourceUtils.release = function release(path) {
          resources.release(path);
          LogUtils.log("\u267B\uFE0F Released: " + path);
        };

        return ResourceUtils;
      }());

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

System.register("chunks:///_virtual/RoomConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }],
    execute: function () {
      exports('EMiniGameType', void 0);

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec3, _dec4, _class4, _class5, _descriptor6;

      cclegacy._RF.push({}, "563b2uTH/FPUYHEbqrGUyfj", "RoomConfig", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EMiniGameType;

      (function (EMiniGameType) {
        EMiniGameType[EMiniGameType["Poker"] = 0] = "Poker";
      })(EMiniGameType || (EMiniGameType = exports('EMiniGameType', {})));

      var RoomData = (_dec = ccclass('RoomData'), _dec2 = property({
        type: Enum(EMiniGameType)
      }), _dec(_class = (_class2 = function RoomData() {
        _initializerDefineProperty(this, "GameType", _descriptor, this);

        _initializerDefineProperty(this, "GameSceneName", _descriptor2, this);

        _initializerDefineProperty(this, "PluginName", _descriptor3, this);

        _initializerDefineProperty(this, "MinRoomID", _descriptor4, this);

        _initializerDefineProperty(this, "MaxRoomID", _descriptor5, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EMiniGameType.Poker;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameSceneName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PluginName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "MinRoomID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MaxRoomID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class);
      var RoomConfig = exports('RoomConfig', (_dec3 = ccclass('RoomConfig'), _dec4 = property({
        type: RoomData,
        visible: true
      }), _dec3(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomConfig, _Component);

        function RoomConfig() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_roomDatas", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = RoomConfig.prototype;

        _proto.init = function init() {};

        _proto.getRoomDataByID = function getRoomDataByID(roomId) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._roomDatas), _step; !(_step = _iterator()).done;) {
            var data = _step.value;

            if (roomId >= data.MinRoomID && roomId <= data.MaxRoomID) {
              return data;
            }
          }

          return null;
        };

        _proto.getRoomDataByType = function getRoomDataByType(type) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._roomDatas), _step2; !(_step2 = _iterator2()).done;) {
            var data = _step2.value;

            if (type === data.GameType) {
              return data;
            }
          }

          return null;
        };

        return RoomConfig;
      }(Component), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "_roomDatas", [_dec4], {
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
        initializer: function initializer() {
          return 0;
        }
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
          Tweener.LocalRotateEuler({
            target: this.node,
            start: this._eulerStart,
            end: this._eulerEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.RotateEulerBetween = function RotateEulerBetween() {
          Tweener.LocalRotateEulerBetween({
            target: this.node,
            start: this._eulerStart,
            end: this._eulerEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.RotateQuatTo = function RotateQuatTo() {
          Tweener.LocalRotateQuat({
            target: this.node,
            start: this._quatStart,
            end: this._quatEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.RotateQuatBetween = function RotateQuatBetween() {
          Tweener.LocalRotateQuatBetween({
            target: this.node,
            start: this._quatStart,
            end: this._quatEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
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
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Enter");

          this.scaleUp();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Exit");

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
          Tweener.LocalScale({
            target: this.node,
            start: this._scaleStart,
            end: this._scaleEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.scaleDown = function scaleDown() {
          Tweener.LocalScale({
            target: this.node,
            start: this._scaleEnd,
            end: this._scaleStart,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
        };

        _proto.scaleUpDown = function scaleUpDown() {
          // Scale up first, then scale down
          Tweener.LocalScaleCycle({
            target: this.node,
            start: this._scaleStart,
            end: this._scaleEnd,
            duration: this.Duration,
            easingType: this.Easing,
            loop: this.Loop,
            repeat: this.Repeat
          });
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

System.register("chunks:///_virtual/SceneUtils.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, director, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      LogUtils = module.LogUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77fb5nwwiVAGafVUswHvP3c", "SceneUtils", undefined);

      var SceneUtils = exports('SceneUtils', /*#__PURE__*/function () {
        function SceneUtils() {}

        SceneUtils.loadScene = function loadScene(sceneName, onLaunched) {
          director.loadScene(sceneName, function (err, scene) {
            if (err) {
              LogUtils.error("[SceneUtils] L\u1ED7i kh\xF4ng t\xECm th\u1EA5y scene: " + sceneName);
              return;
            }

            LogUtils.log("[SceneUtils] \u0110\xE3 chuy\u1EC3n sang: " + sceneName);
            if (onLaunched) onLaunched();
          });
        };

        SceneUtils.preloadScene = function preloadScene(sceneName, onProgress, onLoadedResult) {
          director.preloadScene(sceneName, function (completedCount, totalCount, item) {
            var progress = completedCount / totalCount;
            if (onProgress) onProgress(progress);
          }, function (error) {
            if (error) {
              LogUtils.error("[SceneUtils] L\u1ED7i preload scene: " + sceneName, error);
            } else {
              LogUtils.log("[SceneUtils] \u0110\xE3 t\u1EA3i xong t\xE0i nguy\xEAn: " + sceneName);
            }

            onLoadedResult == null ? void 0 : onLoadedResult(error ? false : true);
          });
        };

        SceneUtils.reloadCurrentScene = function reloadCurrentScene() {
          var currentScene = director.getScene();

          if (currentScene) {
            var sceneName = currentScene.name;
            LogUtils.log("[SceneUtils] \u0110ang reload scene: " + sceneName);
            director.loadScene(sceneName);
          }
        };

        return SceneUtils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceInitializer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ActionAfterInit.ts', './ServiceLocator.ts', './Define.ts', './AsyncUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, ActionAfterInit, ServiceLocator, Define, AsyncUtils;

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
      ActionAfterInit = module.ActionAfterInit;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "ab012RjjVdODqn5dvF4Vr5t", "ServiceInitializer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ServiceInitializer = exports('ServiceInitializer', (_dec = ccclass('ServiceInitializer'), _dec2 = property({
        type: ActionAfterInit,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ServiceInitializer, _Component);

        function ServiceInitializer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_actionComponent", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ServiceInitializer.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var gameController, audio, userProfile, adapter;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return AsyncUtils.waitForNextFrame();

                  case 2:
                    gameController = ServiceLocator.get(Define.Service.GameController);
                    audio = ServiceLocator.get(Define.Service.AudioManager);
                    userProfile = ServiceLocator.get(Define.Service.UserProfile);
                    adapter = ServiceLocator.get(Define.Service.Adapter.Global);
                    gameController == null ? void 0 : gameController.init();
                    adapter.init();
                    audio.init();
                    userProfile.init();

                    if (this._actionComponent) {
                      _context.next = 12;
                      break;
                    }

                    return _context.abrupt("return");

                  case 12:
                    this._actionComponent.execute();

                  case 13:
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

        return ServiceInitializer;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_actionComponent", [_dec2], {
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

System.register("chunks:///_virtual/ServiceInstaller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts'], function () {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, js, ServiceLocator;

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
      js = module.js;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "cdc50uSoc9OUqnxH9BEftga", "ServiceInstaller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      var ServiceInstaller = (_dec = ccclass('ServiceInstaller'), _dec2 = executionOrder(-100), _dec3 = property([Component]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
              key = js.getClassName(service);
            }

            var sv = service;
            ServiceLocator.register(key, sv);
          });
          this.services.forEach(function (service) {
            var sv = service;
            sv.init();
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
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "services", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceLocator.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogUtils = module.LogUtils;
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
            LogUtils.warn("[ServiceLocator] Key '" + key + "' \u0111\xE3 t\u1ED3n t\u1EA1i. \u0110ang ghi \u0111\xE8...");
          }

          this._services.set(key, service);

          LogUtils.log("[ServiceLocator] \u0110\xE3 \u0111\u0103ng k\xFD: " + key);
        }
        /**
         * Lấy Service và tự động ép kiểu sang Interface T
         * @param key Tên định danh
         */
        ;

        ServiceLocator.get = function get(key) {
          if (!this._services.has(key)) {
            LogUtils.warn("[ServiceLocator] Kh\xF4ng t\xECm th\u1EA5y service v\u1EDBi key: '" + key + "'");
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

            LogUtils.log("[ServiceLocator] \u0110\xE3 h\u1EE7y: " + key);
          }
        }
        /**
         * Xóa sạch (Dùng khi reset game)
         */
        ;

        ServiceLocator.clear = function clear() {
          this._services.clear();

          LogUtils.log("[ServiceLocator] \u0110\xE3 x\xF3a to\xE0n b\u1ED9 services.");
        };

        return ServiceLocator;
      }());
      ServiceLocator._services = new Map();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SessionManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts'], function () {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, LogUtils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      LogUtils = module.LogUtils;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1627dsKOm5Ln6/OLK9Cr4ad", "SessionManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SessionManager = (_dec = ccclass('SessionManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SessionManager, _Component);

        function SessionManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._zoneName = null;
          _this._pluginName = null;
          _this._room = null;
          return _this;
        }

        var _proto = SessionManager.prototype;

        _proto.init = function init() {};

        _proto.setZone = function setZone(zoneName) {
          this._zoneName = zoneName;
          this._pluginName = null;
          this._room = null;
          LogUtils.log("\u2705 Set Zone: " + this._zoneName);
        };

        _proto.setPlugin = function setPlugin(pluginName) {
          this._pluginName = pluginName;
          LogUtils.log("\u2705 Set Plugin: " + this._pluginName);
        };

        _proto.clearZone = function clearZone() {
          this._zoneName = null;
          this._pluginName = null;
          this._room = null;
        };

        _proto.setRoom = function setRoom(info) {
          if (!this._zoneName && !this._pluginName) {
            LogUtils.warn("⚠️ Warning: Setting room without a Zone!");
          }

          this._room = info;
          LogUtils.log("\u2705 Set Room: " + info.roomName);
        };

        _proto.clearRoom = function clearRoom() {
          this._room = null;
        };

        _proto.isInGame = function isInGame() {
          return this._room !== null;
        };

        _createClass(SessionManager, [{
          key: "CurrentZone",
          get: function get() {
            return this._zoneName;
          }
        }, {
          key: "CurrentPlugin",
          get: function get() {
            return this._pluginName;
          }
        }, {
          key: "CurrentRoom",
          get: function get() {
            return this._room;
          }
        }]);

        return SessionManager;
      }(Component)) || _class);

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

System.register("chunks:///_virtual/ShowhandBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './EUserOptions.ts', './UserHUD.ts', './UserManager.ts', './ServiceLocator.ts', './AsyncUtils.ts', './UserInforUI.ts', './HandRank.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseBehaviour, EUserOptions, UserHUD, UserManager, ServiceLocator, AsyncUtils, UserInforUI, HandRank;

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
      UserHUD = module.UserHUD;
    }, function (module) {
      UserManager = module.UserManager;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }, function (module) {
      HandRank = module.HandRank;
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

          ServiceLocator.unregister("CardData");

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

            this.onHudOptionSend(EUserOptions.Show);
          } else if (this._currentUser.PokerAI != null) {
            this._currentPanel = this.getUserPanelByUser();

            this._currentUser.startTurn();

            this._currentPanel.doCountDown(10, 10, function () {
              _this2.onHudOptionSend(EUserOptions.Fold);
            });

            this.onDelayAIShow();
          } else if (this._currentUser) {
            this._currentPanel = this.getUserPanelByUser();

            this._currentUser.startTurn();

            this._currentPanel.doCountDown(10, 10, function () {
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

              this._currentPanel.onUpdateUIWhenFold(true);

              this._currentPanel.showNoti(eUserOptions);

              break;

            case EUserOptions.Show:
              // const [userHand, combination] = CheckHandRank.checkHandRank(
              //     this._currentUser.cards,
              //     this.gameplayManager.getMiniManager(TableManager).getCardsOnTable()
              // );
              var userHand = null;
              var cardMap = ServiceLocator.get("CardData");

              var index = this._userManager.getIndexByUser(this._currentUser);

              console.log(this._currentUser.node.name + " is showhand with \n                    cards: " + HandRank[userHand.rank] + " - " + userHand.tiebreaker);

              this._currentPanel.onShowCard(this.config.TimeFlip);

              this._currentPanel.showNoti(eUserOptions, true);

              break;
          }

          this._currentUser.endTurn();

          this._currentPanel.stopCountDown();

          this._userHUDUI.hide();

          this.handleNextUser();
        };

        _proto.getUserPanelByUser = function getUserPanelByUser() {
          //return this._userInforUI.getPanel(this._userManager.getIndexByUser(this._currentUser));
          return null;
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
                    this.onHudOptionSend(EUserOptions.Show);

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

          var deckManager = this.gameplayManager.getMiniManager(DeckManager); //deckManager.shuffleDeck();

          this.endBehaviour();
        };

        return ShuffleBehaviour;
      }(BaseBehaviour)) || _class));

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

System.register("chunks:///_virtual/Timer.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f769jscnxGm4uc9H/Bm1zK", "Timer", undefined);

      var Timer = exports('Timer', /*#__PURE__*/function () {
        function Timer(id, canLog) {
          if (id === void 0) {
            id = "timer";
          }

          if (canLog === void 0) {
            canLog = false;
          }

          this._id = void 0;
          this._canLog = void 0;
          this._timerData = {
            time: 0
          };
          this._tweenRef = null;
          this._id = id;
          this._canLog = canLog;
        }
        /**
         * Bắt đầu đếm ngược
         * @param duration Tổng thời gian (ví dụ 15s)
         * @param onUpdate (Optional) Hàm gọi mỗi frame (trả về thời gian còn lại và tỉ lệ %)
         * @param onComplete (Optional) Hàm gọi khi hết giờ
         */


        var _proto = Timer.prototype;

        _proto.start = function start(duration, _onUpdate, onComplete) {
          var _this = this;

          this.stop();

          if (duration <= 0) {
            onComplete == null ? void 0 : onComplete();
            return;
          }

          this._timerData.time = duration;
          this._tweenRef = tween(this._timerData).to(duration, {
            time: 0
          }, {
            onUpdate: function onUpdate(target) {
              var progress = target.time / duration;
              _onUpdate == null ? void 0 : _onUpdate(target.time, progress);
            }
          }).call(function () {
            _this._tweenRef = null;
            onComplete == null ? void 0 : onComplete();
          }).start();
          if (!this._canLog) return;
          console.log("[Timer " + this._id + "] Started: " + duration + "s");
        }
        /**
         * Dừng timer ngay lập tức
         */
        ;

        _proto.stop = function stop() {
          if (this._tweenRef) {
            this._tweenRef.stop();

            this._tweenRef = null;
            if (!this._canLog) return;
            console.log("[Timer " + this._id + "] Stopped.");
          }
        }
        /**
         * Kiểm tra xem timer có đang chạy không
         */
        ;

        _proto.isRunning = function isRunning() {
          return this._tweenRef !== null;
        };

        _proto.getRemainTime = function getRemainTime() {
          var remainTime = Math.round(Math.max(0, this._timerData.time));
          return remainTime;
        };

        return Timer;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToggleUtils.ts", ['cc', './LogUtils.ts'], function (exports) {
  'use strict';

  var cclegacy, Toggle, LogUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Toggle = module.Toggle;
    }, function (module) {
      LogUtils = module.LogUtils;
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
            LogUtils.warn('[ToggleExtensions]  không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions] Toggle không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions] Toggle không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions]  không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions] Toggle không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions] Toggle không hợp lệ.');
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
            LogUtils.warn('[ToggleExtensions] Toggle không hợp lệ.');
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

System.register("chunks:///_virtual/Translate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAnimation.ts', './Tweener.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Enum, NodeEventType, Vec3, BaseAnimation, Tweener, ETranslateType;

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
      Tweener = module.Tweener;
    }, function (module) {
      ETranslateType = module.ETranslateType;
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
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Enter");

          this.play();
        };

        _proto.onHoverExit = function onHoverExit(e) {
          if (!this.PlayWhenHover) return; //LogUtils.log("On Hover Exit");

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
            Tweener.LocalTranslateTo({
              target: this.node,
              start: this.node.getPosition(),
              end: this._posEnd,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          } else {
            Tweener.GlobalTranslateTo({
              target: this.node,
              start: this.node.getPosition(),
              end: this._posEnd,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          }
        };

        _proto.TranslateToTarget = function TranslateToTarget() {
          if (!this._target) return;
          var start = this.node.getPosition();
          var end = this._isGlobal ? this._target.worldPosition : this._target.getPosition();

          if (!this._isGlobal) {
            Tweener.LocalTranslateTo({
              target: this.node,
              start: start,
              end: end,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          } else {
            Tweener.GlobalTranslateTo({
              target: this.node,
              start: this.node.worldPosition.clone(),
              end: end.clone(),
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          }
        };

        _proto.TranslateBetweenPosition = function TranslateBetweenPosition() {
          if (!this._isGlobal) {
            Tweener.LocalTranslateBetween({
              target: this.node,
              start: this._posStart,
              end: this._posEnd,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          } else {
            Tweener.GlobalTranslateBetween({
              target: this.node,
              start: this._posStart,
              end: this._posEnd,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          }
        };

        _proto.TranslateBetweenTarget = function TranslateBetweenTarget() {
          if (!this._target) return;
          var start = this._isGlobal ? this.node.worldPosition.clone() : this.node.getPosition();
          var end = this._isGlobal ? this._target.worldPosition.clone() : this._target.getPosition();

          if (!this._isGlobal) {
            Tweener.LocalTranslateBetween({
              target: this.node,
              start: start,
              end: end,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
          } else {
            Tweener.GlobalTranslateBetween({
              target: this.node,
              start: start,
              end: end,
              duration: this.Duration,
              easingType: this.Easing,
              loop: this.Loop,
              repeat: this.Repeat
            });
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

System.register("chunks:///_virtual/Tweener.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogUtils.ts', './ETween.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, tween, Tween, Vec3, Quat, Color, Component, LogUtils, ETweenEasing;

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
      LogUtils = module.LogUtils;
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
          LogUtils.log("[Tweener.stop] Stopped tween for target:", target);
        };

        Tweener.stopAll = function stopAll(target) {
          if (!target) {
            LogUtils.warn('[Tweener.stopAll] Target is undefined or null.');
            return;
          }

          LogUtils.log("[Tweener.stopAll] Stopped all tweens for target:", target);
          Tween.stopAllByTarget(target);
        } // // Only valid cocos above 3.8
        // public pause<T>(target?: T): void {
        //     if (!target) {
        //         LogUtils.log('')
        //         return;
        //     }
        //     tween(target).pause();
        // }
        // public resume<T>(target?: T): void {
        //     if (!target) {
        //         LogUtils.log('')
        //         return;
        //     }
        //     tween(target).resume();
        // }
        //#region Animation method

        /** Local translate (position) */
        ;

        Tweener.LocalTranslateTo = function LocalTranslateTo(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType = data.easingType,
              easingType = _data$easingType === void 0 ? ETweenEasing.Linear : _data$easingType,
              _data$loop = data.loop,
              loop = _data$loop === void 0 ? false : _data$loop,
              _data$repeat = data.repeat,
              repeat = _data$repeat === void 0 ? 0 : _data$repeat,
              callback = data.callback;
          target.setPosition(start);
          var tw = tween(target).to(duration, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return tw;
        };

        Tweener.LocalTranslateBetween = function LocalTranslateBetween(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType2 = data.easingType,
              easingType = _data$easingType2 === void 0 ? ETweenEasing.Linear : _data$easingType2,
              _data$loop2 = data.loop,
              loop = _data$loop2 === void 0 ? false : _data$loop2,
              _data$repeat2 = data.repeat,
              repeat = _data$repeat2 === void 0 ? 0 : _data$repeat2,
              callback = data.callback;
          target.setPosition(start);
          var tw = tween(target).to(duration, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Global translate (world position) */
        ;

        Tweener.GlobalTranslateTo = function GlobalTranslateTo(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType3 = data.easingType,
              easingType = _data$easingType3 === void 0 ? ETweenEasing.Linear : _data$easingType3,
              _data$loop3 = data.loop,
              loop = _data$loop3 === void 0 ? false : _data$loop3,
              _data$repeat3 = data.repeat,
              repeat = _data$repeat3 === void 0 ? 0 : _data$repeat3,
              callback = data.callback;
          target.worldPosition = start.clone();
          var tw = tween(target).to(duration, {}, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.GlobalTranslateBetween = function GlobalTranslateBetween(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType4 = data.easingType,
              easingType = _data$easingType4 === void 0 ? ETweenEasing.Linear : _data$easingType4,
              _data$loop4 = data.loop,
              loop = _data$loop4 === void 0 ? false : _data$loop4,
              _data$repeat4 = data.repeat,
              repeat = _data$repeat4 === void 0 ? 0 : _data$repeat4,
              callback = data.callback;
          target.worldPosition = start.clone();
          var tw = tween(target) // start → end
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local rotation (Euler angles) */
        ;

        Tweener.LocalRotateEuler = function LocalRotateEuler(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType5 = data.easingType,
              easingType = _data$easingType5 === void 0 ? ETweenEasing.Linear : _data$easingType5,
              _data$loop5 = data.loop,
              loop = _data$loop5 === void 0 ? false : _data$loop5,
              _data$repeat5 = data.repeat,
              repeat = _data$repeat5 === void 0 ? 0 : _data$repeat5,
              callback = data.callback;
          target.setRotationFromEuler(start.x, start.y, start.z);
          var tw = tween(target).to(duration, {}, {
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

        Tweener.LocalRotateEulerBetween = function LocalRotateEulerBetween(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType6 = data.easingType,
              easingType = _data$easingType6 === void 0 ? ETweenEasing.Linear : _data$easingType6,
              _data$loop6 = data.loop,
              loop = _data$loop6 === void 0 ? false : _data$loop6,
              _data$repeat6 = data.repeat,
              repeat = _data$repeat6 === void 0 ? 0 : _data$repeat6,
              callback = data.callback;
          target.setRotationFromEuler(start.x, start.y, start.z);
          var tw = tween(target).to(duration, {}, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local rotation (Quaternion) */
        ;

        Tweener.LocalRotateQuat = function LocalRotateQuat(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType7 = data.easingType,
              easingType = _data$easingType7 === void 0 ? ETweenEasing.Linear : _data$easingType7,
              _data$loop7 = data.loop,
              loop = _data$loop7 === void 0 ? false : _data$loop7,
              _data$repeat7 = data.repeat,
              repeat = _data$repeat7 === void 0 ? 0 : _data$repeat7,
              callback = data.callback;
          target.setRotation(start);
          var tw = tween(target).to(duration, {}, {
            easing: this.getEasingType(easingType),
            onUpdate: function onUpdate(target, ratio) {
              var q = new Quat();
              Quat.slerp(q, start, end, ratio);
              target.setRotation(q);
            }
          });
          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.LocalRotateQuatBetween = function LocalRotateQuatBetween(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType8 = data.easingType,
              easingType = _data$easingType8 === void 0 ? ETweenEasing.Linear : _data$easingType8,
              _data$loop8 = data.loop,
              loop = _data$loop8 === void 0 ? false : _data$loop8,
              _data$repeat8 = data.repeat,
              repeat = _data$repeat8 === void 0 ? 0 : _data$repeat8,
              callback = data.callback;
          target.setRotation(start);
          var tw = tween(target).to(duration, {}, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) looptw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Local scale */
        ;

        Tweener.LocalScale = function LocalScale(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType9 = data.easingType,
              easingType = _data$easingType9 === void 0 ? ETweenEasing.Linear : _data$easingType9,
              _data$loop9 = data.loop,
              loop = _data$loop9 === void 0 ? false : _data$loop9,
              _data$repeat9 = data.repeat,
              repeat = _data$repeat9 === void 0 ? 0 : _data$repeat9,
              callback = data.callback;
          target.setScale(start);
          var tw = tween(target).to(duration, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) tw.call(callback);
          looptw.start();
          return looptw;
        };

        Tweener.LocalScaleCycle = function LocalScaleCycle(data) {
          var target = data.target,
              start = data.start,
              end = data.end,
              duration = data.duration,
              _data$easingType10 = data.easingType,
              easingType = _data$easingType10 === void 0 ? ETweenEasing.Linear : _data$easingType10,
              _data$loop10 = data.loop,
              loop = _data$loop10 === void 0 ? false : _data$loop10,
              _data$repeat10 = data.repeat,
              repeat = _data$repeat10 === void 0 ? 0 : _data$repeat10,
              callback = data.callback;
          target.setScale(start);
          var tw = tween(target).to(duration, {
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

          var looptw = tween(target).then(tw);
          if (loop) looptw.repeatForever();else if (repeat > 0) looptw.repeat(repeat);
          if (callback) tw.call(callback);
          looptw.start();
          return looptw;
        }
        /** Transparency (fade in/out) */
        ;

        Tweener.Transparency = function Transparency(alphaData) {
          var uiRenderer = alphaData.uiRenderer,
              startAlpha = alphaData.startAlpha,
              endAlpha = alphaData.endAlpha,
              duration = alphaData.duration,
              _alphaData$easingType = alphaData.easingType,
              easingType = _alphaData$easingType === void 0 ? ETweenEasing.Linear : _alphaData$easingType,
              _alphaData$loop = alphaData.loop,
              loop = _alphaData$loop === void 0 ? false : _alphaData$loop,
              _alphaData$repeat = alphaData.repeat,
              repeat = _alphaData$repeat === void 0 ? 0 : _alphaData$repeat,
              callback = alphaData.callback;
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

        Tweener.TransparencyInOut = function TransparencyInOut(alphaData) {
          var uiRenderer = alphaData.uiRenderer,
              startAlpha = alphaData.startAlpha,
              endAlpha = alphaData.endAlpha,
              duration = alphaData.duration,
              _alphaData$easingType2 = alphaData.easingType,
              easingType = _alphaData$easingType2 === void 0 ? ETweenEasing.Linear : _alphaData$easingType2,
              _alphaData$loop2 = alphaData.loop,
              loop = _alphaData$loop2 === void 0 ? false : _alphaData$loop2,
              _alphaData$repeat2 = alphaData.repeat,
              repeat = _alphaData$repeat2 === void 0 ? 0 : _alphaData$repeat2,
              callback = alphaData.callback;
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

System.register("chunks:///_virtual/UIBackScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './macro', './PokerInforPanel.ts', './ButtonUtils.ts', './ToggleUtils.ts', './ServiceLocator.ts', './Define.ts', './DefinePoker.ts', './GameUI.ts', './AudioHelper.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, Toggle, CHEAT, EUserState, ButtonUtils, ToggleUtils, ServiceLocator, MINIGAME_KEYS, Define, POKER_KEYS, DefinePoker, GameUI, AudioHelper, EUIGame;

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
      Button = module.Button;
      Toggle = module.Toggle;
    }, function (module) {
      CHEAT = module.CHEAT;
    }, function (module) {
      EUserState = module.EUserState;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ToggleUtils = module.ToggleUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      MINIGAME_KEYS = module.MINIGAME_KEYS;
      Define = module.Define;
    }, function (module) {
      POKER_KEYS = module.POKER_KEYS;
      DefinePoker = module.DefinePoker;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "4c6bffGWH9M7p/MGFqrK8JG", "UIBackScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIBackScreen = exports('UIBackScreen', (_dec = ccclass('UIBackScreen'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Toggle,
        visible: true
      }), _dec5 = property({
        type: Toggle,
        visible: true
      }), _dec6 = property({
        type: Button,
        visible: true
      }), _dec7 = property({
        type: Button,
        visible: function visible() {
          return CHEAT;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIBackScreen, _GameUI);

        function UIBackScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnBack", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnStandup", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_toggleStandup", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_toggleMenu", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnTutorial", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnCheatHUB", _descriptor6, _assertThisInitialized(_this));

          _this._isClickedStandup = false;
          return _this;
        }

        var _proto = UIBackScreen.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          ButtonUtils.bind(this._btnBack, this.onClickBack, this);
          ButtonUtils.bind(this._btnTutorial, this.onShowTutorial, this);
          ButtonUtils.bind(this._btnStandup, this.onClickStandUp, this);
          ToggleUtils.bindToggle(this._toggleMenu, this.onToggleMenu, this);
          this._btnBack.node.active = true;
          this._btnStandup.node.active = false;
          this._toggleStandup.isChecked = false;
          this.eventBus.on(MINIGAME_KEYS.StartGame, this.onPreventLeaveRoom, this);
          this.eventBus.on(POKER_KEYS.UserStateChanged, this.onUserChangeState, this);
          this._toggleMenu.isChecked = false;
          this._isClickedStandup = false;
          {
            this._btnCheatHUB.node.active = false;
          }
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnBack, this.onClickBack, this);
          ButtonUtils.unbind(this._btnTutorial, this.onShowTutorial, this);
          ButtonUtils.unbind(this._btnStandup, this.onClickStandUp, this);
          this.eventBus.off(MINIGAME_KEYS.StartGame, this.onPreventLeaveRoom, this);
          this.eventBus.off(POKER_KEYS.UserStateChanged, this.onUserChangeState, this);
        } // public setCallback(handler: (...args: any[]) => void): UIBackScreen {
        //     this.onMoveBack = handler;
        //     return this;
        // }
        ;

        _proto.onShowTutorial = function onShowTutorial() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_Tutorial);
        };

        _proto.onToggleMenu = function onToggleMenu() {
          AudioHelper.playClickSound();
        };

        _proto.onShowCheatHUB = function onShowCheatHUB() {// if (CHEAT) {
          //     AudioHelper.playClickSound();
          //     this.uiManager.show(EUIGame.CheatHUB);
          // }
        };

        _proto.onClickBack = /*#__PURE__*/function () {
          var _onClickBack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.gameController.leaveRoom(function (isSuccess) {
                      if (isSuccess) {
                        _this2.gameController.loadScene(DefinePoker.SceneName.LobbyPoker);
                      }
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onClickBack() {
            return _onClickBack.apply(this, arguments);
          }

          return onClickBack;
        }();

        _proto.onClickStandUp = function onClickStandUp() {
          var _this3 = this;

          if (this._isClickedStandup) return;
          AudioHelper.playClickSound();
          this._isClickedStandup = true;
          this._toggleStandup.isChecked = true;
          var pokerController = ServiceLocator.get(DefinePoker.Service.PokerController);
          var userProfile = ServiceLocator.get(Define.Service.UserProfile);
          pokerController.sendStandUp(userProfile.userData.userID);
          this.gameController.preloadScene(DefinePoker.SceneName.LobbyPoker);
          this.gameController.setLeaveRoomCallback(function (isSuccess) {
            if (isSuccess) _this3.gameController.loadScene(DefinePoker.SceneName.LobbyPoker);
          });
        };

        _proto.onUserChangeState = function onUserChangeState(userState) {
          if (this._isClickedStandup) return;
          this._btnBack.node.active = userState === EUserState.Waiting;
          this._btnStandup.node.active = userState === EUserState.Playing;
        };

        _proto.onPreventLeaveRoom = function onPreventLeaveRoom() {
          this._btnBack.node.active = false;
          this._btnStandup.node.active = false;
        } //test (remove later)
        ;

        _proto.onStartGame = function onStartGame() {
          var network = ServiceLocator.get(Define.Service.NetworkManager);
          var sessionManager = ServiceLocator.get(Define.Service.SessionManager);
          var roomPluginMessage = [5, "POKER", sessionManager.CurrentRoom.roomId, {
            "action": "user_start_game",
            "payload": {}
          }];
          network.send(roomPluginMessage);
        };

        return UIBackScreen;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnStandup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_toggleStandup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_toggleMenu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_btnTutorial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_btnCheatHUB", [_dec7], {
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

System.register("chunks:///_virtual/UICardLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CardView.ts', './MiniUI.ts', './Tweener.ts', './CardLibrary.ts', './EPoolType.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CardView, MiniUI, Tweener, CardLibrary, EPoolType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      CardView = module.CardView;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      CardLibrary = module.CardLibrary;
    }, function (module) {
      EPoolType = module.EPoolType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2ab8agCDxRAm4/aViXqkdO1", "UICardLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UICardLayer = exports('UICardLayer', (_dec = ccclass('UICardLayer'), _dec(_class = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UICardLayer, _MiniUI);

        function UICardLayer() {
          return _MiniUI.apply(this, arguments) || this;
        }

        var _proto = UICardLayer.prototype;

        _proto.dealFaceDown = function dealFaceDown(options) {
          this.processDealCard(options, EPoolType.Card, true, function (node) {
            var cardView = node.getComponent(CardView);

            if (cardView) {
              cardView.resetState();
              cardView.setActiveModel(false);
            }
          });
        };

        _proto.dealFaceUp = function dealFaceUp(options) {
          this.processDealCard(options, EPoolType.Card, false, function (node) {
            var cardView = node.getComponent(CardView);

            if (cardView) {
              cardView.resetState();
              var cardData = CardLibrary.getCardData(options.cardID);
              cardView.loadCard(cardData.suit, cardData.rank);
              cardView.setActiveModel(true);
            }
          });
        };

        _proto.processDealCard = function processDealCard(options, defaultType, defaultAutoDespawn, onSetupCallback) {
          var _this = this;

          var start = options.start,
              end = options.end,
              moveDuration = options.moveDuration,
              _options$cardType = options.cardType,
              cardType = _options$cardType === void 0 ? defaultType : _options$cardType,
              _options$autoDespawn = options.autoDespawn,
              autoDespawn = _options$autoDespawn === void 0 ? defaultAutoDespawn : _options$autoDespawn,
              onStart = options.onStart,
              onCompleted = options.onCompleted;
          var cardNode = this.poolManager.spawnNodeByType(cardType, this.node);
          onStart == null ? void 0 : onStart(cardNode);

          if (onSetupCallback) {
            onSetupCallback(cardNode);
          }

          Tweener.GlobalTranslateTo({
            target: cardNode,
            start: start,
            end: end,
            duration: moveDuration,
            callback: function callback() {
              if (autoDespawn) _this.poolManager.despawnNode(cardNode);
              onCompleted == null ? void 0 : onCompleted(cardNode);
            }
          });
        };

        _proto.moveCard = /*#__PURE__*/function () {
          var _moveCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cardNode, start, end, moveDuration, autoDespawn, onCompleted) {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (autoDespawn === void 0) {
                      autoDespawn = true;
                    }

                    cardNode.setParent(this.node);
                    Tweener.GlobalTranslateTo({
                      target: cardNode,
                      start: start,
                      end: end,
                      duration: moveDuration,
                      callback: function callback() {
                        if (autoDespawn) {
                          _this2.poolManager.despawnNode(cardNode);
                        }

                        onCompleted == null ? void 0 : onCompleted();
                      }
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function moveCard(_x, _x2, _x3, _x4, _x5, _x6) {
            return _moveCard.apply(this, arguments);
          }

          return moveCard;
        }();

        return UICardLayer;
      }(MiniUI)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UICheatHub.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './RoomConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, Toggle, Button, GameUI, EMiniGameType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Toggle = module.Toggle;
      Button = module.Button;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      EMiniGameType = module.EMiniGameType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "28750FvdQVGLajMTe77xPS2", "UICheatHub", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheatObject = exports('CheatObject', (_dec = ccclass('CheatObject'), _dec2 = property({
        type: Enum(EMiniGameType),
        visible: true
      }), _dec3 = property({
        type: Toggle,
        visible: true
      }), _dec(_class = (_class2 = function CheatObject() {
        _initializerDefineProperty(this, "GameTypeCheat", _descriptor, this);

        _initializerDefineProperty(this, "GameCheatHub", _descriptor2, this);
      } // @property({ type: MiniGame, visible: true })
      // public GameInstance: MiniGame;
      , (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameTypeCheat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EMiniGameType.Poker;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameCheatHub", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UICheatHub = exports('UICheatHub', (_dec4 = ccclass('UICheatHub'), _dec5 = property({
        type: CheatObject,
        visible: true
      }), _dec6 = property({
        type: Button,
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UICheatHub, _GameUI);

        function UICheatHub() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_cheatObjects", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UICheatHub.prototype; //private _minigameManager: IMinigameManager;

        _proto.onShow = function onShow() {//this._minigameManager = ServiceLocator.get<IMinigameManager>(Define.Service.MinigameManager);
        };

        _proto.onHide = function onHide() {};

        _proto.onShowCheatHub = function onShowCheatHub(gameType) {
          this.showMinigameCheatHub(gameType);
        };

        _proto.showMinigameCheatHub = function showMinigameCheatHub(gameType) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._cheatObjects), _step; !(_step = _iterator()).done;) {
            var cheatObject = _step.value;

            if (gameType == cheatObject.GameTypeCheat) {
              cheatObject.GameCheatHub.isChecked = true;
              break;
            }
          }
        };

        _proto.onCloseHub = function onCloseHub() {//this.uiManager.hide(EUIGame.CheatHUB);
        };

        return UICheatHub;
      }(GameUI), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_cheatObjects", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_btnClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIChipLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniUI.ts', './Tweener.ts', './ChipLibrary.ts', './EAudio.ts', './ChipGroup.ts', './EPoolType.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, MiniUI, Tweener, ChipLibrary, ESFXId, ChipGroup, EPoolType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      Tweener = module.Tweener;
    }, function (module) {
      ChipLibrary = module.ChipLibrary;
    }, function (module) {
      ESFXId = module.ESFXId;
    }, function (module) {
      ChipGroup = module.ChipGroup;
    }, function (module) {
      EPoolType = module.EPoolType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a1104hvPgBGG50TmfT7WJOS", "UIChipLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIChipLayer = exports('UIChipLayer', (_dec = ccclass('UIChipLayer'), _dec(_class = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UIChipLayer, _MiniUI);

        function UIChipLayer() {
          return _MiniUI.apply(this, arguments) || this;
        }

        var _proto = UIChipLayer.prototype;

        _proto.doChipEffect = /*#__PURE__*/function () {
          var _doChipEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chipValue, start, end, moveDuration, autoDespawn, onCompleted) {
            var _this = this;

            var chipResult, _loop, i;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (autoDespawn === void 0) {
                      autoDespawn = true;
                    }

                    if (!(chipValue <= 0)) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    chipResult = ChipLibrary.getChips(chipValue);

                    _loop = function _loop(i) {
                      var chipNode = _this.poolManager.spawnNodeByType(EPoolType.ChipGroup, _this.node);

                      var chipGroup = chipNode.getComponent(ChipGroup);
                      chipGroup.spawnChip(chipResult[i].count, chipResult[i].sprite);
                      Tweener.GlobalTranslateTo({
                        target: chipNode,
                        start: start,
                        end: end,
                        duration: moveDuration,
                        callback: function callback() {
                          if (autoDespawn) {
                            chipGroup.despawnChip();

                            _this.poolManager.despawnNode(chipNode);
                          }
                        }
                      });
                    };

                    for (i = 0; i < chipResult.length; i++) {
                      _loop(i);
                    }

                    Tweener.DelayForAction(this.node, moveDuration, function () {
                      onCompleted == null ? void 0 : onCompleted();

                      _this.miniAudio.playSFX(ESFXId.SFX_Chip);
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function doChipEffect(_x, _x2, _x3, _x4, _x5, _x6) {
            return _doChipEffect.apply(this, arguments);
          }

          return doChipEffect;
        }();

        _proto.moveChip = /*#__PURE__*/function () {
          var _moveChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(chipNode, start, end, moveDuration, autoDespawn, onCompleted) {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (autoDespawn === void 0) {
                      autoDespawn = true;
                    }

                    chipNode.setParent(this.node);
                    Tweener.GlobalTranslateTo({
                      target: chipNode,
                      start: start,
                      end: end,
                      duration: moveDuration,
                      callback: function callback() {
                        if (autoDespawn) {
                          _this2.poolManager.despawnNode(chipNode);
                        }

                        onCompleted == null ? void 0 : onCompleted();
                      }
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function moveChip(_x7, _x8, _x9, _x10, _x11, _x12) {
            return _moveChip.apply(this, arguments);
          }

          return moveChip;
        }();

        return UIChipLayer;
      }(MiniUI)) || _class));

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

System.register("chunks:///_virtual/UIDeposit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './PopupBase.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, ButtonUtils, PopupBase, AudioHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      PopupBase = module.PopupBase;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "2aa3em7oplDBbp6jaz2Sr/I", "UIDeposit", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIDeposit = exports('UIDeposit', (_dec = ccclass('UIDeposit'), _dec2 = property({
        type: EditBox,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(UIDeposit, _PopupBase);

        function UIDeposit() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_depositField", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnGo", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _this._depositAmount = 0;
          _this._onDeposit = void 0;
          return _this;
        }

        var _proto = UIDeposit.prototype;

        _proto.onHide = function onHide() {
          this._depositField.string = "";
        };

        _proto.onEnable = function onEnable() {
          ButtonUtils.bind(this._btnGo, this.onClickGo, this);
          ButtonUtils.bind(this._btnClose, this.onClickClose, this);

          this._depositField.node.on(EditBox.EventType.TEXT_CHANGED, this.onTypingAmount, this);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnGo, this.onClickGo, this);
          ButtonUtils.unbind(this._btnClose, this.onClickClose, this);

          this._depositField.node.off(EditBox.EventType.TEXT_CHANGED, this.onTypingAmount, this);
        };

        _proto.setCallback = function setCallback(callback) {
          this._onDeposit = callback;
        };

        _proto.onTypingAmount = function onTypingAmount(editbox) {
          var string = editbox.string.trim();
          this._depositAmount = Number(string);
        };

        _proto.onClickGo = function onClickGo() {
          var _this$_onDeposit;

          AudioHelper.playClickSound();
          if (this._depositAmount === 0) return;
          (_this$_onDeposit = this._onDeposit) == null ? void 0 : _this$_onDeposit.call(this, this._depositAmount);
          this._onDeposit = null;
          this.hide();
        };

        _proto.onClickClose = function onClickClose() {
          AudioHelper.playClickSound();
          this.hide();
        };

        return UIDeposit;
      }(PopupBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_depositField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnGo", [_dec3], {
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
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIEffectControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePokerControl.ts', './PokerInforPanel.ts', './AsyncUtils.ts', './UICardLayer.ts', './UIChipLayer.ts', './CardView.ts', './AudioHelper.ts', './EAudio.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, BasePokerControl, EUserState, AsyncUtils, UICardLayer, UIChipLayer, ECardEffect, AudioHelper, ESFXId;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
    }, function (module) {
      BasePokerControl = module.BasePokerControl;
    }, function (module) {
      EUserState = module.EUserState;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UICardLayer = module.UICardLayer;
    }, function (module) {
      UIChipLayer = module.UIChipLayer;
    }, function (module) {
      ECardEffect = module.ECardEffect;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      ESFXId = module.ESFXId;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fd81chJIKNOB5iZeOvfRd+9", "UIEffectControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIEffectControl = exports('UIEffectControl', (_dec = ccclass('UIEffectControl'), _dec(_class = /*#__PURE__*/function (_BasePokerControl) {
        _inheritsLoose(UIEffectControl, _BasePokerControl); //private _dealerLayer: DealerLayer = null;


        function UIEffectControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BasePokerControl.call.apply(_BasePokerControl, [this].concat(args)) || this;
          _this._cardLayer = null;
          _this._chipLayer = null;
          _this._cardLayer = _this.minigameUI.get(UICardLayer); //this._dealerLayer = this.minigameUI.get(DealerLayer);

          _this._chipLayer = _this.minigameUI.get(UIChipLayer);
          return _this;
        }

        var _proto = UIEffectControl.prototype;

        _proto.onDealCardToUser = /*#__PURE__*/function () {
          var _onDealCardToUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cardsId, playerTurnId) {
            var _this2 = this;

            var i, _loop, j;

            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.sortCards(cardsId);
                    i = 0;

                  case 2:
                    if (!(i < 2)) {
                      _context2.next = 13;
                      break;
                    }

                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(j) {
                      var panel;
                      return _regeneratorRuntime().wrap(function _loop$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              panel = _this2.getPanelById(playerTurnId[j]);

                              _this2._cardLayer.dealFaceDown({
                                start: _this2.tableUI.Deck.worldPosition,
                                end: panel.node.worldPosition,
                                moveDuration: _this2.config.TimeToDealCard,
                                onStart: function onStart(node) {
                                  node.setScale(v3(0.45, 0.45, 0.45));
                                  AudioHelper.playSFX(ESFXId.SFX_DealCard);
                                },
                                onCompleted: function onCompleted(_) {
                                  panel.onReceiveCard(1, _this2.isCurrentUser(playerTurnId[j]));
                                }
                              });

                              _context.next = 4;
                              return AsyncUtils.waitForSeconds(0.2);

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _loop);
                    });
                    j = 0;

                  case 5:
                    if (!(j < playerTurnId.length)) {
                      _context2.next = 10;
                      break;
                    }

                    return _context2.delegateYield(_loop(j), "t0", 7);

                  case 7:
                    j++;
                    _context2.next = 5;
                    break;

                  case 10:
                    i++;
                    _context2.next = 2;
                    break;

                  case 13:
                    _context2.next = 15;
                    return AsyncUtils.waitForSeconds(this.config.TimeToDealCard);

                  case 15:
                    this.revealCard(this.userProfile.userData.userID, cardsId, false);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));

          function onDealCardToUser(_x, _x2) {
            return _onDealCardToUser.apply(this, arguments);
          }

          return onDealCardToUser;
        }();

        _proto.onDealCardOnTable = /*#__PURE__*/function () {
          var _onDealCardOnTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cardIds) {
            var _this3 = this;

            var currentOffset, _loop2, i;

            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    currentOffset = this.tableUI.CurrentCardIndex;
                    _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2(i) {
                      var card, endPos, currentIndex;
                      return _regeneratorRuntime().wrap(function _loop2$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              card = _this3.convertIdToCardData(cardIds[i]);
                              endPos = _this3.tableUI.getCardPos(i + currentOffset);
                              currentIndex = i;

                              _this3._cardLayer.dealFaceDown({
                                start: _this3.tableUI.Deck.worldPosition,
                                end: endPos,
                                moveDuration: _this3.config.TimeToDealCard,
                                onStart: function onStart(node) {
                                  AudioHelper.playSFX(ESFXId.SFX_DealCard);
                                  node.setScale(v3(0.45, 0.45, 0.45));

                                  _this3.tableUI.onShowCardView(true);
                                },
                                onCompleted: function onCompleted(_) {
                                  _this3.tableUI.onReceiveCard(card, currentIndex + currentOffset, _this3.config.TimeFlip);
                                }
                              });

                              _context3.next = 6;
                              return AsyncUtils.waitForSeconds(0.2);

                            case 6:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _loop2);
                    });
                    i = 0;

                  case 3:
                    if (!(i < cardIds.length)) {
                      _context4.next = 8;
                      break;
                    }

                    return _context4.delegateYield(_loop2(i), "t0", 5);

                  case 5:
                    i++;
                    _context4.next = 3;
                    break;

                  case 8:
                    _context4.next = 10;
                    return AsyncUtils.waitForSeconds(this.config.TimeToDealCard);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee2, this);
          }));

          function onDealCardOnTable(_x3) {
            return _onDealCardOnTable.apply(this, arguments);
          }

          return onDealCardOnTable;
        }();

        _proto.revealCard = function revealCard(playerId, cardIds, exceptCurrentUser) {
          if (exceptCurrentUser === void 0) {
            exceptCurrentUser = true;
          }

          if (exceptCurrentUser && this.isCurrentUser(playerId)) return;
          this.sortCards(cardIds);
          var panel = this.getPanelById(playerId);
          if (panel.PanelState !== EUserState.Playing) return;
          var cards = this.getCardDatas(cardIds);
          panel.flipCard(cards, this.config.TimeFlip);
        };

        _proto.onBetEffectResponse = function onBetEffectResponse(playerId, betValue, onEffectDone) {
          var panel = this.getPanelById(playerId); //this._tableUI.onSetAnimDealer(EDealerAnimType.Idle);

          if (betValue > 0) panel.spawnFloatingText(betValue);

          this._chipLayer.doChipEffect(betValue, panel.node.worldPosition, panel.BetPotHolder.worldPosition, this.config.TimeChipAppear, true, function () {
            if (betValue === 0) return;
            onEffectDone == null ? void 0 : onEffectDone(playerId, betValue);
          });
        };

        _proto.moveChipToTable = function moveChipToTable(playerId, chipValue, onCompleted) {
          var panel = this.getPanelById(playerId);

          this._chipLayer.doChipEffect(chipValue, panel.BetPotHolder.worldPosition, this.tableUI.totalPotNode.worldPosition, this.config.TimeChipMoveToPot, true, function () {
            return onCompleted == null ? void 0 : onCompleted();
          });
        };

        _proto.moveAllChipToTable = /*#__PURE__*/function () {
          var _moveAllChipToTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(onEffectDone) {
            var _this4 = this;

            return _regeneratorRuntime().wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.userInforUI.getPanelsWithState(EUserState.Playing).forEach(function (panel) {
                      var pokerPanel = panel;

                      _this4._chipLayer.doChipEffect(pokerPanel.CurrentBet, pokerPanel.BetPotHolder.worldPosition, _this4.tableUI.totalPotNode.worldPosition, _this4.config.TimeChipMoveToPot);
                    });
                    _context5.next = 3;
                    return AsyncUtils.waitForSeconds(this.config.TimeChipMoveToPot);

                  case 3:
                    onEffectDone == null ? void 0 : onEffectDone();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3, this);
          }));

          function moveAllChipToTable(_x4) {
            return _moveAllChipToTable.apply(this, arguments);
          }

          return moveAllChipToTable;
        }();

        _proto.setResult = function setResult(playerResults, handRankString, potRemain) {
          var _this5 = this;

          var playerWinners = [];
          var playerLosers = [];

          if (handRankString !== "") {
            var handRank = this.getHandRank(handRankString);
            this.tableUI.onShowHandRankWinner(handRank);
          }

          for (var _iterator = _createForOfIteratorHelperLoose(playerResults), _step; !(_step = _iterator()).done;) {
            var playerResult = _step.value;

            if (playerResult.result) {
              playerWinners.push(playerResult);
            } else {
              playerLosers.push(playerResult);
            }
          }

          playerLosers.forEach(function (loser) {
            return _this5.setEffectLosers(loser.userID);
          });
          this.setEffectWinners(playerWinners, potRemain);
        };

        _proto.setHandRank = function setHandRank(userID, handRankString, cardCombinations) {
          var panel = this.getPanelById(userID);

          if (panel.PanelState !== EUserState.Playing) {
            this.resetHandRank();
            return;
          }

          var handRank = this.getHandRank(handRankString);
          var cards = this.getCardDatas(cardCombinations);
          panel.showHandRankBanner(handRank);
          panel.highlightCards(cards);
          this.tableUI.highlightCards(cards);
        };

        _proto.setHandRankWithCardData = function setHandRankWithCardData(userID, handRankString, cardCombinations) {
          var cardIDs = [];
          cardCombinations.forEach(function (c) {
            return cardIDs.push(c.id);
          });
          this.setHandRank(userID, handRankString, cardIDs);
        };

        _proto.resetHandRank = function resetHandRank() {
          var panel = this.getPanelById(this.userProfile.userData.userID);
          panel.setCardEffect(ECardEffect.None);
        };

        _proto.setEffectLosers = function setEffectLosers(userID) {
          var panel = this.getPanelById(userID);
          panel.setCardEffect(ECardEffect.Dim);
        };

        _proto.setEffectWinners = /*#__PURE__*/function () {
          var _setEffectWinners = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(winners, potRemain) {
            var _this6 = this;

            var previousWinner, _loop3, _iterator2, _step2;

            return _regeneratorRuntime().wrap(function _callee4$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    previousWinner = null;

                    _loop3 = function _loop3() {
                      var winner = _step2.value;

                      if (previousWinner) {
                        var _panel = _this6.getPanelById(previousWinner.userID);

                        _panel.setCardEffect(ECardEffect.None);
                      }

                      previousWinner = winner;

                      var panel = _this6.getPanelById(winner.userID);

                      if (winner.cardCombination.length !== 0) {
                        var cards = _this6.getCardDatas(winner.cardCombination);

                        panel.onWin();
                        panel.highlightCards(cards);

                        _this6.tableUI.resetCardEffect();

                        _this6.tableUI.highlightCards(cards);
                      }

                      _this6.tableUI.onUpdateTotalPot(potRemain);

                      _this6._chipLayer.doChipEffect(winner.winValue, _this6.tableUI.totalPotNode.worldPosition, panel.node.worldPosition, _this6.config.TimeChipMoveToPot, true, function () {
                        panel.onUpdateChip(winner.newBalance);
                      });
                    };

                    for (_iterator2 = _createForOfIteratorHelperLoose(winners); !(_step2 = _iterator2()).done;) {
                      _loop3();
                    }

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee4);
          }));

          function setEffectWinners(_x5, _x6) {
            return _setEffectWinners.apply(this, arguments);
          }

          return setEffectWinners;
        }();

        return UIEffectControl;
      }(BasePokerControl)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIGamemenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './EResultCode.ts', './ServiceLocator.ts', './ButtonUtils.ts', './Drag.ts', './Define.ts', './GameUI.ts', './AudioHelper.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, Button, Node, DEBUG, EResultCode, ServiceLocator, ButtonUtils, Drag, Define, GLOBAL_KEYS, GameUI, AudioHelper, EUIGame;

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
      Node = module.Node;
    }, function (module) {
      DEBUG = module.DEBUG;
    }, function (module) {
      EResultCode = module.EResultCode;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      Drag = module.Drag;
    }, function (module) {
      Define = module.Define;
      GLOBAL_KEYS = module.GLOBAL_KEYS;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

      cclegacy._RF.push({}, "24660c1ujVBJ7Thy+79xbDc", "UIGamemenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIGamemenu = exports('UIGamemenu', (_dec = ccclass('UIGamemenu'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property({
        visible: true,
        displayName: '== Button Settings ==',
        readonly: true
      }), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property({
        type: Node,
        visible: function visible() {
          return DEBUG;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIGamemenu, _GameUI);

        function UIGamemenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "userCoin", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "userAvatar", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "header_button", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnSettings", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnTutorial", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnUserProfile", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnLeaderboard", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnWheel", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnDeposit", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnLogout", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "version", _descriptor12, _assertThisInitialized(_this));

          _this._imageCache = null;
          _this._userProfile = null;
          return _this;
        }

        var _proto = UIGamemenu.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          this._imageCache = ServiceLocator.get(Define.Service.ImageCache);
          this._userProfile = ServiceLocator.get(Define.Service.UserProfile);
          this.onResetDragButton();
          ButtonUtils.bind(this.btnSettings, this.onShowSettings, this);
          ButtonUtils.bind(this.btnTutorial, this.onShowTutorial, this);
          ButtonUtils.bind(this.btnUserProfile, this.onShowUserProfile, this);
          ButtonUtils.bind(this.btnLeaderboard, this.onShowLeaderboard, this);
          ButtonUtils.bind(this.btnWheel, this.onShowWheel, this);
          ButtonUtils.bind(this.btnDeposit, this.onShowDepositPopup, this);
          ButtonUtils.bind(this.btnLogout, this.onLogout, this);
          this.eventBus.on(GLOBAL_KEYS.Deposit, this.onDeposit, this);
          this.loadData();
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this.btnSettings, this.onShowSettings, this);
          ButtonUtils.unbind(this.btnTutorial, this.onShowTutorial, this);
          ButtonUtils.unbind(this.btnUserProfile, this.onShowUserProfile, this);
          ButtonUtils.unbind(this.btnLeaderboard, this.onShowLeaderboard, this);
          ButtonUtils.unbind(this.btnWheel, this.onShowWheel, this);
          ButtonUtils.unbind(this.btnDeposit, this.onShowDepositPopup, this);
          ButtonUtils.unbind(this.btnLogout, this.onLogout, this);
          this.eventBus.off(GLOBAL_KEYS.Deposit, this.onDeposit, this);
        };

        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this._userProfile) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _context.next = 4;
                    return this._imageCache.loadSprite(this._userProfile.userData.avatarUrl);

                  case 4:
                    this.userAvatar.spriteFrame = _context.sent;
                    this.userName.string = this._userProfile.userData.userName;
                    this.userCoin.string = this._userProfile.userData.balance.toString();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadData() {
            return _loadData.apply(this, arguments);
          }

          return loadData;
        }();

        _proto.onDeposit = function onDeposit(data) {
          if (data.resultCode !== EResultCode.SUCCESS) return;
          this.userCoin.string = data.balance.toString();
        } // private async onLoadData(data: UserInforResponse): Promise<void> {
        //     this.userAvatar.spriteFrame = await this._imageCache.loadSprite(data.avatarURL);
        //     this.userName.string = data.userName;
        //     this.userCoin.string = data.balance.toString();
        // }
        ;

        _proto.onShowSettings = function onShowSettings() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_Setting);
        };

        _proto.onShowTutorial = function onShowTutorial() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_Tutorial);
        };

        _proto.onShowUserProfile = function onShowUserProfile() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_UserProfile);
        };

        _proto.onShowLeaderboard = function onShowLeaderboard() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_Leaderboard);
        };

        _proto.onShowWheel = function onShowWheel() {
          AudioHelper.playClickSound();
          this.uiManager.show(EUIGame.Popup_Wheel);
        };

        _proto.onShowDepositPopup = /*#__PURE__*/function () {
          var _onShowDepositPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;

            var uiDeposit;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    AudioHelper.playClickSound();
                    _context2.next = 3;
                    return this.uiManager.showAsync(EUIGame.Popup_Deposit);

                  case 3:
                    uiDeposit = _context2.sent;
                    uiDeposit.setCallback(function (amount) {
                      _this2.gameController.deposit(amount);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function onShowDepositPopup() {
            return _onShowDepositPopup.apply(this, arguments);
          }

          return onShowDepositPopup;
        }();

        _proto.onResetDragButton = function onResetDragButton() {
          this.btnWheel.getComponent(Drag).resetPosition();
        };

        _proto.onLogout = function onLogout() {
          this.gameController.logout();
        };

        return UIGamemenu;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec2], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnDeposit", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnLogout", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "version", [_dec13], {
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

System.register("chunks:///_virtual/UIJoinRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './PopupBase.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, ButtonUtils, PopupBase, AudioHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      PopupBase = module.PopupBase;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "05e3bnQo59LUZ4NwrG5ZOm6", "UIJoinRoom", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIJoinRoom = exports('UIJoinRoom', (_dec = ccclass('UIJoinRoom'), _dec2 = property({
        type: EditBox,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(UIJoinRoom, _PopupBase);

        function UIJoinRoom() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_roomIdField", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnGo", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _this._roomId = 0;
          _this._onJoinRoom = void 0;
          return _this;
        }

        var _proto = UIJoinRoom.prototype;

        _proto.onEnable = function onEnable() {
          ButtonUtils.bind(this._btnGo, this.onClickGo, this);
          ButtonUtils.bind(this._btnClose, this.onClickClose, this);

          this._roomIdField.node.on(EditBox.EventType.TEXT_CHANGED, this.onTypingRoomId, this);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnGo, this.onClickGo, this);
          ButtonUtils.unbind(this._btnClose, this.onClickClose, this);

          this._roomIdField.node.off(EditBox.EventType.TEXT_CHANGED, this.onTypingRoomId, this);
        };

        _proto.setCallback = function setCallback(onJoinRoom) {
          this._onJoinRoom = onJoinRoom;
        };

        _proto.onTypingRoomId = function onTypingRoomId(editbox) {
          var string = editbox.string.trim();
          this._roomId = Number(string);
        };

        _proto.onClickGo = function onClickGo() {
          var _this$_onJoinRoom;

          AudioHelper.playClickSound();
          if (this._roomId === 0) return;
          (_this$_onJoinRoom = this._onJoinRoom) == null ? void 0 : _this$_onJoinRoom.call(this, this._roomId);
        };

        _proto.onClickClose = function onClickClose() {
          AudioHelper.playClickSound();
          this.hide();
        };

        return UIJoinRoom;
      }(PopupBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_roomIdField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnGo", [_dec3], {
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
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILeaderboard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIPlayerCard.ts', './ButtonUtils.ts', './DowloadHandler.ts', './AudioHelper.ts', './EUIGame.ts', './PopupBase.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, ScrollView, Layout, UITransform, UIPlayerCard, ButtonUtils, DowloadHandler, AudioHelper, EUIGame, PopupBase;

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
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      DowloadHandler = module.DowloadHandler;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }, function (module) {
      PopupBase = module.PopupBase;
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(UILeaderboard, _PopupBase);

        function UILeaderboard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_playerCard", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cardContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_scrollView", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UILeaderboard.prototype;

        _proto.onShow = function onShow() {
          _PopupBase.prototype.onShow.call(this);

          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);
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
                    this.uiManager.show(EUIGame.Popup_Loading);
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
                    this.uiManager.hide(EUIGame.Popup_Loading);

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
          AudioHelper.playClickSound();
          this.hide();
        };

        return UILeaderboard;
      }(PopupBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_playerCard", [_dec2], {
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

System.register("chunks:///_virtual/UILoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './RotateObject.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, GameUI, RotateObject;

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
      GameUI = module.GameUI;
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UILoading, _GameUI);

        function UILoading() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

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
      }(GameUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_loadingObj", [_dec2], {
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

System.register("chunks:///_virtual/UILoginPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './ButtonUtils.ts', './ToggleUtils.ts', './ServiceLocator.ts', './Define.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Toggle, Button, GameUI, ButtonUtils, ToggleUtils, ServiceLocator, Define;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Toggle = module.Toggle;
      Button = module.Button;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ToggleUtils = module.ToggleUtils;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "cbfa0W7Y9VIx6BYWPbh1zsj", "UILoginPopup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UILoginPopup = exports('UILoginPopup', (_dec = ccclass('UILoginPopup'), _dec2 = property({
        type: EditBox,
        visible: true
      }), _dec3 = property({
        type: EditBox,
        visible: true
      }), _dec4 = property({
        type: Toggle,
        visible: true
      }), _dec5 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UILoginPopup, _GameUI);

        function UILoginPopup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userNameField", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_passwordField", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_rememberMeToggle", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnLogin", _descriptor4, _assertThisInitialized(_this));

          _this._loginController = null;
          _this._userName = "";
          _this._password = "";
          return _this;
        }

        var _proto = UILoginPopup.prototype;

        _proto.init = function init() {
          var _this2 = this;

          _GameUI.prototype.init.call(this);

          this._loginController = ServiceLocator.get(Define.Service.LoginController);

          this._loginController.checkAutoLogin(function (isShow) {
            return _this2.onCheckShowPopup(isShow);
          });
        };

        _proto.onCheckShowPopup = function onCheckShowPopup(isShow) {
          if (isShow) this.show();else this.hide();
        };

        _proto.onShow = function onShow() {
          _GameUI.prototype.onShow.call(this);

          ButtonUtils.bind(this._btnLogin, this.onClickLogin, this);
          ToggleUtils.bindToggle(this._rememberMeToggle, this.onToggleLogin, this);

          this._userNameField.node.on(EditBox.EventType.TEXT_CHANGED, this.onUsernameChange, this);

          this._passwordField.node.on(EditBox.EventType.TEXT_CHANGED, this.onPasswordChange, this);

          this._userNameField.string = "";
          this._passwordField.string = "";
          this._userName = "";
          this._password = "";
          this.setLoginButton(true);
          this._rememberMeToggle.isChecked = this._loginController.getRemember();
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnLogin, this.onClickLogin, this);
          ToggleUtils.unbindToggle(this._rememberMeToggle, this.onToggleLogin, this);

          this._userNameField.node.off(EditBox.EventType.TEXT_CHANGED, this.onUsernameChange, this);

          this._passwordField.node.off(EditBox.EventType.TEXT_CHANGED, this.onPasswordChange, this);
        };

        _proto.setRemember = function setRemember(canRemember) {
          this._rememberMeToggle.isChecked = canRemember;
        };

        _proto.setLoginButton = function setLoginButton(canLogin) {
          ButtonUtils.setInteractable(this._btnLogin, canLogin);
        };

        _proto.onUsernameChange = function onUsernameChange(editbox) {
          this._userName = editbox.string;
        };

        _proto.onPasswordChange = function onPasswordChange(editbox) {
          this._password = editbox.string;
        };

        _proto.onToggleLogin = function onToggleLogin(toggle) {
          this._loginController.setRemember(toggle.isChecked);
        };

        _proto.onClickLogin = function onClickLogin() {
          if (this._userName.trim() === "") {
            return;
          }

          this.setLoginButton(false);

          this._loginController.login(this._userName, this._password);
        };

        return UILoginPopup;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userNameField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_passwordField", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_rememberMeToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_btnLogin", [_dec5], {
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

System.register("chunks:///_virtual/UIMainmenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './ServiceLocator.ts', './DefinePoker.ts', './GameUI.ts', './AudioHelper.ts', './EUIGame.ts', './UINeedPassword.ts', './IGameController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, ButtonUtils, ServiceLocator, DefinePoker, GameUI, AudioHelper, EUIGame, UINeedPassword, JoinRoomType;

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
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      DefinePoker = module.DefinePoker;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }, function (module) {
      UINeedPassword = module.UINeedPassword;
    }, function (module) {
      JoinRoomType = module.JoinRoomType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "dbbfbm/IZJHzp+aqvpq8ciL", "UIMainmenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIMainmenu = exports('UIMainmenu', (_dec = ccclass('UIMainmenu'), _dec2 = property({
        visible: true,
        displayName: '== Button Settings ==',
        readonly: true
      }), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property({
        type: Button,
        visible: true
      }), _dec9 = property({
        type: Button,
        visible: true
      }), _dec10 = property({
        type: UINeedPassword,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIMainmenu, _GameUI);

        function UIMainmenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "header_button", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnStartGame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType1", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType2", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType3", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnType4", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnCreateRoom", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnJoinRoom", _descriptor8, _assertThisInitialized(_this));

          _this._uiJoinRoom = null;

          _initializerDefineProperty(_this, "_uiNeedPassword", _descriptor9, _assertThisInitialized(_this));

          _this._pokerLobbyController = null;
          _this._taskPreload = null;
          _this._taskJoinroom = null;
          return _this;
        }

        var _proto = UIMainmenu.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          ButtonUtils.bind(this.btnStartGame, this.onStartGame, this);
          ButtonUtils.bind(this.btnType1, this.onStartGame, this);
          ButtonUtils.bind(this.btnType2, this.onStartGame, this);
          ButtonUtils.bind(this.btnType3, this.onStartGame, this);
          ButtonUtils.bind(this.btnType4, this.onStartGame, this);
          ButtonUtils.bind(this._btnCreateRoom, this.onCreateRoom, this);
          ButtonUtils.bind(this._btnJoinRoom, this.onJoinRoom, this);
          this._pokerLobbyController = ServiceLocator.get(DefinePoker.Service.PokerLobbyController);

          this._pokerLobbyController.getRooms(function (roomData) {});

          this._taskPreload = this.gameController.preloadScene(DefinePoker.SceneName.Poker);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this.btnStartGame, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType1, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType2, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType3, this.onStartGame, this);
          ButtonUtils.unbind(this.btnType4, this.onStartGame, this);
          ButtonUtils.unbind(this._btnCreateRoom, this.onCreateRoom, this);
          ButtonUtils.unbind(this._btnJoinRoom, this.onJoinRoom, this);
        };

        _proto.onStartGame = function onStartGame() {
          var _this2 = this;

          console.log("Start Game button clicked");
          AudioHelper.playClickSound();
          {
            this._taskJoinroom = new Promise(function (resolve, reject) {
              _this2.gameController.searchRoom("POKER_2000", function () {
                resolve(true);

                _this2.uiManager.show(EUIGame.Popup_Loading);
              });
            });
            this.gameController.loadSceneWithPreload(DefinePoker.SceneName.Poker, this._taskPreload, this._taskJoinroom);
          }
        };

        _proto.onCreateRoom = function onCreateRoom() {
          var _this3 = this;

          AudioHelper.playClickSound();
          {
            this._taskJoinroom = new Promise(function (resolve, reject) {
              _this3.gameController.createRoom("POKER_2000", function () {
                resolve(true);

                _this3.uiManager.show(EUIGame.Popup_Loading);
              });
            });
            this.gameController.loadSceneWithPreload(DefinePoker.SceneName.Poker, this._taskPreload, this._taskJoinroom);
          }
        };

        _proto.onJoinRoom = function onJoinRoom() {
          var _this4 = this;

          this._uiJoinRoom = this.uiManager.show(EUIGame.Popup_JoinRoom);

          this._uiJoinRoom.show();

          this._uiJoinRoom.setCallback(function (roomId) {
            AudioHelper.playClickSound();
            {
              _this4._taskJoinroom = new Promise(function (resolve, reject) {
                var attemptJoin = function attemptJoin(password) {
                  if (password === void 0) {
                    password = "";
                  }

                  _this4.gameController.joinRoomWithNetwork(roomId, password, function (type) {
                    switch (type) {
                      case JoinRoomType.SUCCESS:
                        _this4.uiManager.show(EUIGame.Popup_Loading);

                        resolve(true);
                        break;

                      case JoinRoomType.NEED_PASSWORD:
                        _this4._uiNeedPassword.show();

                        _this4._uiNeedPassword.setCallback(function (inputPass) {
                          attemptJoin(inputPass);
                        });

                        break;

                      case JoinRoomType.FAILED:
                        console.error("Can't join room or Wrong password logic handled by server");
                        break;
                    }
                  });
                };

                attemptJoin("");
              });

              _this4.gameController.loadSceneWithPreload(DefinePoker.SceneName.Poker, _this4._taskPreload, _this4._taskJoinroom);
            }
          });
        };

        return UIMainmenu;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "header_button", [_dec2], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_btnCreateRoom", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_btnJoinRoom", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_uiNeedPassword", [_dec10], {
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

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EnumUtils.ts', './LogUtils.ts', './ResourcesUtils.ts', './BaseUI.ts', './EUICore.ts'], function () {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, CCString, Node, Layers, Widget, instantiate, Component, Prefab, EnumUtils, LogUtils, ResourceUtils, BaseUI, EUILayer;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Node = module.Node;
      Layers = module.Layers;
      Widget = module.Widget;
      instantiate = module.instantiate;
      Component = module.Component;
      Prefab = module.Prefab;
    }, function (module) {
      EnumUtils = module.EnumUtils;
    }, function (module) {
      LogUtils = module.LogUtils;
    }, function (module) {
      ResourceUtils = module.ResourceUtils;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      EUILayer = module.EUILayer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "9fa23fpNsxPt517qTHqi837", "UIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIManager = (_dec = ccclass('UIManager'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        type: [CCString],
        visible: true
      }), _dec4 = property({
        type: [CCString],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_uiRootPath", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiPreloadPath", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_uiLazyPath", _descriptor3, _assertThisInitialized(_this));

          _this._layerMap = new Map();
          _this._uiData = new Map();
          _this._uisMap = new Map();
          return _this;
        }

        var _proto = UIManager.prototype;

        _proto.init = function init() {
          this.setupLayers();
        };

        _proto.setupLayers = function setupLayers() {
          var _this2 = this;

          var layerIds = EnumUtils.getListID(EUILayer);
          layerIds.forEach(function (layerID) {
            var node = new Node(EUILayer[layerID]);
            node.layer = Layers.Enum.UI_2D;
            var widget = node.addComponent(Widget);
            widget.isAlignTop = true;
            widget.isAlignBottom = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.top = 0;
            widget.bottom = 0;
            widget.left = 0;
            widget.right = 0;
            node.parent = _this2.node;

            _this2._layerMap.set(layerID, node);
          });
        };

        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;

            var preLoadUIs, _iterator, _step, path, uis;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    preLoadUIs = [];
                    _iterator = _createForOfIteratorHelperLoose(this._uiPreloadPath);

                  case 2:
                    if ((_step = _iterator()).done) {
                      _context.next = 10;
                      break;
                    }

                    path = _step.value;
                    _context.next = 6;
                    return ResourceUtils.loadDir(this._uiRootPath + "/" + path, Prefab);

                  case 6:
                    uis = _context.sent;
                    preLoadUIs.push.apply(preLoadUIs, uis);

                  case 8:
                    _context.next = 2;
                    break;

                  case 10:
                    if (preLoadUIs) {
                      preLoadUIs.forEach(function (ui) {
                        if (!_this3._uiData.has(ui.name)) _this3._uiData.set(ui.name, ui);
                      });
                    }

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function loadData() {
            return _loadData.apply(this, arguments);
          }

          return loadData;
        }();

        _proto.register = function register(identifier, ui) {
          if (this._uisMap.has(identifier)) {
            LogUtils.warn(identifier + " is already registered");
            return;
          }

          this.setupNode(identifier, ui);
          LogUtils.log(identifier + " is registered");
        };

        _proto.unregister = function unregister(identifier) {
          if (!this._uisMap.has(identifier)) {
            LogUtils.warn(identifier + " is already removed");
            return;
          }

          this._uisMap["delete"](identifier);

          LogUtils.log(identifier + " is removed");
        };

        _proto.getUI = function getUI(identifier) {
          return this._uisMap.get(identifier) || null;
        };

        _proto.show = function show(identifier) {
          LogUtils.log("Show ui:", identifier);
          var ui = this.tryLoadUI(identifier);

          if (!ui) {
            LogUtils.error("Ui is not cached, start loading from resources: " + identifier);
            this.showAsync(identifier);
            return null;
          }

          this.activeUI(ui);
          return ui;
        };

        _proto.showAsync = /*#__PURE__*/function () {
          var _showAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(identifier) {
            var ui;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    LogUtils.log("Show ui async:", identifier);
                    _context2.next = 3;
                    return this.tryLoadUIAsync(identifier);

                  case 3:
                    ui = _context2.sent;

                    if (ui) {
                      _context2.next = 7;
                      break;
                    }

                    LogUtils.error("Failed to initialize ui: " + identifier);
                    return _context2.abrupt("return", null);

                  case 7:
                    this.activeUI(ui);
                    return _context2.abrupt("return", ui);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function showAsync(_x) {
            return _showAsync.apply(this, arguments);
          }

          return showAsync;
        }();

        _proto.hide = function hide(identifier) {
          LogUtils.log("Hiding ui:", identifier);
          var ui = this.getUI(identifier);

          if (ui) {
            ui.hide();
          }
        } //check if screen is visible
        ;

        _proto.isUIVisible = function isUIVisible(uiIdentifier) {
          var ui = this.getUI(uiIdentifier);

          if (ui) {
            return ui.node.active;
          }

          return false;
        };

        _proto.preloadUI = /*#__PURE__*/function () {
          var _preloadUI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(identifier) {
            var node;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.tryLoadUIAsync(identifier);

                  case 3:
                    node = _context3.sent;

                    if (!node) {
                      _context3.next = 10;
                      break;
                    }

                    LogUtils.log(identifier + " preloaded successfully.");
                    this.hide(identifier);
                    return _context3.abrupt("return", true);

                  case 10:
                    LogUtils.warn("Preload timeout: " + identifier + " could not be initialized.");
                    return _context3.abrupt("return", false);

                  case 12:
                    _context3.next = 18;
                    break;

                  case 14:
                    _context3.prev = 14;
                    _context3.t0 = _context3["catch"](0);
                    LogUtils.error("Error preloading " + identifier + ":", _context3.t0);
                    return _context3.abrupt("return", false);

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 14]]);
          }));

          function preloadUI(_x2) {
            return _preloadUI.apply(this, arguments);
          }

          return preloadUI;
        }();

        _proto.tryLoadUI = function tryLoadUI(identifier) {
          // Check if already cached
          if (this._uisMap.has(identifier)) {
            return this._uisMap.get(identifier);
          } // Find prefab


          var uiPrefab = this._uiData.get(identifier);

          if (!uiPrefab) {
            LogUtils.warn("Prefab for " + identifier + " not found in _uiPrefabs.");
            return null;
          }

          var newNodeUI = instantiate(uiPrefab);
          var ui = newNodeUI.getComponent(BaseUI);
          this.setupNode(identifier, ui);
          return ui;
        };

        _proto.tryLoadUIAsync = /*#__PURE__*/function () {
          var _tryLoadUIAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(identifier) {
            var node, uiPrefab, newNodeUI, ui;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    node = this.tryLoadUI(identifier);

                    if (!node) {
                      _context4.next = 3;
                      break;
                    }

                    return _context4.abrupt("return", node);

                  case 3:
                    _context4.next = 5;
                    return this.tryLoadFromResources(identifier);

                  case 5:
                    uiPrefab = _context4.sent;

                    if (uiPrefab) {
                      _context4.next = 9;
                      break;
                    }

                    LogUtils.warn("Prefab for " + identifier + " not found in _uiPrefabs.");
                    return _context4.abrupt("return", null);

                  case 9:
                    newNodeUI = instantiate(uiPrefab);
                    ui = newNodeUI.getComponent(BaseUI);
                    this.setupNode(identifier, ui);
                    return _context4.abrupt("return", ui);

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function tryLoadUIAsync(_x3) {
            return _tryLoadUIAsync.apply(this, arguments);
          }

          return tryLoadUIAsync;
        }();

        _proto.setupNode = function setupNode(identifier, ui) {
          if (ui) {
            var parentLayer = this._layerMap.get(ui.UILayer);

            ui.node.setParent(parentLayer, false);
          } // Cache it


          this._uisMap.set(identifier, ui);

          LogUtils.log(identifier + " initialized and cached.");
        };

        _proto.activeUI = function activeUI(ui) {
          if (ui) {
            ui.node.setSiblingIndex(ui.node.parent.children.length - 1); // Bring to top

            ui.init();
            ui.show();
          }
        };

        _proto.tryLoadFromResources = /*#__PURE__*/function () {
          var _tryLoadFromResources = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(identifier) {
            var _iterator2, _step2, path, fullPath, ui;

            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _iterator2 = _createForOfIteratorHelperLoose(this._uiLazyPath);

                  case 1:
                    if ((_step2 = _iterator2()).done) {
                      _context5.next = 16;
                      break;
                    }

                    path = _step2.value;

                    if (path) {
                      _context5.next = 5;
                      break;
                    }

                    return _context5.abrupt("continue", 14);

                  case 5:
                    fullPath = this._uiRootPath + "/" + path + "/" + identifier;
                    _context5.next = 8;
                    return ResourceUtils.load(fullPath, Prefab);

                  case 8:
                    ui = _context5.sent;

                    if (!ui) {
                      _context5.next = 14;
                      break;
                    }

                    this._uiData.set(ui.name, ui);

                    if (ui.name !== identifier) {
                      this._uiData.set(identifier, ui);
                    }

                    LogUtils.log("\u2705 Loaded [" + identifier + "] from [" + path + "]");
                    return _context5.abrupt("return", ui);

                  case 14:
                    _context5.next = 1;
                    break;

                  case 16:
                    LogUtils.warn("\u274C Prefab [" + identifier + "] not found in paths: " + this._uiLazyPath.join(", "));
                    return _context5.abrupt("return", null);

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function tryLoadFromResources(_x4) {
            return _tryLoadFromResources.apply(this, arguments);
          }

          return tryLoadFromResources;
        }();

        return UIManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_uiRootPath", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiPreloadPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_uiLazyPath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UINeedPassword.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, BaseUI, ButtonUtils, AudioHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "84106fliEZPpa+jXplJWnW5", "UINeedPassword", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UINeedPassword = exports('UINeedPassword', (_dec = ccclass('UINeedPassword'), _dec2 = property({
        type: EditBox,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(UINeedPassword, _BaseUI);

        function UINeedPassword() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_passwordField", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnGo", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          _this._password = "";
          _this._onJoinRoom = void 0;
          return _this;
        }

        var _proto = UINeedPassword.prototype;

        _proto.init = function init() {
          _BaseUI.prototype.init.call(this);

          this.hide();
        };

        _proto.onEnable = function onEnable() {
          ButtonUtils.bind(this._btnGo, this.onClickGo, this);
          ButtonUtils.bind(this._btnClose, this.onClickClose, this);

          this._passwordField.node.on(EditBox.EventType.TEXT_CHANGED, this.onTypingRoomId, this);
        };

        _proto.onDisable = function onDisable() {
          ButtonUtils.unbind(this._btnGo, this.onClickGo, this);
          ButtonUtils.unbind(this._btnClose, this.onClickClose, this);

          this._passwordField.node.off(EditBox.EventType.TEXT_CHANGED, this.onTypingRoomId, this);
        };

        _proto.setCallback = function setCallback(onJoinRoom) {
          this._onJoinRoom = onJoinRoom;
        };

        _proto.onTypingRoomId = function onTypingRoomId(editbox) {
          var string = editbox.string.trim();
          this._password = string;
        };

        _proto.onClickGo = function onClickGo() {
          var _this$_onJoinRoom;

          AudioHelper.playClickSound();

          if (this._password === "") {
            console.warn("Password is empty");
            return;
          }

          (_this$_onJoinRoom = this._onJoinRoom) == null ? void 0 : _this$_onJoinRoom.call(this, this._password);
        };

        _proto.onClickClose = function onClickClose() {
          AudioHelper.playClickSound();
          this.hide();
        };

        return UINeedPassword;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_passwordField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnGo", [_dec3], {
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
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UINoInternet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './ServiceLocator.ts', './ButtonUtils.ts', './GameUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Define, ServiceLocator, ButtonUtils, GameUI;

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
      Define = module.Define;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      GameUI = module.GameUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "da77em/QlBCoaiSSalAZgAP", "UINoInternet", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UINoInternet = exports('UINoInternet', (_dec = ccclass('UINoInternet'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UINoInternet, _GameUI);

        function UINoInternet() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnReconnect", _descriptor, _assertThisInitialized(_this));

          _this._network = null;
          return _this;
        }

        var _proto = UINoInternet.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          this._network = ServiceLocator.get(Define.Service.NetworkController);
        };

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnReconnect, this.onClickReconnect, this);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnReconnect, this.onClickReconnect, this);
        };

        _proto.onClickReconnect = function onClickReconnect() {
          this.hide();

          this._network.connect();
        };

        return UINoInternet;
      }(GameUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnReconnect", [_dec2], {
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

System.register("chunks:///_virtual/UIPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './ButtonUtils.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, BaseUI, ButtonUtils, AudioHelper;

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
      BaseUI = module.BaseUI;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      AudioHelper = module.AudioHelper;
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
          AudioHelper.playClickSound();
          this.leftBtnAction.call(this);
          this.hide();
        };

        _proto.onInvokeRightAction = function onInvokeRightAction() {
          AudioHelper.playClickSound();
          this.rightBtnAction.call(this);
          this.hide();
        };

        _proto.onClosePopup = function onClosePopup() {
          AudioHelper.playClickSound();
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

System.register("chunks:///_virtual/UIRebuyin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './ButtonUtils.ts', './ToggleUtils.ts', './Define.ts', './GameUI.ts', './AudioHelper.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Slider, ProgressBar, Toggle, Label, ServiceLocator, ButtonUtils, ToggleUtils, Define, GameUI, AudioHelper, EUIGame;

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
      Slider = module.Slider;
      ProgressBar = module.ProgressBar;
      Toggle = module.Toggle;
      Label = module.Label;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      ToggleUtils = module.ToggleUtils;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

      cclegacy._RF.push({}, "3adb1T7ReZKvIOQhlvm5Ia2", "UIRebuyin", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIRebuyin = exports('UIRebuyin', (_dec = ccclass('UIRebuyin'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Slider,
        visible: true
      }), _dec5 = property({
        type: ProgressBar,
        visible: true
      }), _dec6 = property({
        type: Toggle,
        visible: true
      }), _dec7 = property({
        type: Button,
        visible: true
      }), _dec8 = property({
        type: Button,
        visible: true
      }), _dec9 = property({
        type: Label,
        visible: true
      }), _dec10 = property({
        type: Label,
        visible: true
      }), _dec11 = property({
        type: Label,
        visible: true
      }), _dec12 = property({
        type: Label,
        visible: true
      }), _dec13 = property({
        type: Label,
        visible: true
      }), _dec14 = property({
        slide: true,
        min: 0,
        max: 999,
        step: 1,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIRebuyin, _GameUI);

        function UIRebuyin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnRebuyin", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnLobby", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnSlider", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnProgressBar", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_toggleAutobuy", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnAdd", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnMinus", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_minBuyinTxt", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_stackTxt", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_buyinMoneyTxt", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userProfileMoney", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timeTxt", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timeCountDown", _descriptor13, _assertThisInitialized(_this));

          _this.onMoveBack = null;
          _this._minigameManager = null;
          _this._userProfile = null;
          _this._minBuyIn = 100;
          _this._maxBuyIn = 1500;
          _this._step = 50;
          _this._currentValue = 100;
          _this._currentTime = 0;
          _this._isRunning = false;
          _this.miniGame = null;
          return _this;
        }

        var _proto = UIRebuyin.prototype;

        _proto.init = function init() {
          _GameUI.prototype.init.call(this);

          this._minigameManager = this.uiManager.getUI(EUIGame.MinigameUIManager);
          this._userProfile = ServiceLocator.get(Define.Service.UserProfile); //cheat
          // if (CHEAT) {
          //     this.miniGame = this._minigameManager.currentMiniGame.node.getComponent(PokerManager);
          // }
        };

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnRebuyin, this.onClickRebuyin, this);
          ButtonUtils.bind(this._btnLobby, this.onClickLobby, this);
          ToggleUtils.bindToggle(this._toggleAutobuy, this.onToggleAutobuy, this);
          ButtonUtils.bind(this._btnAdd, this.onClickAdd, this);
          ButtonUtils.bind(this._btnMinus, this.onClickMinus, this); //this._userProfileMoney.string = this._userProfile.userData.coin.toString();

          this.onSetupSlider();
          this.onActiveCountDown(true);
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnRebuyin, this.onClickRebuyin, this);
          ButtonUtils.unbind(this._btnLobby, this.onClickLobby, this);
          ToggleUtils.unbindToggle(this._toggleAutobuy, this.onToggleAutobuy, this);
          ButtonUtils.unbind(this._btnAdd, this.onClickAdd, this);
          ButtonUtils.unbind(this._btnMinus, this.onClickMinus, this);
          this.onActiveCountDown(false);
        };

        _proto.onClickRebuyin = function onClickRebuyin() {
          // Handle rebuyin logic here
          console.log("Rebuyin button clicked");
          AudioHelper.playClickSound(); //cheat
          // if (CHEAT) {
          //     this.miniGame.cheatPokerGameplay.onCheatAddCurrency(this._currentValue);
          // }

          this.hide();
        };

        _proto.onClickLobby = function onClickLobby() {// // Handle close logic here
          // if (DEBUG) console.log("onClickLobby Button clicked");
          // AudioHelper.playClickSound();
          // this.uiManager.showScreen(EUIScreens.MainMenu);
          // //this._minigameManager.removeGame();
          // this.hide();
        };

        _proto.update = function update(dt) {
          if (this._isRunning && this._currentTime > 0) {
            // Subtract the time passed since last frame
            this._currentTime -= dt; // Check if time ran out

            if (this._currentTime <= 0) {
              this._currentTime = 0;
              this._isRunning = false;
              this.onClickLobby();
            } // Update the label


            this.updateLabel();
          }
        };

        _proto.onActiveCountDown = function onActiveCountDown(isActive) {
          if (!isActive) {
            this._isRunning = false;
            return;
          }

          this._currentTime = this._timeCountDown;
          this._isRunning = true;
          this.updateLabel();
        };

        _proto.updateLabel = function updateLabel() {
          if (this._timeTxt) {
            // Math.ceil rounds up (so 0.1 seconds left still shows "1")
            // Use Math.floor if you prefer it to hit 0 faster
            var secondsDisplay = "(" + Math.ceil(this._currentTime) + "s)";
            this._timeTxt.string = secondsDisplay.toString();
          }
        };

        _proto.onToggleAutobuy = function onToggleAutobuy(isChecked) {
          console.log("Autobuy toggled: " + isChecked);
        };

        _proto.onSetupSlider = function onSetupSlider() {
          this._btnSlider.progress = 0.5; // Get effective max buy-in based on user's available money

          var effectiveMax = this.getEffectiveMaxBuyIn();
          this._currentValue = effectiveMax / 2;
          this._buyinMoneyTxt.string = (effectiveMax / 2).toString(); // Initialize slider and current value

          this.onSliderChange();
        } // Called when slider is dragged
        ;

        _proto.onSliderChange = function onSliderChange() {
          var effectiveMax = this.getEffectiveMaxBuyIn();
          var range = effectiveMax - this._minBuyIn; // Prevent sliding if user doesn't have enough money

          if (range <= 0) {
            this._btnSlider.progress = 0;
            this._btnProgressBar.progress = 0;
            this._currentValue = this._minBuyIn;
            this.updateUI();
            return;
          } // Convert slider progress (0-1) to actual value


          var rawValue = this._minBuyIn + this._btnSlider.progress * range; // Snap to nearest step

          this._currentValue = this.snapToStep(rawValue); // Clamp to effective max (user's money)

          this._currentValue = Math.min(this._currentValue, effectiveMax); // Update progress bar to match snapped value

          var snappedProgress = (this._currentValue - this._minBuyIn) / range;
          this._btnProgressBar.progress = snappedProgress;
          this._btnSlider.progress = snappedProgress;
          this.updateUI();
        };

        _proto.onClickAdd = function onClickAdd() {
          var effectiveMax = this.getEffectiveMaxBuyIn(); // Increase by one step

          var newValue = this._currentValue + this._step; // Clamp to effective max (user's money)

          if (newValue <= effectiveMax) {
            this._currentValue = newValue;
            this.updateSliderFromValue();
          }
        };

        _proto.onClickMinus = function onClickMinus() {
          var newValue = this._currentValue - this._step; // Clamp to min

          if (newValue >= this._minBuyIn) {
            this._currentValue = newValue;
            this.updateSliderFromValue();
          }
        } // Snap a raw value to the nearest step
        ;

        _proto.snapToStep = function snapToStep(value) {
          var stepsFromMin = Math.round((value - this._minBuyIn) / this._step);
          var snappedValue = this._minBuyIn + stepsFromMin * this._step; // Clamp between min and max

          return Math.max(this._minBuyIn, Math.min(this._maxBuyIn, snappedValue));
        } // Update slider position based on current value
        ;

        _proto.updateSliderFromValue = function updateSliderFromValue() {
          var effectiveMax = this.getEffectiveMaxBuyIn();
          var range = effectiveMax - this._minBuyIn;

          if (range <= 0) {
            this._btnSlider.progress = 0;
            this._btnProgressBar.progress = 0;
          } else {
            var progress = (this._currentValue - this._minBuyIn) / range;
            this._btnSlider.progress = progress;
            this._btnProgressBar.progress = progress;
          }

          this.updateUI();
        };

        _proto.getEffectiveMaxBuyIn = function getEffectiveMaxBuyIn() {
          // const userMoney = this._userProfile.userData.coin ?? 0;
          // // Can't buy in for more than user has
          // // Also snap to nearest step that's <= user's money
          // const effectiveMax = Math.min(this._maxBuyIn, userMoney);
          // return this.snapToStep(effectiveMax);
          return 0;
        } // Update any visual elements (like text label)
        ;

        _proto.updateUI = function updateUI() {// const userMoney = this._userProfile.userData.coin ?? 0;
          // const effectiveMax = this.getEffectiveMaxBuyIn();
          // if (this._buyinMoneyTxt) {
          //     this._buyinMoneyTxt.string = `${this._currentValue}`;
          // }
          //if (DEBUG) console.log(`Current Buy-In: ${this._currentValue} (Max: ${effectiveMax}, User has: ${userMoney})`);
        };

        return UIRebuyin;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnRebuyin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnLobby", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnSlider", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_btnProgressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_toggleAutobuy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_btnAdd", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_btnMinus", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_minBuyinTxt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_stackTxt", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_buyinMoneyTxt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_userProfileMoney", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_timeTxt", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_timeCountDown", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIReconnect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Define.ts', './AsyncUtils.ts', './GameUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, isValid, ServiceLocator, Define, AsyncUtils, GameUI;

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
      isValid = module.isValid;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      Define = module.Define;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      GameUI = module.GameUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "22320Bc1gBAkbOCZhXSnq3c", "UIReconnect", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIReconnect = exports('UIReconnect', (_dec = ccclass('UIReconnect'), _dec2 = property({
        type: Label,
        visible: true
      }), _dec3 = property({
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIReconnect, _GameUI);

        function UIReconnect() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_txtConnect", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtNoti", _descriptor2, _assertThisInitialized(_this));

          _this._isEffect = false;
          _this._isShowing = false;
          _this._lastRemainTime = -1;
          _this._networkController = null;
          return _this;
        }

        var _proto = UIReconnect.prototype;

        _proto.init = function init() {
          this._networkController = ServiceLocator.get(Define.Service.NetworkController);
        };

        _proto.onShow = function onShow() {
          this._isShowing = true;

          if (!this._isEffect) {
            this._isEffect = true;
            this.onConnectEffect();
          }
        };

        _proto.update = function update(dt) {
          if (!this._isShowing) return;
          if (!this._isEffect || !this._networkController) return;
          var remainTime = Math.ceil(this._networkController.ReconnectTimer.getRemainTime());

          if (remainTime !== this._lastRemainTime) {
            this._lastRemainTime = remainTime;
            this.setNotiTime(remainTime);
          }
        };

        _proto.setNotiTime = function setNotiTime(remainTime) {
          this._txtNoti.string = "Reconnect in " + remainTime + " seconds";
        };

        _proto.onHide = function onHide() {
          this._isEffect = false;
          this._isShowing = false;
        };

        _proto.onConnectEffect = /*#__PURE__*/function () {
          var _onConnectEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var baseText, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    baseText = "Connecting";

                  case 1:
                    if (!(this._isEffect && isValid(this.node))) {
                      _context.next = 17;
                      break;
                    }

                    this._txtConnect.string = baseText; // Chạy 3 dấu chấm

                    i = 0;

                  case 4:
                    if (!(i < 3)) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 7;
                    return AsyncUtils.waitForSeconds(0.5);

                  case 7:
                    if (!(!this._isEffect || !isValid(this.node))) {
                      _context.next = 9;
                      break;
                    }

                    return _context.abrupt("return");

                  case 9:
                    this._txtConnect.string += ".";

                  case 10:
                    i++;
                    _context.next = 4;
                    break;

                  case 13:
                    _context.next = 15;
                    return AsyncUtils.waitForSeconds(0.5);

                  case 15:
                    _context.next = 1;
                    break;

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onConnectEffect() {
            return _onConnectEffect.apply(this, arguments);
          }

          return onConnectEffect;
        }();

        return UIReconnect;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_txtConnect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_txtNoti", [_dec3], {
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

System.register("chunks:///_virtual/UISetting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlayerPrefs.ts', './ToggleUtils.ts', './ButtonUtils.ts', './AudioHelper.ts', './PopupBase.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Toggle, PlayerPrefs, ToggleUtils, ButtonUtils, AudioHelper, PopupBase;

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
      PlayerPrefs = module.PlayerPrefs;
    }, function (module) {
      ToggleUtils = module.ToggleUtils;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      PopupBase = module.PopupBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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
      }), _dec5 = property({
        type: Toggle,
        visible: true
      }), _dec6 = property({
        type: Toggle,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(UISetting, _PopupBase);

        function UISetting() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnClose", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_musicToggleOn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_musicToggleOff", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sfxToggleOn", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sfxToggleOff", _descriptor5, _assertThisInitialized(_this));

          _this._isSoundOn = null;
          _this._isMusicOn = null;
          return _this;
        }

        var _proto = UISetting.prototype;

        _proto.onLoad = function onLoad() {
          this._isSoundOn = PlayerPrefs.getBool("soundOn", true);
          this._isMusicOn = PlayerPrefs.getBool("musicOn", true);
          this.setToggleMusic(this._isMusicOn);
          this.setToggleSound(this._isSoundOn);
        };

        _proto.onShow = function onShow() {
          // Attach event listeners when panel shows
          ToggleUtils.bindToggle(this._musicToggleOn, this.onMusicToggleChanged, this);
          ToggleUtils.bindToggle(this._sfxToggleOn, this.onSFXToggleChanged, this);
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);

          _PopupBase.prototype.onShow.call(this);
        };

        _proto.onHide = function onHide() {
          // Detach listeners to prevent duplicates or leaks  
          ToggleUtils.unbindToggle(this._musicToggleOn, this.onMusicToggleChanged, this);
          ToggleUtils.unbindToggle(this._sfxToggleOn, this.onSFXToggleChanged, this);
          ButtonUtils.unbind(this._btnClose, this.onClosePopup, this);
        };

        _proto.onMusicToggleChanged = function onMusicToggleChanged() {
          AudioHelper.playClickSound();
          this._isMusicOn = !this._musicToggleOn.isChecked;
          this.audioManager.muteMusic(this._isMusicOn);
        };

        _proto.onSFXToggleChanged = function onSFXToggleChanged() {
          AudioHelper.playClickSound();
          this._isSoundOn = !this._sfxToggleOn.isChecked;
          this.audioManager.muteSFX(this._isSoundOn);
        };

        _proto.onClosePopup = function onClosePopup() {
          //AudioHelperAudioHelper.playClickSound();
          this.hide();
        };

        _proto.setToggleMusic = function setToggleMusic(isActive) {
          if (isActive) {
            this._musicToggleOn.isChecked = true;
          } else {
            this._musicToggleOff.isChecked = true;
          }
        };

        _proto.setToggleSound = function setToggleSound(isActive) {
          if (isActive) {
            this._sfxToggleOn.isChecked = true;
          } else {
            this._sfxToggleOff.isChecked = true;
          }
        };

        return UISetting;
      }(PopupBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_musicToggleOn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_musicToggleOff", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_sfxToggleOn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_sfxToggleOff", [_dec6], {
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

System.register("chunks:///_virtual/UISplashScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUI.ts', './LogUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, ProgressBar, Label, clamp01, GameUI, LogUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      clamp01 = module.clamp01;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      LogUtils = module.LogUtils;
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
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UISplashScreen, _GameUI);

        function UISplashScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_progressBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lblDescription", _descriptor2, _assertThisInitialized(_this));

          _this.SPEED = 0.5;
          _this.MIN_DISPLAY_TIME = 2000;
          _this._onFinish = null;
          _this._targetProgress = 0;
          _this._visualProgress = 0;
          _this._isLoading = false;
          _this._startTime = 0;
          _this._totalWeight = 0;
          _this._currentWeight = 0;
          _this._isTasksCompleted = false;
          return _this;
        }

        var _proto = UISplashScreen.prototype;

        _proto.onShow = function onShow() {
          this.setProgress(0.0);
          if (this._lblDescription) this._lblDescription.string = "Initializing...";
        };

        _proto.setProgress = function setProgress(value) {
          if (this._progressBar) {
            this._progressBar.progress = clamp01(value);
          }
        };

        _proto.executeTasks = function executeTasks(tasks, onFinish) {
          if (this._isLoading) return;
          this._onFinish = onFinish;
          this._isLoading = true;
          this._isTasksCompleted = false;
          this._visualProgress = 0;
          this._targetProgress = 0;
          this._currentWeight = 0;
          this._startTime = Date.now();
          this._totalWeight = tasks.reduce(function (sum, t) {
            return sum + (t.weight || 1);
          }, 0);
          if (this._totalWeight === 0) this._totalWeight = 1;

          this._processTaskList(tasks);
        };

        _proto._processTaskList = /*#__PURE__*/function () {
          var _processTaskList2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tasks) {
            var _iterator, _step, task;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelperLoose(tasks);

                  case 1:
                    if ((_step = _iterator()).done) {
                      _context.next = 17;
                      break;
                    }

                    task = _step.value;

                    if (this._lblDescription) {
                      this._lblDescription.string = task.description || "Loading...";
                    }

                    LogUtils.log("\uD83D\uDD04 Start Task: " + task.id);
                    _context.prev = 5;
                    _context.next = 8;
                    return task.onExecute();

                  case 8:
                    _context.next = 13;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](5);
                    LogUtils.error("\u274C Task " + task.id + " failed:", _context.t0);

                  case 13:
                    this._currentWeight += task.weight || 1;
                    this._targetProgress = this._currentWeight / this._totalWeight;

                  case 15:
                    _context.next = 1;
                    break;

                  case 17:
                    this._isTasksCompleted = true;
                    this._targetProgress = 1;
                    if (this._lblDescription) this._lblDescription.string = "Finishing up...";

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[5, 10]]);
          }));

          function _processTaskList(_x) {
            return _processTaskList2.apply(this, arguments);
          }

          return _processTaskList;
        }();

        _proto.update = function update(deltaTime) {
          if (!this._isLoading) return;

          if (this._visualProgress < this._targetProgress) {
            this._visualProgress += deltaTime * this.SPEED;

            if (this._visualProgress > this._targetProgress) {
              this._visualProgress = this._targetProgress;
            }
          }

          this.setProgress(this._visualProgress);

          if (this._visualProgress >= 1 && this._isTasksCompleted) {
            var elapsedTime = Date.now() - this._startTime;

            if (elapsedTime >= this.MIN_DISPLAY_TIME) {
              this.finishLoading();
            }
          }
        };

        _proto.finishLoading = function finishLoading() {
          var _this$_onFinish;

          this._isLoading = false;
          LogUtils.log("\u2705 Done all tasks in " + (Date.now() - this._startTime) + "ms");
          (_this$_onFinish = this._onFinish) == null ? void 0 : _this$_onFinish.call(this);
        };

        return UISplashScreen;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lblDescription", [_dec3], {
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

System.register("chunks:///_virtual/UITestNetwork.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './GameUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, EditBox, ButtonUtils, GameUI;

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
      EditBox = module.EditBox;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      GameUI = module.GameUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "fba9dDk3c5DIYLY8BHUYaj6", "UITestNetwork", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UITestNetwork = exports('UITestNetwork', (_dec = ccclass('UITestNetwork'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec3 = property({
        type: Button,
        visible: true
      }), _dec4 = property({
        type: Button,
        visible: true
      }), _dec5 = property({
        type: Button,
        visible: true
      }), _dec6 = property({
        type: Button,
        visible: true
      }), _dec7 = property({
        type: EditBox,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UITestNetwork, _GameUI);

        function UITestNetwork() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_btnLogout", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnGetRoom", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnSearchRoom", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnCreateRoom", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnJoinRoom", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_joinField", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UITestNetwork.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnLogout, this.onLogout, this);
          ButtonUtils.bind(this._btnGetRoom, this.onGetRoom, this);
          ButtonUtils.bind(this._btnSearchRoom, this.onSearchRoom, this);
          ButtonUtils.bind(this._btnCreateRoom, this.onCreateRoom, this);
          ButtonUtils.bind(this._btnJoinRoom, this.onJoinRoom, this);
          this._joinField.string = '';
        };

        _proto.onHide = function onHide() {
          ButtonUtils.unbind(this._btnLogout, this.onLogout, this);
          ButtonUtils.unbind(this._btnGetRoom, this.onGetRoom, this);
          ButtonUtils.unbind(this._btnSearchRoom, this.onSearchRoom, this);
          ButtonUtils.unbind(this._btnCreateRoom, this.onCreateRoom, this);
          ButtonUtils.unbind(this._btnJoinRoom, this.onJoinRoom, this);
        };

        _proto.onLogout = function onLogout() {
          this.gameController.logout();
        };

        _proto.onGetRoom = function onGetRoom() {// this.gameController.getRooms((roomData: RoomData) => {
          // });
        };

        _proto.onSearchRoom = function onSearchRoom() {
          this.gameController.searchRoom("POKER_2000", null);
        };

        _proto.onCreateRoom = function onCreateRoom() {
          this.gameController.createRoom("POKER_2000", null);
        };

        _proto.onJoinRoom = function onJoinRoom() {
          var idRoom = Number(this._joinField.string.trim());
          this.gameController.joinRoomWithNetwork(idRoom, null);
        };

        return UITestNetwork;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnLogout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnGetRoom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnSearchRoom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_btnCreateRoom", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_btnJoinRoom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_joinField", [_dec7], {
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

System.register("chunks:///_virtual/UITutorial.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './AudioHelper.ts', './PopupBase.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Node, Button, ButtonUtils, AudioHelper, PopupBase;

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
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      PopupBase = module.PopupBase;
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(UITutorial, _PopupBase);

        function UITutorial() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_toggleContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_contentContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_btnClose", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UITutorial.prototype;

        _proto.onShow = function onShow() {
          ButtonUtils.bind(this._btnClose, this.onClosePopup, this);

          _PopupBase.prototype.onShow.call(this);
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
          AudioHelper.playClickSound();
          this.hide();
        };

        return UITutorial;
      }(PopupBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_toggleContainer", [_dec2], {
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

System.register("chunks:///_virtual/UIUserProfile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonUtils.ts', './GameUI.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, ButtonUtils, GameUI, AudioHelper;

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
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "199f0Lo+n5KX4VZDe0W5P15", "UIUserProfile", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UIUserProfile = exports('UIUserProfile', (_dec = ccclass('UIUserProfile'), _dec2 = property({
        type: Button,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIUserProfile, _GameUI);

        function UIUserProfile() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

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
          AudioHelper.playClickSound();
          this.hide();
        };

        return UIUserProfile;
      }(GameUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec2], {
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

System.register("chunks:///_virtual/UIWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EWheel.ts', './ButtonUtils.ts', './GameUI.ts', './AudioHelper.ts', './EUIGame.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, Node, math, EWheelStatus, ButtonUtils, GameUI, AudioHelper, EUIGame;

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
      Button = module.Button;
      Node = module.Node;
      math = module.math;
    }, function (module) {
      EWheelStatus = module.EWheelStatus;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }, function (module) {
      EUIGame = module.EUIGame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

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
      }), _dec12 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_GameUI) {
        _inheritsLoose(UIWheel, _GameUI);

        function UIWheel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameUI.call.apply(_GameUI, [this].concat(args)) || this;

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

          _initializerDefineProperty(_this, "_isFirstItemInHalfOfWheel", _descriptor11, _assertThisInitialized(_this));

          _this._speedSpin = 0;
          _this._deceleration = 0;
          _this._isSpinning = false;
          _this._targetRotationForSnap = 0;
          _this._eWheelStatus = EWheelStatus.Idle;
          _this._totalDistanceNeeded = 0;
          _this._currentDistanceTraveled = 0;
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
          AudioHelper.playClickSound();
          this.startSpin(1);
        };

        _proto.startSpin = function startSpin(targetIndex) {
          if (this._isSpinning) return;
          this._isSpinning = true;
          this._speedSpin = this._startSpeedSpin; // Reset distance tracker

          this._currentDistanceTraveled = 0; // 1. Constants

          var rounds = math.randomRangeInt(this._minRound, this._maxRound);
          var anglePerItem = 360 / this._numberItem; // 2. Normalize Current Angle

          var currentRot = this._spin.angle % 360;
          if (currentRot < 0) currentRot += 360; // 3. Calculate Item Angle (Where item is on the texture)
          // ------------------------------------------------------

          var sliceStart = -1 * targetIndex * anglePerItem;

          if (this._isFirstItemInHalfOfWheel) {
            sliceStart -= anglePerItem / 2;
          }

          var sliceEnd = sliceStart + anglePerItem;
          var minSafeAngle = sliceStart + this._offsetAngle;
          var maxSafeAngle = sliceEnd - this._offsetAngle; // Get the random angle (e.g., -5 or +20)

          var itemLocalAngle = math.randomRange(minSafeAngle, maxSafeAngle); // 4. Calculate Wheel Target
          // ------------------------------------------------------
          // Invert: If item is at +10, wheel must stop at 350 (-10)

          var wheelStopAngle = (360 - itemLocalAngle) % 360;
          if (wheelStopAngle < 0) wheelStopAngle += 360; // 5. Calculate Distance Gap (Always positive)

          var gap = 0;

          if (this._isReverse) {
            gap = wheelStopAngle - currentRot; // Moving Up
          } else {
            gap = currentRot - wheelStopAngle; // Moving Down
          }

          if (gap < 0) gap += 360; // 6. Total Distance & Physics
          // ------------------------------------------------------

          this._totalDistanceNeeded = gap + rounds * 360; // Calculate constant deceleration needed to stop exactly at that distance
          // Formula: a = -(v^2) / 2d

          this._deceleration = -(this._startSpeedSpin * this._startSpeedSpin) / (2 * this._totalDistanceNeeded); // Calculate the Final Target Angle (for the hard snap at the end)

          if (this._isReverse) {
            this._targetRotationForSnap = this._spin.angle + this._totalDistanceNeeded;
          } else {
            this._targetRotationForSnap = this._spin.angle - this._totalDistanceNeeded;
          }

          console.log("Target Index: " + targetIndex + ", Dist: " + this._totalDistanceNeeded.toFixed(2) + ", StopAngle: " + wheelStopAngle.toFixed(2));
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
          if (this._eWheelStatus !== EWheelStatus.Spin) return;
          this._btnSpin.interactable = false; // 1. Calculate how much we WANT to move this frame

          var deltaAngle = this._speedSpin * deltaTime; // 2. Safety Check: Don't move past the finish line
          // Calculate remaining distance

          var distanceRemaining = this._totalDistanceNeeded - this._currentDistanceTraveled; // If the move is larger than what's left, clamp it

          if (deltaAngle >= distanceRemaining) {
            deltaAngle = distanceRemaining;
          } // 3. Move the Wheel visually


          if (this._isReverse) {
            this._spin.angle += deltaAngle;
          } else {
            this._spin.angle -= deltaAngle;
          } // 4. Update Physics


          this._currentDistanceTraveled += deltaAngle;
          this._speedSpin += this._deceleration * deltaTime; // 5. STOP CONDITION
          // If we have traveled the full distance (or speed is effectively gone)

          if (this._currentDistanceTraveled >= this._totalDistanceNeeded || this._speedSpin <= 0) {
            this.onSpinFinished(); // FORCE SNAP to ensure perfect alignment

            this._spin.angle = this._targetRotationForSnap;
            this._speedSpin = 0;
            this._isSpinning = false;
          }
        };

        _proto.onSpinFinished = /*#__PURE__*/function () {
          var _onSpinFinished = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var uipopup;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // hold for a moment before showing result
                    //await AsyncUtils.waitForSeconds(1);
                    // Keep angle within -360 to 360 to prevent massive numbers
                    this._spin.angle = this._spin.angle % 360; // Return to Idle state

                    this._eWheelStatus = EWheelStatus.Rotate;
                    uipopup = this.uiManager.show(EUIGame.Popup_Dynamic);
                    uipopup.InitPopupDynamic("Notification", 'Congratulations! You won! a diamond', 'Reward', function () {}); // console.log(`Finished at: ${this._spin.angle}`);

                    this._btnSpin.interactable = true;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onSpinFinished() {
            return _onSpinFinished.apply(this, arguments);
          }

          return onSpinFinished;
        }();

        _proto.onClosePopup = function onClosePopup() {
          AudioHelper.playClickSound();
          this.hide();
        };

        return UIWheel;
      }(GameUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnSpin", [_dec2], {
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
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_isFirstItemInHalfOfWheel", [_dec12], {
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
          this._level = 1;
          this._balance = 0;
          this.updateData(builder);
        }

        var _proto = UserData.prototype;

        _proto.updateData = function updateData(builder) {
          this._userID = builder.UserID;
          this._userName = builder.UserName;
          this._email = builder.Email;
          this._avatarUrl = builder.AvatarUrl;
          this._level = builder.Level;
          this._balance = builder.Balance;
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
          key: "level",
          get: function get() {
            return this._level;
          }
        }, {
          key: "balance",
          get: function get() {
            return this._balance;
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
          this.Level = 1;
          this.Balance = 0;
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

        _proto2.setLevel = function setLevel(level) {
          this.Level = level;
          return this;
        };

        _proto2.setBalance = function setBalance(balance) {
          this.Balance = balance;
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

          return this._userData;
        };

        return UserDataBuilder;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserHandRankUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncUtils.ts', './HandRank.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Node, ParticleSystem2D, Component, AsyncUtils, HandRank;

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
      ParticleSystem2D = module.ParticleSystem2D;
      Component = module.Component;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      HandRank = module.HandRank;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "4ed73GNwtBEL6afdJJ6YtUY", "UserHandRankUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserHandRankUIData = exports('UserHandRankUIData', (_dec = ccclass('UserHandRankUIData'), _dec2 = property({
        type: Enum(HandRank)
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = function UserHandRankUIData() {
        _initializerDefineProperty(this, "HandRank", _descriptor, this);

        _initializerDefineProperty(this, "BannerNode", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HandRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BannerNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UserHandRankUI = exports('UserHandRankUI', (_dec4 = ccclass('UserHandRankUI'), _dec5 = property({
        type: UserHandRankUIData,
        visible: true
      }), _dec6 = property({
        type: ParticleSystem2D,
        visible: true
      }), _dec7 = property({
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserHandRankUI, _Component);

        function UserHandRankUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_listHandRankData", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_onWinParticle", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timeHideDefault", _descriptor5, _assertThisInitialized(_this));

          _this._currentHandRank = void 0;
          return _this;
        }

        var _proto = UserHandRankUI.prototype;

        _proto.showHandRank = /*#__PURE__*/function () {
          var _showHandRank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(handRank, autoHide, timeHide) {
            var handData, actualTimeHide;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (autoHide === void 0) {
                      autoHide = false;
                    }

                    this.hideAllHandRank();
                    handData = this._listHandRankData.find(function (u) {
                      return u.HandRank === handRank;
                    });

                    if (handData) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    this._currentHandRank = handData.BannerNode;
                    this._currentHandRank.active = true;

                    if (autoHide) {
                      _context.next = 10;
                      break;
                    }

                    return _context.abrupt("return");

                  case 10:
                    actualTimeHide = timeHide ? timeHide : this._timeHideDefault;
                    _context.next = 13;
                    return AsyncUtils.waitForSeconds(actualTimeHide);

                  case 13:
                    this._currentHandRank.active = false;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function showHandRank(_x, _x2, _x3) {
            return _showHandRank.apply(this, arguments);
          }

          return showHandRank;
        }();

        _proto.hideAllHandRank = function hideAllHandRank() {
          this._listHandRankData.forEach(function (u) {
            return u.BannerNode.active = false;
          });
        };

        _proto.onPlayWinParticle = function onPlayWinParticle() {
          this._onWinParticle.resetSystem();
        };

        return UserHandRankUI;
      }(Component), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_listHandRankData", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_onWinParticle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "_timeHideDefault", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserOptionsPanel.ts', './UserRaisePanel.ts', './MiniUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, EventTarget, UserOptionsPanel, UserRaisePanel, MiniUI;

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
    }, function (module) {
      UserOptionsPanel = module.UserOptionsPanel;
    }, function (module) {
      UserRaisePanel = module.UserRaisePanel;
    }, function (module) {
      MiniUI = module.MiniUI;
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UserHUD, _MiniUI);

        function UserHUD() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;
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

        _proto.show = function show() {
          this.setActiveOptionsPanel(true);
          this.setActiveSliderPanel(false);

          this._userOptionsPanel.setEvents();

          _MiniUI.prototype.show.call(this);
        };

        _proto.hide = function hide() {
          this._userOptionsPanel.removeEvents();

          _MiniUI.prototype.hide.call(this);
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
          //this._userOptionsPanel.setShowHandOptions(isShowDown);
          return this;
        };

        _proto.setActiveOptionsPanel = function setActiveOptionsPanel(isOpen) {
          if (isOpen) this._userOptionsPanel.show();else this._userOptionsPanel.hide();
        };

        _proto.setActiveSliderPanel = function setActiveSliderPanel(isOpen) {
          if (isOpen) this._userRaisePanel.show();else this._userRaisePanel.hide();
        };

        _proto.setRaiseStep = function setRaiseStep(raiseStep) {
          this._userRaisePanel.setRaiseStep(raiseStep);
        };

        _proto.sendOptions = function sendOptions(eUserOptions, raiseValue) {
          this.Events.emit(this.ON_CHOOSING_OPTION, eUserOptions, raiseValue);
        };

        _createClass(UserHUD, [{
          key: "UserRaisePanel",
          get: function get() {
            return this._userRaisePanel;
          }
        }]);

        return UserHUD;
      }(MiniUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userOptionsPanel", [_dec2], {
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

System.register("chunks:///_virtual/UserInforUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniUI.ts', './BaseUserInforPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, MiniUI, BaseUserInforPanel, EUserState;

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
      Node = module.Node;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      BaseUserInforPanel = module.BaseUserInforPanel;
      EUserState = module.EUserState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "7253dhEdRBAQYQeHrt5DDT9", "UserInforUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserInforUI = exports('UserInforUI', (_dec = ccclass('UserInforUI'), _dec2 = property({
        type: [BaseUserInforPanel],
        visible: true
      }), _dec3 = property({
        type: [Node],
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UserInforUI, _MiniUI);

        function UserInforUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_userPanels", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_nodePositions", _descriptor2, _assertThisInitialized(_this));

          _this._userInforMap = new Map();
          return _this;
        }

        var _proto = UserInforUI.prototype;

        _proto.init = function init() {
          this._userPanels.forEach(function (u) {
            u.init();
          });

          this._nodePositions.forEach(function (n) {
            n.active = false;
          });
        };

        _proto.resetState = function resetState() {
          this._userPanels.forEach(function (u) {
            return u.resetState();
          });
        };

        _proto.getPanel = function getPanel(index) {
          return this._userPanels[index];
        };

        _proto.getPanelById = function getPanelById(id) {
          return this._userInforMap.get(id);
        };

        _proto.getAllPanels = function getAllPanels() {
          return Array.from(this._userInforMap.values());
        };

        _proto.getPanelsWithState = function getPanelsWithState(state) {
          var result = [];

          for (var _iterator = _createForOfIteratorHelperLoose(this._userInforMap.values()), _step; !(_step = _iterator()).done;) {
            var panel = _step.value;

            if (panel.PanelState === state) {
              result.push(panel);
            }
          }

          return result;
        };

        _proto.removePanelId = function removePanelId(id) {
          this._userInforMap["delete"](id);
        };

        _proto.setUserPanel = function setUserPanel(seatIndex, playerId) {
          this._nodePositions[seatIndex].active = true;
          var panel = this.getPanel(seatIndex);

          this._userInforMap.set(playerId, panel);

          panel.PlayerId = playerId;
          panel.PanelState = EUserState.Waiting;
          return panel;
        };

        return UserInforUI;
      }(MiniUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_userPanels", [_dec2], {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

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
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UserNotiOption = exports('UserNotiOption', (_dec4 = ccclass('UserNotiOption'), _dec5 = property({
        type: UserNotiData,
        visible: true
      }), _dec6 = property({
        visible: true
      }), _dec7 = property({
        visible: true
      }), _dec8 = property({
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

          _initializerDefineProperty(_this, "_scaleMultiplier", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timeScaleNoti", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_timeShowNoti", _descriptor6, _assertThisInitialized(_this));

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
                    Tweener.LocalScale({
                      target: this._currentNoti,
                      start: Vec3.ONE.clone().multiplyScalar(this._scaleMultiplier),
                      end: Vec3.ONE.clone(),
                      duration: this._timeScaleNoti
                    });

                    if (autoHide) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("return");

                  case 11:
                    _context.next = 13;
                    return AsyncUtils.waitForSeconds(this._timeShowNoti + this._timeScaleNoti);

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
      }(Component), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_userNotiData", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_scaleMultiplier", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "_timeScaleNoti", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "_timeShowNoti", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserOptionsPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUserOptions.ts', './ButtonUtils.ts', './MiniUI.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Enum, Button, EUserOptions, ButtonUtils, MiniUI, AudioHelper;

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
      EUserOptions = module.EUserOptions;
    }, function (module) {
      ButtonUtils = module.ButtonUtils;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3;

      cclegacy._RF.push({}, "6dbd5RN2gxCy5k5wdIj4vO2", "UserOptionsPanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var OptionButton = exports('OptionButton', (_dec = ccclass('OptionButton'), _dec2 = property({
        type: Enum(EUserOptions),
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
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BtnOption", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var UserOptionsPanel = exports('UserOptionsPanel', (_dec4 = ccclass('UserOptionsPanel'), _dec5 = property({
        type: OptionButton,
        visible: true
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UserOptionsPanel, _MiniUI);

        function UserOptionsPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;
          _this._userUI = void 0;

          _initializerDefineProperty(_this, "_optionButtons", _descriptor3, _assertThisInitialized(_this));

          _this.isRaisePanelOpen = false;
          return _this;
        }

        var _proto = UserOptionsPanel.prototype;

        _proto.initHUD = function initHUD(userUI) {
          this._userUI = userUI;
        };

        _proto.onShow = function onShow() {
          this.isRaisePanelOpen = false;
        };

        _proto.setEvents = function setEvents() {
          ButtonUtils.bind(this.getButton(EUserOptions.Fold), this.onClickFold, this);
          ButtonUtils.bind(this.getButton(EUserOptions.Check), this.onClickCheck, this);
          ButtonUtils.bind(this.getButton(EUserOptions.Call), this.onClickCall, this);
          ButtonUtils.bind(this.getButton(EUserOptions.Raise), this.onClickRaise, this);
          ButtonUtils.bind(this.getButton(EUserOptions.AllIn), this.onClickAllIn, this);
          ButtonUtils.bind(this.getButton(EUserOptions.Bet), this.onClickBet, this);
        };

        _proto.removeEvents = function removeEvents() {
          ButtonUtils.unbind(this.getButton(EUserOptions.Fold), this.onClickFold, this);
          ButtonUtils.unbind(this.getButton(EUserOptions.Check), this.onClickCheck, this);
          ButtonUtils.unbind(this.getButton(EUserOptions.Call), this.onClickCall, this);
          ButtonUtils.unbind(this.getButton(EUserOptions.Raise), this.onClickRaise, this);
          ButtonUtils.unbind(this.getButton(EUserOptions.AllIn), this.onClickAllIn, this);
          ButtonUtils.unbind(this.getButton(EUserOptions.Bet), this.onClickBet, this);
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
            var optionName = EUserOptions[oButton.ButtonType];
            oButton.BtnOption.node.active = options.find(function (o) {
              return o === optionName;
            }) !== undefined;
          });
        };

        _proto.onClickFold = function onClickFold() {
          AudioHelper.playTapSound();

          this._userUI.sendOptions(EUserOptions.Fold);
        };

        _proto.onClickCheck = function onClickCheck() {
          AudioHelper.playTapSound();

          this._userUI.sendOptions(EUserOptions.Check);
        };

        _proto.onClickCall = function onClickCall() {
          AudioHelper.playTapSound();

          this._userUI.sendOptions(EUserOptions.Call);
        };

        _proto.onClickRaise = function onClickRaise() {
          AudioHelper.playTapSound(); //this.hide();

          this._userUI.setActiveSliderPanel(!this.isRaisePanelOpen);

          this.isRaisePanelOpen = !this.isRaisePanelOpen;
          this.getButton(EUserOptions.Raise).node.active = false;
          this.getButton(EUserOptions.Bet).node.active = true;
        };

        _proto.onClickBet = function onClickBet() {
          AudioHelper.playTapSound();

          this._userUI.sendOptions(EUserOptions.Raise, this._userUI.UserRaisePanel.RaiseValue);
        };

        _proto.onClickAllIn = function onClickAllIn() {
          AudioHelper.playTapSound();
          console.log("show clicked");

          this._userUI.sendOptions(EUserOptions.AllIn);
        } // public setShowHandOptions(isShowDown: boolean): void {
        //     this._optionButtons.forEach(oButton => {
        //         if (oButton.ButtonType == EUserOptions.Show) {
        //             oButton.BtnOption.node.active = isShowDown;
        //         }
        //         else {
        //             oButton.BtnOption.node.active = !isShowDown;
        //         }
        //     });
        //     this.getButton(EUserOptions.Fold).node.active = true;
        // }
        ;

        return UserOptionsPanel;
      }(MiniUI), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_optionButtons", [_dec5], {
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

System.register("chunks:///_virtual/UserProfile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserData.ts'], function () {
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
      var UserProfile = (_dec = ccclass('UserProfile'), _dec(_class = /*#__PURE__*/function (_Component) {
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

        _proto.init = function init() {
          this._builder = new UserDataBuilder();
        };

        _proto.loadUserData = function loadUserData(data) {
          {
            this._builder.setUserID(data.userID).setName(data.userName).setAvatarUrl(data.avatarURL).setLevel(data.level).setBalance(data.balance);

            if (this._userData) {
              this._userData = this._builder.update();
            } else {
              this._userData = this._builder.build();
            }
          }
        };

        _proto.deposit = function deposit(newBalance) {
          this._builder.setBalance(newBalance).update();
        };

        _proto.loadFakeData = function loadFakeData() {
          this._userData = this._builder.setUserID("user_andy").setName('user_andy').setBalance(1000).setAvatarUrl('https://res.cloudinary.com/dvqf9cl2u/image/upload/anh-gai-xinh-sexy-2_nnf69k.jpg').build();
        };

        _createClass(UserProfile, [{
          key: "userData",
          get: function get() {
            if (!this._userData) {
              this.loadFakeData();
            }

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
          key: "Level",
          set: function set(value) {
            this._builder.setLevel(value).update();
          }
        }, {
          key: "Balance",
          set: function set(value) {
            this._builder.setBalance(value).update();
          }
        }]);

        return UserProfile;
      }(Component)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserRaisePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EUserOptions.ts', './MiniUI.ts', './AudioHelper.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Slider, Label, EUserOptions, MiniUI, AudioHelper;

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
      Slider = module.Slider;
      Label = module.Label;
    }, function (module) {
      EUserOptions = module.EUserOptions;
    }, function (module) {
      MiniUI = module.MiniUI;
    }, function (module) {
      AudioHelper = module.AudioHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "cc4b5bMvBxKjo8ub51uHO1E", "UserRaisePanel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UserRaisePanel = exports('UserRaisePanel', (_dec = ccclass('UserRaisePanel'), _dec2 = property({
        type: Slider,
        visible: true
      }), _dec3 = property({
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniUI) {
        _inheritsLoose(UserRaisePanel, _MiniUI);

        function UserRaisePanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _MiniUI.call.apply(_MiniUI, [this].concat(args)) || this;
          _this._userUI = null;

          _initializerDefineProperty(_this, "_slider", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_txtCurrentValue", _descriptor2, _assertThisInitialized(_this));

          _this._currentRaiseValue = 0;
          _this._raiseStep = 1000;
          _this._minimumRaise = 0;
          _this._maximumRaise = 0;
          return _this;
        }

        var _proto = UserRaisePanel.prototype;

        _proto.initHUD = function initHUD(userUI) {
          this._userUI = userUI;
        };

        _proto.onEnable = function onEnable() {
          //ButtonUtils.bind(this._btnOK, this.onClickOK, this);
          //ButtonUtils.bind(this._btnClose, this.onClickClose, this);
          //ButtonUtils.bind(this._optionAllIn.BtnOption, this.onClickAllIn, this);
          this._slider.node.on('slide', this.onSliderChanged, this);
        };

        _proto.onDisable = function onDisable() {
          //ButtonUtils.unbind(this._btnOK, this.onClickOK, this);
          //ButtonUtils.unbind(this._btnClose, this.onClickClose, this);
          //ButtonUtils.unbind(this._optionAllIn.BtnOption, this.onClickAllIn, this);
          this._slider.node.off('slide', this.onSliderChanged, this);
        };

        _proto.show = function show() {
          _MiniUI.prototype.show.call(this);

          this._currentRaiseValue = this._minimumRaise;
          this._slider.progress = 0;
          this.updateSlider(0);
        };

        _proto.setRaiseStep = function setRaiseStep(raiseStep) {
          this._raiseStep = raiseStep;
        };

        _proto.setRaiseRange = function setRaiseRange(minRaise, maxRaise) {
          this._minimumRaise = minRaise;
          this._maximumRaise = maxRaise; // this._txtMinValue.string = minRaise.toString();
          // this._txtMaxValue.string = maxRaise.toString();
        };

        _proto.onClickOK = function onClickOK() {
          AudioHelper.playTapSound();

          this._userUI.sendOptions(EUserOptions.Raise, this._currentRaiseValue); //this.adapter.sendAction(EUserOptions.Raise, this._currentRaiseValue);


          this.hide();
        };

        _proto.onClickClose = function onClickClose() {
          AudioHelper.playTapSound();
          this.hide();

          this._userUI.setActiveOptionsPanel(true);
        };

        _proto.onClickAllIn = function onClickAllIn() {
          AudioHelper.playTapSound();
          console.log("All In clicked");

          this._userUI.sendOptions(EUserOptions.AllIn);
        };

        _proto.onSliderChanged = function onSliderChanged(slider) {
          this.updateSlider(slider.progress);
        };

        _proto.updateSlider = function updateSlider(progress) {
          if (progress >= 1) {
            this._txtCurrentValue.string = "All-In";
          } else {
            var rawValue = progress * (this._maximumRaise - this._minimumRaise) + this._minimumRaise;
            var stepCount = Math.round((rawValue - this._minimumRaise) / this._raiseStep);
            this._currentRaiseValue = stepCount * this._raiseStep + this._minimumRaise;
            var valueByK = this._currentRaiseValue / 1000;
            this._txtCurrentValue.string = valueByK + "k";
          }
        };

        _createClass(UserRaisePanel, [{
          key: "RaiseValue",
          get: function get() {
            return this._currentRaiseValue;
          }
        }]);

        return UserRaisePanel;
      }(MiniUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_txtCurrentValue", [_dec3], {
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

System.register("chunks:///_virtual/WinPotBehaviour.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseBehaviour.ts', './BetManager.ts', './UserManager.ts', './PokerTableUI.ts', './AsyncUtils.ts', './UserInforUI.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, BaseBehaviour, BetManager, UserManager, PokerTableUI, AsyncUtils, UserInforUI;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      PokerTableUI = module.PokerTableUI;
    }, function (module) {
      AsyncUtils = module.AsyncUtils;
    }, function (module) {
      UserInforUI = module.UserInforUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cf2degFR6NJtoa6UcBb9XyM", "WinPotBehaviour", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WinPotBehaviour = exports('WinPotBehaviour', (_dec = ccclass('WinPotBehaviour'), _dec(_class = /*#__PURE__*/function (_BaseBehaviour) {
        _inheritsLoose(WinPotBehaviour, _BaseBehaviour);

        function WinPotBehaviour() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseBehaviour.call.apply(_BaseBehaviour, [this].concat(args)) || this;
          _this._userManager = null;
          _this._userInforUI = null;
          _this._tableUI = null;
          _this._timeDelayBetweenWin = 2;
          return _this;
        }

        var _proto = WinPotBehaviour.prototype;

        _proto.startBehaviour = /*#__PURE__*/function () {
          var _startBehaviour = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var betManager, winners, allWinners, _iterator, _step, pot, _iterator3, _step3, winner, losers, _iterator2, _step2, _pot, _iterator4, _step4, _winner, _iterator5, _step5, _winner2;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._userManager = this.gameplayManager.getMiniManager(UserManager);
                    betManager = this.gameplayManager.getMiniManager(BetManager);
                    this._userInforUI = this.gameplayManager.getUI().get(UserInforUI);
                    this._tableUI = this.gameplayManager.getUI().get(PokerTableUI);
                    winners = betManager.winPot(); //ServiceLocator.register('winnerResult', winners);

                    allWinners = new Set();

                    for (_iterator = _createForOfIteratorHelperLoose(winners); !(_step = _iterator()).done;) {
                      pot = _step.value;

                      for (_iterator3 = _createForOfIteratorHelperLoose(pot.Winners); !(_step3 = _iterator3()).done;) {
                        winner = _step3.value;
                        allWinners.add(winner[0]);
                      }
                    }

                    losers = this._userManager.activeUsers.filter(function (u) {
                      return !allWinners.has(u) && !u.IsFold;
                    });
                    _iterator2 = _createForOfIteratorHelperLoose(winners);

                  case 9:
                    if ((_step2 = _iterator2()).done) {
                      _context.next = 35;
                      break;
                    }

                    _pot = _step2.value;

                    if (!(_pot.Winners.size > 1)) {
                      _context.next = 24;
                      break;
                    }

                    _iterator4 = _createForOfIteratorHelperLoose(_pot.Winners);

                  case 14:
                    if ((_step4 = _iterator4()).done) {
                      _context.next = 22;
                      break;
                    }

                    _winner = _step4.value;

                    _winner[0].getWinBet(_pot.PotAmount);

                    this.onSetEffect(_winner[0], _winner[1], losers);
                    _context.next = 20;
                    return this.onPlayAnim(_winner[0], false);

                  case 20:
                    _context.next = 14;
                    break;

                  case 22:
                    _context.next = 33;
                    break;

                  case 24:
                    _iterator5 = _createForOfIteratorHelperLoose(_pot.Winners);

                  case 25:
                    if ((_step5 = _iterator5()).done) {
                      _context.next = 33;
                      break;
                    }

                    _winner2 = _step5.value;

                    _winner2[0].getWinBet(_pot.PotAmount);

                    this.onSetEffect(_winner2[0], _winner2[1], losers);
                    _context.next = 31;
                    return this.onPlayAnim(_winner2[0], true);

                  case 31:
                    _context.next = 25;
                    break;

                  case 33:
                    _context.next = 9;
                    break;

                  case 35:
                    //await AsyncUtils.waitForSeconds(2.5);
                    this.endBehaviour();

                  case 36:
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

        _proto.onPlayAnim = /*#__PURE__*/function () {
          var _onPlayAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(winner, isWin) {
            var betManager, user, index;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    betManager = this.gameplayManager.getMiniManager(BetManager);
                    user = winner;
                    index = this._userManager.getIndexByUser(user);

                    this._userInforUI.getPanel(index); // if (isWin)
                    //     panel.onWin();
                    // else
                    //     panel.setEndEffect(EEndEffect.Draw);


                    this._tableUI.onUpdateTotalPot(betManager.totalBet); //this._tableUI.onShowHandRankWinner(panel.UserRank);
                    // this._tableUI.doChipEffect(
                    //     user.TotalEarn,
                    //     this._tableUI.totalPotNode.worldPosition,
                    //     panel.node.worldPosition,
                    //     this.config.TimeChipMoveToPot,
                    //     () => {
                    //         panel.spawnFloatingText(user.TotalEarn, true);
                    //         panel.onUpdateChip(user.userCurrency.currency);
                    //     }
                    // );


                    _context2.next = 7;
                    return AsyncUtils.waitForSeconds(this._timeDelayBetweenWin);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function onPlayAnim(_x, _x2) {
            return _onPlayAnim.apply(this, arguments);
          }

          return onPlayAnim;
        }();

        _proto.onSetEffect = function onSetEffect(user, cards, losers) {
          this.setUserCardEffectForWinner(user, cards); //this.setTableEffect(cards);

          this.setUserCardEffectForLosers(losers);
          this.setUserEffectForLoser(losers);
        } // ... existing effect methods ...
        ;

        _proto.setUserCardEffectForWinner = function setUserCardEffectForWinner(user, cards) {
          var panel = this.getUserPanel(user); //panel.highlightCards(cards);
        };

        _proto.setUserCardEffectForLosers = function setUserCardEffectForLosers(users) {
          var _this2 = this;

          users.forEach(function (user) {
            var panel = _this2.getUserPanel(user); //panel.setCardEffect(ECardEffect.Dim);

          });
        };

        _proto.setUserEffectForLoser = function setUserEffectForLoser(users) {
          var _this3 = this;

          users.forEach(function (user) {
            var index = _this3._userManager.getIndexByUser(user);

            var panel = _this3._userInforUI.getPanel(index); //panel.setEndEffect(EEndEffect.Lose);

          });
        };

        _proto.getUserPanel = function getUserPanel(user) {
          var index = this._userManager.getIndexByUser(user);

          var panel = this._userInforUI.getPanel(index); //return panel;


          return null;
        };

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