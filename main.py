while True: 
    print("input.rotation(Rotation.PITCH)" + "input.rotation(Rotation.ROLL)" )
    if input.rotation(Rotation.PITCH) and input.rotation(Rotation.ROLL) > 4:
        music.siren.play_until_done()
    else:
        music.stop_all_sounds()