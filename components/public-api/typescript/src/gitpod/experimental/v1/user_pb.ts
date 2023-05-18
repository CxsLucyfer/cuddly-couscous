/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file gitpod/experimental/v1/user.proto (package gitpod.experimental.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from message gitpod.experimental.v1.User
 */
export class User extends Message<User> {
  /**
   * id is a UUID of the user
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * name is the username
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * avatar_url is a link to the user avatar
   *
   * @generated from field: string avatar_url = 3;
   */
  avatarUrl = "";

  /**
   * created_at is the creation time
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.SSHKey
 */
export class SSHKey extends Message<SSHKey> {
  /**
   * id is a UUID of the SSH key
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * name is the name of the SSH key
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * key is the public SSH key
   *
   * @generated from field: string key = 3;
   */
  key = "";

  /**
   * created_at is the creation time
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<SSHKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.SSHKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SSHKey {
    return new SSHKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SSHKey {
    return new SSHKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SSHKey {
    return new SSHKey().fromJsonString(jsonString, options);
  }

  static equals(a: SSHKey | PlainMessage<SSHKey> | undefined, b: SSHKey | PlainMessage<SSHKey> | undefined): boolean {
    return proto3.util.equals(SSHKey, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetAuthenticatedUserRequest
 */
export class GetAuthenticatedUserRequest extends Message<GetAuthenticatedUserRequest> {
  constructor(data?: PartialMessage<GetAuthenticatedUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetAuthenticatedUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatedUserRequest {
    return new GetAuthenticatedUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatedUserRequest {
    return new GetAuthenticatedUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatedUserRequest {
    return new GetAuthenticatedUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatedUserRequest | PlainMessage<GetAuthenticatedUserRequest> | undefined, b: GetAuthenticatedUserRequest | PlainMessage<GetAuthenticatedUserRequest> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatedUserRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetAuthenticatedUserResponse
 */
export class GetAuthenticatedUserResponse extends Message<GetAuthenticatedUserResponse> {
  /**
   * @generated from field: gitpod.experimental.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<GetAuthenticatedUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetAuthenticatedUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatedUserResponse {
    return new GetAuthenticatedUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatedUserResponse {
    return new GetAuthenticatedUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatedUserResponse {
    return new GetAuthenticatedUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatedUserResponse | PlainMessage<GetAuthenticatedUserResponse> | undefined, b: GetAuthenticatedUserResponse | PlainMessage<GetAuthenticatedUserResponse> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatedUserResponse, a, b);
  }
}

/**
 * TODO: pagination options
 *
 * @generated from message gitpod.experimental.v1.ListSSHKeysRequest
 */
export class ListSSHKeysRequest extends Message<ListSSHKeysRequest> {
  constructor(data?: PartialMessage<ListSSHKeysRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.ListSSHKeysRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSSHKeysRequest {
    return new ListSSHKeysRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSSHKeysRequest {
    return new ListSSHKeysRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSSHKeysRequest {
    return new ListSSHKeysRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSSHKeysRequest | PlainMessage<ListSSHKeysRequest> | undefined, b: ListSSHKeysRequest | PlainMessage<ListSSHKeysRequest> | undefined): boolean {
    return proto3.util.equals(ListSSHKeysRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.ListSSHKeysResponse
 */
export class ListSSHKeysResponse extends Message<ListSSHKeysResponse> {
  /**
   * @generated from field: repeated gitpod.experimental.v1.SSHKey keys = 1;
   */
  keys: SSHKey[] = [];

  constructor(data?: PartialMessage<ListSSHKeysResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.ListSSHKeysResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keys", kind: "message", T: SSHKey, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSSHKeysResponse {
    return new ListSSHKeysResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSSHKeysResponse {
    return new ListSSHKeysResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSSHKeysResponse {
    return new ListSSHKeysResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSSHKeysResponse | PlainMessage<ListSSHKeysResponse> | undefined, b: ListSSHKeysResponse | PlainMessage<ListSSHKeysResponse> | undefined): boolean {
    return proto3.util.equals(ListSSHKeysResponse, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.CreateSSHKeyRequest
 */
export class CreateSSHKeyRequest extends Message<CreateSSHKeyRequest> {
  /**
   * name is the SSH key name
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * the public SSH key
   *
   * @generated from field: string key = 2;
   */
  key = "";

  constructor(data?: PartialMessage<CreateSSHKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.CreateSSHKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSSHKeyRequest {
    return new CreateSSHKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSSHKeyRequest {
    return new CreateSSHKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSSHKeyRequest {
    return new CreateSSHKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSSHKeyRequest | PlainMessage<CreateSSHKeyRequest> | undefined, b: CreateSSHKeyRequest | PlainMessage<CreateSSHKeyRequest> | undefined): boolean {
    return proto3.util.equals(CreateSSHKeyRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.CreateSSHKeyResponse
 */
export class CreateSSHKeyResponse extends Message<CreateSSHKeyResponse> {
  /**
   * @generated from field: gitpod.experimental.v1.SSHKey key = 1;
   */
  key?: SSHKey;

  constructor(data?: PartialMessage<CreateSSHKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.CreateSSHKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: SSHKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSSHKeyResponse {
    return new CreateSSHKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSSHKeyResponse {
    return new CreateSSHKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSSHKeyResponse {
    return new CreateSSHKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSSHKeyResponse | PlainMessage<CreateSSHKeyResponse> | undefined, b: CreateSSHKeyResponse | PlainMessage<CreateSSHKeyResponse> | undefined): boolean {
    return proto3.util.equals(CreateSSHKeyResponse, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetSSHKeyRequest
 */
export class GetSSHKeyRequest extends Message<GetSSHKeyRequest> {
  /**
   * id is the unique identifier of the SSH key to retreive.
   *
   * @generated from field: string key_id = 1;
   */
  keyId = "";

  constructor(data?: PartialMessage<GetSSHKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetSSHKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSSHKeyRequest {
    return new GetSSHKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSSHKeyRequest {
    return new GetSSHKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSSHKeyRequest {
    return new GetSSHKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSSHKeyRequest | PlainMessage<GetSSHKeyRequest> | undefined, b: GetSSHKeyRequest | PlainMessage<GetSSHKeyRequest> | undefined): boolean {
    return proto3.util.equals(GetSSHKeyRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetSSHKeyResponse
 */
export class GetSSHKeyResponse extends Message<GetSSHKeyResponse> {
  /**
   * @generated from field: gitpod.experimental.v1.SSHKey key = 1;
   */
  key?: SSHKey;

  constructor(data?: PartialMessage<GetSSHKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetSSHKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: SSHKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSSHKeyResponse {
    return new GetSSHKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSSHKeyResponse {
    return new GetSSHKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSSHKeyResponse {
    return new GetSSHKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSSHKeyResponse | PlainMessage<GetSSHKeyResponse> | undefined, b: GetSSHKeyResponse | PlainMessage<GetSSHKeyResponse> | undefined): boolean {
    return proto3.util.equals(GetSSHKeyResponse, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.DeleteSSHKeyRequest
 */
export class DeleteSSHKeyRequest extends Message<DeleteSSHKeyRequest> {
  /**
   * id is the unique identifier of the SSH key to retreive.
   *
   * @generated from field: string key_id = 1;
   */
  keyId = "";

  constructor(data?: PartialMessage<DeleteSSHKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.DeleteSSHKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSSHKeyRequest {
    return new DeleteSSHKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSSHKeyRequest {
    return new DeleteSSHKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSSHKeyRequest {
    return new DeleteSSHKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSSHKeyRequest | PlainMessage<DeleteSSHKeyRequest> | undefined, b: DeleteSSHKeyRequest | PlainMessage<DeleteSSHKeyRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSSHKeyRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.DeleteSSHKeyResponse
 */
export class DeleteSSHKeyResponse extends Message<DeleteSSHKeyResponse> {
  constructor(data?: PartialMessage<DeleteSSHKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.DeleteSSHKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSSHKeyResponse {
    return new DeleteSSHKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSSHKeyResponse {
    return new DeleteSSHKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSSHKeyResponse {
    return new DeleteSSHKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSSHKeyResponse | PlainMessage<DeleteSSHKeyResponse> | undefined, b: DeleteSSHKeyResponse | PlainMessage<DeleteSSHKeyResponse> | undefined): boolean {
    return proto3.util.equals(DeleteSSHKeyResponse, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetGitTokenRequest
 */
export class GetGitTokenRequest extends Message<GetGitTokenRequest> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  constructor(data?: PartialMessage<GetGitTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetGitTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGitTokenRequest {
    return new GetGitTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGitTokenRequest {
    return new GetGitTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGitTokenRequest {
    return new GetGitTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGitTokenRequest | PlainMessage<GetGitTokenRequest> | undefined, b: GetGitTokenRequest | PlainMessage<GetGitTokenRequest> | undefined): boolean {
    return proto3.util.equals(GetGitTokenRequest, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GetGitTokenResponse
 */
export class GetGitTokenResponse extends Message<GetGitTokenResponse> {
  /**
   * @generated from field: gitpod.experimental.v1.GitToken token = 1;
   */
  token?: GitToken;

  constructor(data?: PartialMessage<GetGitTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GetGitTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "message", T: GitToken },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGitTokenResponse {
    return new GetGitTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGitTokenResponse {
    return new GetGitTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGitTokenResponse {
    return new GetGitTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetGitTokenResponse | PlainMessage<GetGitTokenResponse> | undefined, b: GetGitTokenResponse | PlainMessage<GetGitTokenResponse> | undefined): boolean {
    return proto3.util.equals(GetGitTokenResponse, a, b);
  }
}

/**
 * @generated from message gitpod.experimental.v1.GitToken
 */
export class GitToken extends Message<GitToken> {
  /**
   * expiry_date is the date when the token will expire
   *
   * @generated from field: string expiry_date = 1;
   */
  expiryDate = "";

  /**
   * id_token is the unique identifier for the token
   *
   * @generated from field: string id_token = 2;
   */
  idToken = "";

  /**
   * refresh_token is the token used to refresh the git token
   *
   * @generated from field: string refresh_token = 3;
   */
  refreshToken = "";

  /**
   * scopes is a list of permissions associated with the token
   *
   * @generated from field: repeated string scopes = 4;
   */
  scopes: string[] = [];

  /**
   * update_date is the date when the token was last updated
   *
   * @generated from field: string update_date = 5;
   */
  updateDate = "";

  /**
   * username is the username associated with the token
   *
   * @generated from field: string username = 6;
   */
  username = "";

  /**
   * value is the actual token value for the token
   *
   * @generated from field: string value = 7;
   */
  value = "";

  constructor(data?: PartialMessage<GitToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gitpod.experimental.v1.GitToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "expiry_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "scopes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "update_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GitToken {
    return new GitToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GitToken {
    return new GitToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GitToken {
    return new GitToken().fromJsonString(jsonString, options);
  }

  static equals(a: GitToken | PlainMessage<GitToken> | undefined, b: GitToken | PlainMessage<GitToken> | undefined): boolean {
    return proto3.util.equals(GitToken, a, b);
  }
}
