/**
 * MakeCode extension di test lamponi
 */
//% color=#009b5b icon="\uf1eb" block="Lamponi"
namespace lamponi {

    /**
    * Show FunFace
    */
    //% block="Show Fun Face"
    export function showFunFace() {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `);
        return
    }
}