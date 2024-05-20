#include <iostream>
#include <bits/stdc++.h>
using namespace std;
 int32_t main()
{
    int n;
    cin >> n;
    int target;
    cin >> target;
    vector < int> a(n);
    for (auto &i : a)
    {
        cin >> i;
    }
    bool found = false;
    sort(a.begin(), a.end());
    for (int i = 0; i < n; i++)
    {
        int lo = i+ 1, hi = n - 1;
        while (lo < hi)
        {
            int current = a[i] + a[lo] + a[hi];
            if (current == target)
            {
                found = true;
                cout << a[i] << " " << a[lo] << " "<< a[hi];
                break;
            }
            if (current < target)
            {
                lo++;
            }
            else
            {
                hi--;
            }
        }
    }
    // if (found)
    // {
    //     cout << "True";
    // }
    // else
    // {
    //     cout << "False";
    // }
}

    // int main(){
    //     using namespace std;
    //     int n,t;
    //     cin >> n;
    //     cin >> t;
    //     bool found = false;

    //     vector<int> a(n);
    //     for (int i = 0; i < n; i++){
    //         cin>>a[i];
    //     }
    //     for(int i = 0; i < n; i++){
    //         for (int j = i+1; j < n; j++)
    //         {
    //             for (int k = j + 1; k < n; k++){
    //                 if(a[i]+a[j]+a[k]==t) found = true;
    //                 break;
    //             }
    //         }
    //         if(found ==true)
    //             break;
    //     }

    //     return 0;
    // }
   
