'use strict';

const a0_0x282b = [
    'stroke',
    'arc',
    'beginPath',
    'getContext',
    'canvas',
    'strokeStyle',
    'floor',
];
(function (_0x5ad059, _0x282b49) {
    const _0x3b3661 = function (_0x2a9b1a) {
        while (--_0x2a9b1a) {
            _0x5ad059['push'](_0x5ad059['shift']());
        }
    };
    _0x3b3661(++_0x282b49);
})(a0_0x282b, 0x1e1);
const a0_0x3b36 = function (_0x5ad059, _0x282b49) {
    _0x5ad059 = _0x5ad059 - 0x0;
    let _0x3b3661 = a0_0x282b[_0x5ad059];
    return _0x3b3661;
};
const reference = (_0x15cb73, _0x5b8fad, _0x17f7e9) => {
    const _0x5aa0fb = document['createElement'](a0_0x3b36('0x6')),
        _0x5111a2 = _0x5aa0fb[a0_0x3b36('0x5')]('2d');
    for (var _0x55c541 = 0x0; _0x55c541 < _0x5b8fad; _0x55c541++) {
        for (var _0x29ed6e = 0x0; _0x29ed6e < _0x15cb73; _0x29ed6e++) {
            const _0x47952b = Math[a0_0x3b36('0x1')](
                    0xff - (0xff / _0x5b8fad) * _0x55c541,
                ),
                _0x5bf195 = Math[a0_0x3b36('0x1')](
                    0xff - (0xff / _0x15cb73) * _0x29ed6e,
                );
            (_0x5111a2[a0_0x3b36('0x0')] =
                'rgb(0,\x20' + _0x47952b + ',\x20' + _0x5bf195 + ')'),
                _0x5111a2[a0_0x3b36('0x4')](),
                _0x5111a2[a0_0x3b36('0x3')](
                    12.5 + _0x29ed6e * 0x19,
                    12.5 + _0x55c541 * 0x19,
                    _0x17f7e9,
                    0x0,
                    Math['PI'] * 0x2,
                    !![],
                ),
                _0x5111a2[a0_0x3b36('0x2')]();
        }
    }
    return _0x5aa0fb;
};
