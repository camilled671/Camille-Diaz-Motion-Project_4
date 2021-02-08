while True: 
    if input.rotation(Rotation.PITCH) + input.rotation(Rotation.ROLL) > 50:
        music.siren.play_until_done()
    else:
        music.stop_all_sounds()