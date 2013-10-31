# Kudo Node Test

A repository to test Windows Azure Web Site deployments of large node projects.

To deploy on Azure, make sure you have the XPlat tools set up, and type the following.

```
$ git clone https://github.com/richorama/KuduNodeTest.git
$ cd KuduNodeTest
$ azure site create --git
$ git push azure master
```
