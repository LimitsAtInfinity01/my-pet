def wants_to_walk():
    if randint(0, 29) == 0:
        return True
    else:
        return False
def get_hungry():
    if randint(0, 1) == 0:
        return True
    else:
        return False
def wants_to_be_pet():
    if randint(0, 29) == 0:
        return True
    else:
        return False
def walking():
    while input.button_is_pressed(Button.B):
        basic.show_leds("""
            # . # # .
            . # # # .
            # # # # #
            # # # # .
            . # . # .
            """)
        basic.show_leds("""
            # . # # .
            . # # # .
            # # # # #
            # # # # .
            # . # . .
            """)
def main():
    global wants_walking, is_hungry, wants_pet
    while True:
        if not (is_hungry) and not (wants_walking) and not (wants_pet):
            basic.show_leds("""
                . . # # .
                . . # # .
                # # # # #
                # # # # .
                . # . # .
                """)
            is_hungry = get_hungry()
            wants_walking = wants_to_walk()
            wants_pet = wants_to_be_pet()
            if is_hungry:
                wants_walking = False
                wants_pet = False
            elif wants_walking:
                wants_pet = False
                is_hungry = False
            elif wants_pet:
                is_hungry = False
                wants_walking = False

        if is_hungry:
            while input.button_is_pressed(Button.B):
                basic.show_leds("""
                    . . . . .
                    # . . . #
                    # # # # #
                    # . . . #
                    . . . . .
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . #
                    . # # # #
                    . . . . #
                    . . . . .
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . .
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
            is_hungry = False
        if wants_walking:
            basic.show_leds("""
                . . . . .
                # . . . #
                # . # . #
                # # . # #
                # . . . #
                """)
            if input.button_is_pressed(Button.B):
                walking()
                wants_walking = False
        if wants_pet:
            basic.show_leds("""
                . # # # .
                . # # # .
                . # # # .
                # # # # .
                . # # # .
                """)
            if input.button_is_pressed(Button.B):
                wants_pet = False
wants_pet = False
wants_walking = False
is_hungry = False
main()