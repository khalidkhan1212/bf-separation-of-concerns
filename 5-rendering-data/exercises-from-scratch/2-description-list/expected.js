'use strict';

const a0_0x6eaa = [
    'appendChild',
    'innerHTML',
    'value',
    'className',
    'createElement',
];
(function (_0x32ab82, _0x6eaad8) {
    const _0x242ba1 = function (_0x2344a3) {
        while (--_0x2344a3) {
            _0x32ab82['push'](_0x32ab82['shift']());
        }
    };
    _0x242ba1(++_0x6eaad8);
})(a0_0x6eaa, 0x139);
const a0_0x242b = function (_0x32ab82, _0x6eaad8) {
    _0x32ab82 = _0x32ab82 - 0x0;
    let _0x242ba1 = a0_0x6eaa[_0x32ab82];
    return _0x242ba1;
};
const reference = (_0x1f6d44) => {
    const _0x4ed55c = document[a0_0x242b('0x1')]('dl');
    for (const _0x10b7d6 in _0x1f6d44) {
        if (_0x10b7d6[0x0] === '_') continue;
        const _0xd70ac1 = document[a0_0x242b('0x1')]('dt');
        (_0xd70ac1['innerHTML'] = camelCaseToTitleCase(_0x10b7d6)),
            _0x4ed55c[a0_0x242b('0x2')](_0xd70ac1);
        const _0x54f670 = document[a0_0x242b('0x1')]('dd');
        (_0x54f670[a0_0x242b('0x3')] = String(_0x1f6d44[_0x10b7d6])),
            (_0x54f670[a0_0x242b('0x0')] = a0_0x242b('0x4')),
            _0x4ed55c[a0_0x242b('0x2')](_0x54f670);
    }
    return _0x4ed55c;
};
