sidebarNodes={"exceptions":[{"id":"McProtocol.ClosedError","title":"McProtocol.ClosedError","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]}],"extras":[{"id":"api-reference","title":"API Reference","headers":[]}],"modules":[{"id":"McProtocol","title":"McProtocol"},{"id":"McProtocol.Acceptor.Connection","title":"McProtocol.Acceptor.Connection","functions":[{"id":"apply_transition/2","anchor":"apply_transition/2"},{"id":"apply_transitions/2","anchor":"apply_transitions/2"},{"id":"handle_call/2","anchor":"handle_call/2"},{"id":"start_link/3","anchor":"start_link/3"}]},{"id":"McProtocol.Acceptor.Connection.State","title":"McProtocol.Acceptor.Connection.State","functions":[{"id":"set_compression/2","anchor":"set_compression/2"},{"id":"set_encryption/2","anchor":"set_encryption/2"}]},{"id":"McProtocol.Crypto.Login","title":"McProtocol.Crypto.Login","functions":[{"id":"get_auth_init_data/1","anchor":"get_auth_init_data/1"},{"id":"verification_hash/2","anchor":"verification_hash/2"},{"id":"verify_user_login/3","anchor":"verify_user_login/3"}]},{"id":"McProtocol.Crypto.Login.LoginVerifyResponse","title":"McProtocol.Crypto.Login.LoginVerifyResponse"},{"id":"McProtocol.Crypto.ServerKeyProvider","title":"McProtocol.Crypto.ServerKeyProvider","functions":[{"id":"get_keys/0","anchor":"get_keys/0"},{"id":"start_link/1","anchor":"start_link/1"}],"macros":[{"id":"rsa_priv_key/1","anchor":"rsa_priv_key/1"},{"id":"rsa_priv_key/2","anchor":"rsa_priv_key/2"},{"id":"rsa_pub_key/1","anchor":"rsa_pub_key/1"},{"id":"rsa_pub_key/2","anchor":"rsa_pub_key/2"}]},{"id":"McProtocol.Crypto.Transport","title":"McProtocol.Crypto.Transport","functions":[{"id":"decrypt/2","anchor":"decrypt/2"},{"id":"encrypt/2","anchor":"encrypt/2"}]},{"id":"McProtocol.Crypto.Transport.CryptData","title":"McProtocol.Crypto.Transport.CryptData"},{"id":"McProtocol.DataTypes","title":"McProtocol.DataTypes"},{"id":"McProtocol.DataTypes.Decode","title":"McProtocol.DataTypes.Decode","functions":[{"id":"bool/1","anchor":"bool/1"},{"id":"byte/1","anchor":"byte/1"},{"id":"byte_array_rest/1","anchor":"byte_array_rest/1"},{"id":"byte_flags/1","anchor":"byte_flags/1"},{"id":"chat/1","anchor":"chat/1"},{"id":"chunk/2","anchor":"chunk/2"},{"id":"double/1","anchor":"double/1"},{"id":"fixed_point_byte/1","anchor":"fixed_point_byte/1"},{"id":"fixed_point_int/1","anchor":"fixed_point_int/1"},{"id":"float/1","anchor":"float/1"},{"id":"int/1","anchor":"int/1"},{"id":"long/1","anchor":"long/1"},{"id":"position/1","anchor":"position/1"},{"id":"short/1","anchor":"short/1"},{"id":"slot/1","anchor":"slot/1"},{"id":"string/1","anchor":"string/1"},{"id":"u_byte/1","anchor":"u_byte/1"},{"id":"u_short/1","anchor":"u_short/1"},{"id":"varint/1","anchor":"varint/1"},{"id":"varint?/1","anchor":"varint?/1"},{"id":"varint_length_binary/1","anchor":"varint_length_binary/1"}]},{"id":"McProtocol.DataTypes.Encode","title":"McProtocol.DataTypes.Encode","functions":[{"id":"angle/1","anchor":"angle/1"},{"id":"bool/1","anchor":"bool/1"},{"id":"byte/1","anchor":"byte/1"},{"id":"byte_flags/1","anchor":"byte_flags/1"},{"id":"chat/1","anchor":"chat/1"},{"id":"data/1","anchor":"data/1"},{"id":"double/1","anchor":"double/1"},{"id":"fixed_point_byte/1","anchor":"fixed_point_byte/1"},{"id":"fixed_point_int/1","anchor":"fixed_point_int/1"},{"id":"float/1","anchor":"float/1"},{"id":"int/1","anchor":"int/1"},{"id":"long/1","anchor":"long/1"},{"id":"metadata/1","anchor":"metadata/1"},{"id":"position/1","anchor":"position/1"},{"id":"short/1","anchor":"short/1"},{"id":"string/1","anchor":"string/1"},{"id":"u_byte/1","anchor":"u_byte/1"},{"id":"u_short/1","anchor":"u_short/1"},{"id":"uuid/1","anchor":"uuid/1"},{"id":"uuid_string/1","anchor":"uuid_string/1"},{"id":"varint/1","anchor":"varint/1"},{"id":"varint_length_binary/1","anchor":"varint_length_binary/1"}]},{"id":"McProtocol.EntityMeta","title":"McProtocol.EntityMeta","functions":[{"id":"encode_type/2","anchor":"encode_type/2"},{"id":"idx_type/1","anchor":"idx_type/1"},{"id":"read/2","anchor":"read/2"},{"id":"read_r/2","anchor":"read_r/2"},{"id":"read_type/2","anchor":"read_type/2"},{"id":"type_idx/1","anchor":"type_idx/1"},{"id":"write/1","anchor":"write/1"},{"id":"write_type/1","anchor":"write_type/1"}]},{"id":"McProtocol.EntityMeta.Entity","title":"McProtocol.EntityMeta.Entity","functions":[{"id":"status/1","anchor":"status/1"}]},{"id":"McProtocol.Handler","title":"McProtocol.Handler","callbacks":[{"id":"handle/2","anchor":"c:handle/2"},{"id":"initial_state/1","anchor":"c:initial_state/1"},{"id":"parent_handler/0","anchor":"c:parent_handler/0"}],"functions":[{"id":"handler_stack/1","anchor":"handler_stack/1"}],"types":[{"id":"handler/0","anchor":"t:handler/0"},{"id":"handler_state/0","anchor":"t:handler_state/0"},{"id":"protocol_state/0","anchor":"t:protocol_state/0"},{"id":"transition/0","anchor":"t:transition/0"}]},{"id":"McProtocol.Handler.Handshake","title":"McProtocol.Handler.Handshake","functions":[{"id":"handle/2","anchor":"handle/2"},{"id":"initial_state/1","anchor":"initial_state/1"},{"id":"parent_handler/0","anchor":"parent_handler/0"},{"id":"state_atom/1","anchor":"state_atom/1"}]},{"id":"McProtocol.Handler.Login","title":"McProtocol.Handler.Login","functions":[{"id":"finish_login/1","anchor":"finish_login/1"},{"id":"handle/2","anchor":"handle/2"},{"id":"handle_packet/2","anchor":"handle_packet/2"},{"id":"handle_start/3","anchor":"handle_start/3"},{"id":"initial_state/1","anchor":"initial_state/1"},{"id":"parent_handler/0","anchor":"parent_handler/0"}]},{"id":"McProtocol.Handler.Status","title":"McProtocol.Handler.Status","functions":[{"id":"handle/2","anchor":"handle/2"},{"id":"handle_packet/2","anchor":"handle_packet/2"},{"id":"initial_state/1","anchor":"initial_state/1"},{"id":"parent_handler/0","anchor":"parent_handler/0"},{"id":"server_list_response/0","anchor":"server_list_response/0"}]},{"id":"McProtocol.NBT","title":"McProtocol.NBT","functions":[{"id":"read/2","anchor":"read/2"},{"id":"write/2","anchor":"write/2"}]},{"id":"McProtocol.Packet","title":"McProtocol.Packet","callbacks":[{"id":"direction/0","anchor":"c:direction/0"},{"id":"id/0","anchor":"c:id/0"},{"id":"name/0","anchor":"c:name/0"},{"id":"read/1","anchor":"c:read/1"},{"id":"state/0","anchor":"c:state/0"},{"id":"write/1","anchor":"c:write/1"}],"functions":[{"id":"id_module/3","anchor":"id_module/3"},{"id":"module_id/3","anchor":"module_id/3"},{"id":"read/4","anchor":"read/4"},{"id":"write/1","anchor":"write/1"}]},{"id":"McProtocol.Packet.ProtoDefTypes","title":"McProtocol.Packet.ProtoDefTypes","functions":[{"id":"add_types/1","anchor":"add_types/1"},{"id":"decode_entity_metadata/1","anchor":"decode_entity_metadata/1"},{"id":"decode_nbt/1","anchor":"decode_nbt/1"},{"id":"decode_optional_nbt/1","anchor":"decode_optional_nbt/1"},{"id":"decode_position/1","anchor":"decode_position/1"},{"id":"decode_rest/1","anchor":"decode_rest/1"},{"id":"decode_slot/1","anchor":"decode_slot/1"},{"id":"decode_uuid/1","anchor":"decode_uuid/1"},{"id":"encode_entity_metadata/1","anchor":"encode_entity_metadata/1"},{"id":"encode_nbt/1","anchor":"encode_nbt/1"},{"id":"encode_optional_nbt/1","anchor":"encode_optional_nbt/1"},{"id":"encode_position/1","anchor":"encode_position/1"},{"id":"encode_rest/1","anchor":"encode_rest/1"},{"id":"encode_slot/1","anchor":"encode_slot/1"},{"id":"encode_uuid/1","anchor":"encode_uuid/1"},{"id":"types/0","anchor":"types/0"}]},{"id":"McProtocol.Transport.Read","title":"McProtocol.Transport.Read","functions":[{"id":"initial_state/0","anchor":"initial_state/0"},{"id":"process/2","anchor":"process/2"},{"id":"set_compression/2","anchor":"set_compression/2"},{"id":"set_encryption/2","anchor":"set_encryption/2"}]},{"id":"McProtocol.Transport.Write","title":"McProtocol.Transport.Write","functions":[{"id":"initial_state/0","anchor":"initial_state/0"},{"id":"process/2","anchor":"process/2"},{"id":"set_compression/2","anchor":"set_compression/2"},{"id":"set_encryption/2","anchor":"set_encryption/2"}]},{"id":"McProtocol.UUID","title":"McProtocol.UUID","functions":[{"id":"bin/1","anchor":"bin/1"},{"id":"from_bin/1","anchor":"from_bin/1"},{"id":"from_hex/1","anchor":"from_hex/1"},{"id":"hex/1","anchor":"hex/1"},{"id":"hex_hyphen/1","anchor":"hex_hyphen/1"},{"id":"hyphenize_string/1","anchor":"hyphenize_string/1"},{"id":"uuid4/0","anchor":"uuid4/0"}]}],"protocols":[]}