function wants_to_walk(): boolean {
    if (randint(0, 29) == 0) {
        return true
    } else {
        return false
    }
    
}

function get_hungry(): boolean {
    if (randint(0, 1) == 0) {
        return true
    } else {
        return false
    }
    
}

function wants_to_be_pet(): boolean {
    if (randint(0, 29) == 0) {
        return true
    } else {
        return false
    }
    
}

function walking() {
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . # # .
            . # # # .
            # # # # #
            # # # # .
            . # . # .
            `)
        basic.showLeds(`
            # . # # .
            . # # # .
            # # # # #
            # # # # .
            # . # . .
            `)
    }
}

function main() {
    
    while (true) {
        if (!is_hungry && !wants_walking && !wants_pet) {
            basic.showLeds(`
                . . # # .
                . . # # .
                # # # # #
                # # # # .
                . # . # .
                `)
            is_hungry = get_hungry()
            wants_walking = wants_to_walk()
            wants_pet = wants_to_be_pet()
            if (is_hungry) {
                wants_walking = false
                wants_pet = false
            } else if (wants_walking) {
                wants_pet = false
                is_hungry = false
            } else if (wants_pet) {
                is_hungry = false
                wants_walking = false
            }
            
        }
        
        if (is_hungry) {
            while (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . . . .
                    # . . . #
                    # # # # #
                    # . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . # # # #
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            is_hungry = false
        }
        
        if (wants_walking) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . # . #
                # # . # #
                # . . . #
                `)
            if (input.buttonIsPressed(Button.B)) {
                walking()
                wants_walking = false
            }
            
        }
        
        if (wants_pet) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                # # # # .
                . # # # .
                `)
            if (input.buttonIsPressed(Button.B)) {
                wants_pet = false
            }
            
        }
        
    }
}

let wants_pet = false
let wants_walking = false
let is_hungry = false
main()
