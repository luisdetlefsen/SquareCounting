package kickstart;

/**
 *
 * @author lgdet
 */
public class Kickstart {

    public void f(int R, int C) {
        int r = 0;//(R - 1) * (C - 1);
        int t = 1;
        for (int i = 0; i < R - 1; i++) {
            for (int j = 0; j < C - 1; j++) {
                t = 1;
                while (t < R - i - 1 && t < C - j - 1) {
                    t++;
                }
                r += t;

                /* if (i < R - 2 && j > 0 && j <= C - 2) {
                 r += Math.min(R, C) - 2;
                 }*/
                if (i < R - 2 && j > 0 && j <= C - 2) {
                    r += (Math.max(Math.min(j, C - 1 - j), R - i) * 1) - 2;
                }

            }
        }
        System.out.println(R + " " + C + " = " + (r % 1000000007) + " | " + r);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Kickstart k = new Kickstart();
     //   k.f(2, 4); //3
        k.f(3, 4); //10
     //   k.f(4, 4); //20
        k.f(1000,500); //624937395

    }

}
