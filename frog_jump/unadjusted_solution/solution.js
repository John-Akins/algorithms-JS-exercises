/**
 * Get minimal number of Jumps from X to Y,
 * Given D as fixed distance of jump
 *      - Get B as distance between current position X and destination Y
 *      - Check if distance B leaves extra jumping distance at jumping rate of D
 *      - Number of jumps equal
 *          B/D has remainder ?
 *              - (B divided by fixed jump distance D) + 1
 *              :
 *              - B divided by fixed jump distance D
 */
 function solution(X, Y, D) {
    const distance_x_to_y = Y - X;
    const has_extra_jump = distance_x_to_y % D > 0;
    const jumps = Math.floor(distance_x_to_y / D) 
    return has_extra_jump ? jumps + 1 : jumps;
}
