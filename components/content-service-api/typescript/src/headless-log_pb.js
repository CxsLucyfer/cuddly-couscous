/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// source: headless-log.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
    return this || window || global || self || Function("return this")();
}.call(null);

goog.exportSymbol("proto.contentservice.ListLogsRequest", null, global);
goog.exportSymbol("proto.contentservice.ListLogsResponse", null, global);
goog.exportSymbol("proto.contentservice.LogDownloadURLRequest", null, global);
goog.exportSymbol("proto.contentservice.LogDownloadURLResponse", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.LogDownloadURLRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.LogDownloadURLRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.contentservice.LogDownloadURLRequest.displayName = "proto.contentservice.LogDownloadURLRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.LogDownloadURLResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.LogDownloadURLResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.contentservice.LogDownloadURLResponse.displayName = "proto.contentservice.LogDownloadURLResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.ListLogsRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.ListLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.contentservice.ListLogsRequest.displayName = "proto.contentservice.ListLogsRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.ListLogsResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.contentservice.ListLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.contentservice.ListLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.contentservice.ListLogsResponse.displayName = "proto.contentservice.ListLogsResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.contentservice.LogDownloadURLRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.contentservice.LogDownloadURLRequest.toObject(opt_includeInstance, this);
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.contentservice.LogDownloadURLRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.contentservice.LogDownloadURLRequest.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                ownerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                workspaceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
                instanceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
                taskId: jspb.Message.getFieldWithDefault(msg, 4, ""),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.LogDownloadURLRequest}
 */
proto.contentservice.LogDownloadURLRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.contentservice.LogDownloadURLRequest();
    return proto.contentservice.LogDownloadURLRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.LogDownloadURLRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.LogDownloadURLRequest}
 */
proto.contentservice.LogDownloadURLRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setOwnerId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setWorkspaceId(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setInstanceId(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setTaskId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.LogDownloadURLRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.contentservice.LogDownloadURLRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.LogDownloadURLRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.LogDownloadURLRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOwnerId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getWorkspaceId();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getInstanceId();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getTaskId();
    if (f.length > 0) {
        writer.writeString(4, f);
    }
};

/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.contentservice.LogDownloadURLRequest.prototype.getOwnerId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.LogDownloadURLRequest} returns this
 */
proto.contentservice.LogDownloadURLRequest.prototype.setOwnerId = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string workspace_id = 2;
 * @return {string}
 */
proto.contentservice.LogDownloadURLRequest.prototype.getWorkspaceId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.LogDownloadURLRequest} returns this
 */
proto.contentservice.LogDownloadURLRequest.prototype.setWorkspaceId = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string instance_id = 3;
 * @return {string}
 */
proto.contentservice.LogDownloadURLRequest.prototype.getInstanceId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.LogDownloadURLRequest} returns this
 */
proto.contentservice.LogDownloadURLRequest.prototype.setInstanceId = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string task_id = 4;
 * @return {string}
 */
proto.contentservice.LogDownloadURLRequest.prototype.getTaskId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.LogDownloadURLRequest} returns this
 */
proto.contentservice.LogDownloadURLRequest.prototype.setTaskId = function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.contentservice.LogDownloadURLResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.contentservice.LogDownloadURLResponse.toObject(opt_includeInstance, this);
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.contentservice.LogDownloadURLResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.contentservice.LogDownloadURLResponse.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                url: jspb.Message.getFieldWithDefault(msg, 1, ""),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.LogDownloadURLResponse}
 */
proto.contentservice.LogDownloadURLResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.contentservice.LogDownloadURLResponse();
    return proto.contentservice.LogDownloadURLResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.LogDownloadURLResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.LogDownloadURLResponse}
 */
proto.contentservice.LogDownloadURLResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setUrl(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.LogDownloadURLResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.contentservice.LogDownloadURLResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.LogDownloadURLResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.LogDownloadURLResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getUrl();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.contentservice.LogDownloadURLResponse.prototype.getUrl = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.LogDownloadURLResponse} returns this
 */
proto.contentservice.LogDownloadURLResponse.prototype.setUrl = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.contentservice.ListLogsRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.contentservice.ListLogsRequest.toObject(opt_includeInstance, this);
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.contentservice.ListLogsRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.contentservice.ListLogsRequest.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                ownerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
                workspaceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
                instanceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.ListLogsRequest}
 */
proto.contentservice.ListLogsRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.contentservice.ListLogsRequest();
    return proto.contentservice.ListLogsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.ListLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.ListLogsRequest}
 */
proto.contentservice.ListLogsRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setOwnerId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setWorkspaceId(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setInstanceId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.ListLogsRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.contentservice.ListLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.ListLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.ListLogsRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOwnerId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getWorkspaceId();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getInstanceId();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
};

/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.contentservice.ListLogsRequest.prototype.getOwnerId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.ListLogsRequest} returns this
 */
proto.contentservice.ListLogsRequest.prototype.setOwnerId = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string workspace_id = 2;
 * @return {string}
 */
proto.contentservice.ListLogsRequest.prototype.getWorkspaceId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.ListLogsRequest} returns this
 */
proto.contentservice.ListLogsRequest.prototype.setWorkspaceId = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string instance_id = 3;
 * @return {string}
 */
proto.contentservice.ListLogsRequest.prototype.getInstanceId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.contentservice.ListLogsRequest} returns this
 */
proto.contentservice.ListLogsRequest.prototype.setInstanceId = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.contentservice.ListLogsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.contentservice.ListLogsResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.contentservice.ListLogsResponse.toObject(opt_includeInstance, this);
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.contentservice.ListLogsResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.contentservice.ListLogsResponse.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                taskIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.ListLogsResponse}
 */
proto.contentservice.ListLogsResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.contentservice.ListLogsResponse();
    return proto.contentservice.ListLogsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.ListLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.ListLogsResponse}
 */
proto.contentservice.ListLogsResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.addTaskId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.ListLogsResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.contentservice.ListLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.ListLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.ListLogsResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getTaskIdList();
    if (f.length > 0) {
        writer.writeRepeatedString(1, f);
    }
};

/**
 * repeated string task_id = 1;
 * @return {!Array<string>}
 */
proto.contentservice.ListLogsResponse.prototype.getTaskIdList = function () {
    return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.contentservice.ListLogsResponse} returns this
 */
proto.contentservice.ListLogsResponse.prototype.setTaskIdList = function (value) {
    return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.contentservice.ListLogsResponse} returns this
 */
proto.contentservice.ListLogsResponse.prototype.addTaskId = function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.contentservice.ListLogsResponse} returns this
 */
proto.contentservice.ListLogsResponse.prototype.clearTaskIdList = function () {
    return this.setTaskIdList([]);
};

goog.object.extend(exports, proto.contentservice);
