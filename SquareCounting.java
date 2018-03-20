
package suarecounting;

import java.math.BigInteger;

/**
 *
 * @author luisdetlefsen
 */
public class SquareCounting {

    
    long solve(int R, int C){
        BigInteger result = BigInteger.ZERO;
        if(R<C)
        {
            int t = C;
            C = R;
            R = t;
        }
        
        
        for (int i = 1; i <= C-1; i++) {
          result =  result.add( BigInteger.valueOf(i * (R-i)*(C-i))).mod(BigInteger.valueOf(1000000007));
          //  result +=  ;
        }
        
        return result.mod(BigInteger.valueOf(1000000007)).longValue();
    }
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        SquareCounting s = new SquareCounting();
        
        System.out.println(s.solve(1000000000, 1000000000));
    }
    
}
